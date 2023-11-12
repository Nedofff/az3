import { useTypedSelector } from "../useTypedSelector";



export const useTextEditor = () => useTypedSelector(state => state.textEditor)
