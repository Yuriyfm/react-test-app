import React from "react";
import styles from "./users.module.css";
import * as axios from 'axios'
import userPhoto from '../../assets/images/img.png'


let Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                            : <button onClick={ () =>{ props.follow(u.id) } }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.id}</div>
                    </span>
                    <span>
                    </span>
                </span>
            </div>)}
        </div>
)
}
export default Users;