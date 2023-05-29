const initialState = {
    selectedItems: []
}

const counterReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD-ITEM":
            return {
                ...state,
                selectedItems: action.payload
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].vote_count++;
            return {
                ...state
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].vote_count--;
            return {
                ...state
            }
        default: 
            return state;
    }   
}

export default counterReducer;