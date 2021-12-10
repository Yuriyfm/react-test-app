import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    // debugger;
    return (
        <div className={classes.item}>
        <img src="https://datavyhoda.ru/wp-content/uploads/2019/02/avatar-3-data-vyhoda-1200x520.jpg"/>
        post 1
    </div>
    )
}

export default Post;