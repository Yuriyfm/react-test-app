
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
        posts: [
            {id: 1, text: 'Hi, how are you?'},
            {id: 2, text: "It's my first post!"}
        ],
        newPostText: 'd'
};

export const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: {
            return{...state,
                posts:[...state.posts, {id: 5, text: state.newPostText}],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state,
            newPostText: action.text}
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
