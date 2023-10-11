import { useTypedSelector } from "./useTypedSelector";



export const useModalFeedback = () => useTypedSelector(state => state.modalFeedback)
