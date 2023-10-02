import { configureStore } from "@reduxjs/toolkit";
// import { modalServiceSlice } from "./modalSlice/modalSlice";


// import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// export const modalServiceSlice = createSlice({
//     name: 'modalSevice',
//     initialState,
//     reducers: {    }
// })

export const store = configureStore({
    reducer: {
        // TODO: Сделать редюсер
        // LIKE modalService: modalServiceSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

// export {modalServiceSlice}
export type TypeRootState = ReturnType<typeof store.getState>