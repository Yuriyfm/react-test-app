import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
        <img src="https://datavyhoda.ru/wp-content/uploads/2019/02/avatar-3-data-vyhoda-1200x520.jpg"/>
            {props.message}
    </div>
    )
};

export default Post;