import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, text: 'Hi, how are you?'},
                {id: 2, text: "It's my first post!"}
            ],
            newPostText: 'd'
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state)
    }
}



export default store;
