import React from "react";
import { CompositeDecorator, DraftEditorCommand, DraftEntityMutability, EditorState, KeyBindingUtil, RichUtils, getDefaultKeyBinding } from "draft-js";
import { BlockType, EntityType, InlineStyle } from "./TextEditor/config";
import LinkDecorator from './TextEditor/Link';
import { HTMLtoState, stateToHTML } from "./convert";

export type EditorApi = {
  state: EditorState;
  onChange: (state: EditorState) => void;
  currentBlockType: BlockType;
  toggleBlockType: (blockType: BlockType) => void;
  toggleInlineStyle: (inlineStyle: InlineStyle) => void;
  hasInlineStyle: (inlineStyle: InlineStyle) => boolean;
  addLink: (url: string) => void;
  setEntityData: (entityKey: string, data: any) => void;
  handleKeyCommand: (command: DraftEditorCommand, editorState:EditorState) => "handled" | "not-handled";
  handlerKeyBinding: (e: React.KeyboardEvent) => DraftEditorCommand | null | 'accent';
  toHtml: () => string;
};

const decorator = new CompositeDecorator([LinkDecorator]);

export const useEditor = (html?: string): EditorApi => {
    const [state, setState] = React.useState(() => html ? EditorState.createWithContent(HTMLtoState(html), decorator) : EditorState.createEmpty(decorator));

  const toggleBlockType = React.useCallback((blockType: BlockType) => {
    setState((currentState) =>
      RichUtils.toggleBlockType(currentState, blockType)
    );
  }, []);

  const currentBlockType = React.useMemo(() => {
    /* Шаг 1 */
    const selection = state.getSelection();
    /* Шаг 2 */
    const content = state.getCurrentContent();
    /* Шаг 3 */
    const block = content.getBlockForKey(selection.getStartKey());
    /* Шаг 4 */
    return block.getType() as BlockType;
  }, [state]);

  const toggleInlineStyle = React.useCallback((inlineStyle: InlineStyle) => {
    setState((currentState) =>
      RichUtils.toggleInlineStyle(currentState, inlineStyle)
    );
  }, []);

  const hasInlineStyle = React.useCallback(
    (inlineStyle: InlineStyle) => {
      /* Получаем иммутабельный Set с ключами стилей */
      const currentStyle = state.getCurrentInlineStyle();
      /* Проверяем содержится ли там переданный стиль */
      return currentStyle.has(inlineStyle);
    },
    [state]
  );
  // const hasBlockType = React.useCallback(
  //   (blockType: BlockType) => {
  //     /* Получаем иммутабельный Set с ключами стилей */
  //     const currentStyle = state.getCurrentInlineStyle()
  //     console.log(currentStyle)
  //     /* Проверяем содержится ли там переданный стиль */
  //     return currentStyle.has(blockType);
  //   },
  //   [state]
  // );
  const addEntity = React.useCallback((entityType: EntityType, data: Record<string, string>, mutability: DraftEntityMutability) => {
    setState((currentState) => {
    /* Получаем текущий контент */
      const contentState = currentState.getCurrentContent();
    /* Создаем Entity с данными */
      const contentStateWithEntity = contentState.createEntity(entityType, mutability, data);
    /* Получаем уникальный ключ Entity */
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    /* Обьединяем текущее состояние с новым */
      const newState = EditorState.set(currentState, { currentContent: contentStateWithEntity });
      /* Вставляем ссылку в указанное место */
    return RichUtils.toggleLink(newState, newState.getSelection(), entityKey);
})
}, []);

const addLink = React.useCallback((url:any) => {
    addEntity(EntityType.link, { url }, 'MUTABLE')
}, [addEntity]);

const setEntityData = React.useCallback((entityKey:any, data:any) => {
    setState((currentState) => {
      /* Получаем текущий контент */
      const content = currentState.getCurrentContent();
      /* Объединяем текущие данные Entity с новыми */
      const contentStateUpdated = content.mergeEntityData(
        entityKey,
        data,
      )
      /* Обновляем состояние редактора с указанием типа изменения */
      return EditorState.push(currentState, contentStateUpdated, 'apply-entity');
    })
  }, []);

  const handleKeyCommand = React.useCallback((command: DraftEditorCommand | 'accent', editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (command === 'accent') {
        toggleInlineStyle(InlineStyle.ACCENT);
        return 'handled'
    }

  if (newState) {
           setState(newState);
        return 'handled';
      }
      

      return 'not-handled';
}, [toggleInlineStyle]);

const handlerKeyBinding = React.useCallback((e: React.KeyboardEvent) => {
    /* Проверяем нажата ли клавиша q + ctrl/cmd */
  if (e.keyCode === 81 && KeyBindingUtil.hasCommandModifier(e)) {
      return 'accent';
  }
    
  return getDefaultKeyBinding(e);
}, []);

const toHtml = React.useCallback(() => {
    return stateToHTML(state.getCurrentContent());
}, [state]);


  return React.useMemo(
    () => ({
      state,
      onChange: setState,
      toggleBlockType,
      currentBlockType,
      toggleInlineStyle,
      hasInlineStyle,
      addLink,
      setEntityData,
      handleKeyCommand,
      handlerKeyBinding,
      toHtml
    }),
    [state,handleKeyCommand,toHtml, handlerKeyBinding, toggleBlockType, currentBlockType, toggleInlineStyle, hasInlineStyle,addLink,setEntityData]
  );
};


