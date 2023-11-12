import { configureStore } from "@reduxjs/toolkit";
import { modalFeedbackSlice } from "./modalSlices/feedbackModal.slice";
import { modalTestSlice } from "./modalSlices/testModal.slice";
import { textEditorSlice } from "./textEditorSlice/textEditor.slice";

export const store = configureStore({
    reducer: {
        modalFeedback: modalFeedbackSlice.reducer,
        modalTest: modalTestSlice.reducer,
        textEditor: textEditorSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

// export {modalServiceSlice}
export type TypeRootState = ReturnType<typeof store.getState>