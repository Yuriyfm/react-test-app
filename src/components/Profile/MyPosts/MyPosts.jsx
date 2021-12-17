import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let PostsElements = props.posts.map((item) => <Post id={item.id} message={item.text} />);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div className={s.posts}>
        <h3>MyPosts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
            </div>
            <button onClick={ onAddPost } >Add Post</button>
        </div>
        {PostsElements}
        </div>
}

export default MyPosts;