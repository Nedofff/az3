import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IState {
    isOpen: boolean
    countAnswers: number
    answers: any
    approximatePrice: number
}
interface ISelectAnswerActions {
   id:string
   value: string | null
   answerRank: string
}
const initialState: IState = {
    isOpen: false,
    countAnswers: 0,
    answers: {},
    approximatePrice: 120000
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

            const answerRank = actions.payload.answerRank
            switch (answerRank) {
                case '1':
                    state.approximatePrice = Math.max(120000, state.approximatePrice)
                    break;
                case '2':
                    state.approximatePrice = Math.max(150000, state.approximatePrice)
                    break;
                case '3':
                    state.approximatePrice = Math.max(180000, state.approximatePrice)
                    break;
                case '4':
                    state.approximatePrice = Math.max(200000, state.approximatePrice)
                    break;
                case 'SELECT':
                    break;
                default:
                    state.approximatePrice = Math.max(200000, state.approximatePrice)
                    break;
            }

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