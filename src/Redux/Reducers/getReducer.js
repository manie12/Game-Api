import { fetchData } from '../Types';
const reducer = (state = [], action) => {
    switch (action.type) {
        case fetchData:
            return action.payload;
        default:
            return state;
    }
}
export default reducer;




