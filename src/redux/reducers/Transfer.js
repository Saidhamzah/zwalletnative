const initialState = {
    data: [],
    loading: false,
    isSuccess: false,
    message : ''
  };
  
  export const Transfer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORM_TRF_FILLED':
            return {
                ...state,
                data: action.payload
            }
        case 'TRANSFER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'TRANSFER_SUCCESS':
            return {
                ...state,
                loading: false,
                isSuccess: true,
                message: 'Transfer Success'
            }
        case 'TRANSFER_FAILED':
            return {
                ...state,
                loading: false,
                isSuccess: false,
                message: action.payload.message
            }
        case 'WRONG_PIN':
            return {
                ...state,
                loading: false,
                isSuccess: false,
                message: action.payload.message
            }
        default:
            return {
                ...state,
                message: '',
                isSuccess: false
            }
    }
}