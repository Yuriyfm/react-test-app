import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
      <div>
          <img src="https://bigenc.ru/media/2016/10/27/1235208547/19117.jpg"/>
          <div className={s.descriptionBlock}>
              User_name
          </div>
      </div>
    );
}

export default ProfileInfo;