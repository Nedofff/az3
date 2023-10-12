import {useMemo} from 'react'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { modalTestSlice } from '@/store/modalSlices/testModal.slice'

const useModalTestActions = () => {
    const dispatch = useDispatch()


    return useMemo(() => bindActionCreators(modalTestSlice.actions, dispatch), [dispatch])
}

export default useModalTestActions