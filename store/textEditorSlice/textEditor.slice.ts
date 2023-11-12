import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
    preinstalledContent: string
}

const initialState:IState = {
    preinstalledContent:''
}
// useTextEditor
// useTextEditorActions
export const textEditorSlice = createSlice({
    name: "textEditor",
    initialState,
    reducers: {
        setPreinstalledContent(state, actions:PayloadAction<string>) {
            state.preinstalledContent = actions.payload
        },
        clearPreinstalledContent(state) {
            state.preinstalledContent = ''
        }
    },
})