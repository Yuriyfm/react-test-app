import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return <div>
        <img src="https://bigenc.ru/media/2016/10/27/1235208547/19117.jpg"/>
        profile path
        <MyPosts />
        </div>
}

export default Profile