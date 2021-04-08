import { fetchData } from '../Types';

export const getActionData = (data) => async (dispatch) => {
    try {
        dispatch({ type: fetchData, payload: data })

    } catch (error) {
        console.log(error)
    }

}
