const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Vasya'},
            {id: 4, name: 'Vova'}
        ],
        messages: [
            {id: 1, text: "Hi"},
            {id: 2, text: "Hello world!"},
            {id: 3, text: "London is a capital of Great Britain!"},
            {id: 4, text: "Wubba Lubba Dub Dub!"}
        ],
        newMessageBody: ""
};

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, text: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})