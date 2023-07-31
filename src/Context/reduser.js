export const initialState={
    isLoggedIn:false,
    usersBus:[],
    usersId:"",
    usersSeats:"",
    usersDate:"",
    selectedDate:""
}

export const stateReducer=(state,action)=>{
    // console.log("state",state,"action",action)
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        case "search":
            return{
                ...state,
                usersBus:action.payload,
            };
        case "confirmId":
            return{
                ...state,
                usersId:action.payload,
            };
        case "confirmSeats":
            return{
                ...state,
                usersSeats:action.payload,
            };
        case "confirmDate":
            return{
                ...state,
                usersDate:action.payload,
            };  
        case "date":
            return{
                ...state,
                selectedDate:action.payload,
            };    
            default:
                return state;
    }
}