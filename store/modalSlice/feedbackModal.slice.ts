import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const modalFeedbackSlice = createSlice({
    name: "modalFeedback",
    initialState: {
        isOpen: false,
        whatFeedback: 'idle',
    },
    reducers: {
        openModal(state, actions:PayloadAction<string>) {
            state.isOpen = true;
            state.whatFeedback = actions.payload
        },
        closeModal(state) {
            state.isOpen = false;
        },
    },
})