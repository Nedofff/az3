import {useMemo} from 'react'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {textEditorSlice} from '@/store/textEditorSlice/textEditor.slice'

const useTextEditorActions = () => {
    const dispatch = useDispatch()


    return useMemo(() => bindActionCreators(textEditorSlice.actions, dispatch), [dispatch])
}

export default useTextEditorActions