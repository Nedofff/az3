import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IState {
    isOpen: boolean
    countAnswers: number
    answers: any
}
interface ISelectAnswerActions {
   id:string
   value: string | null
}
const initialState: IState = {
    isOpen: false,
    countAnswers: 0,
    answers: {}
}


export const modalTestSlice = createSlice({
    name: "modalTest",
    initialState,
    reducers: {
        openModal(state) {
            state.isOpen = true;
        },
        selectAnswer(state, actions: PayloadAction<ISelectAnswerActions>) {
            state.answers[actions.payload.id] = actions.payload.value
            state.countAnswers = Object.keys(state.answers).length

            // if (Object.keys(state.answers).length === 5) {
            //     state.countAnswers = true
            // }
            // if (Object.keys(state.answers).length === 10) {
            //     state.countAnswers = true
            // }
            // if (Object.keys(state.answers).length === 16) {
            //     state.countAnswers = true
            // }
            // if (Object.keys(state.answers).length === 19) {
            //     state.countAnswers = true
            // }
            // if (Object.keys(state.answers).length === 25) {
            //     state.countAnswers = true
            // }
        },
        resetAnswer(state) {
            state.answers = {}
        },
        closeModal(state) {
            state.isOpen = false;
        },
    },
})