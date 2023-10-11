import { configureStore } from "@reduxjs/toolkit";
import { modalFeedbackSlice } from "./modalSlice/feedbackModal.slice";

export const store = configureStore({
    reducer: {
        modalFeedback: modalFeedbackSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

// export {modalServiceSlice}
export type TypeRootState = ReturnType<typeof store.getState>