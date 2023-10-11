import {useMemo} from 'react'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { modalFeedbackSlice } from '@/store/modalSlice/feedbackModal.slice'

const useModalFeedbackActions = () => {
    const dispatch = useDispatch()


    return useMemo(() => bindActionCreators(modalFeedbackSlice.actions, dispatch), [dispatch])
}

export default useModalFeedbackActions