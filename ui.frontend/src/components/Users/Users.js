/*
Copyright 2022 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying it.
*/
import React from "react";
import { Link } from "react-router-dom";
import { usersAll } from "../../api/usePersistedQueries";
import Error from "../Error";
import Loading from "../Loading";
import './Users.scss';

function Users() {
    const { users, error } = usersAll();

    // Handle error and loading conditions
    if (error) {
        return <Error errorMessage={error} />;
    } else if (!users) {
        return <Loading />;
    }

    return (
        <div className="users">
            <ul className="user-items">
                {users.map((user, index) => {
                    return <UserListItem key={index} {...user} />
                })}
            </ul>
        </div>
    );
}

// Render individual User item
function UserListItem({ firstName, lastName, birthDay }) {
    // Must have these properties...
    if (!firstName || !lastName) {
        return null;
    }

    return (
        <li className="user-item">
            <Link to={`/user/${slug}`}>
                <img className="user-item-image" src="" alt="{firstName} {lastName}" />
            </Link>
            <div className="user-item-title">{firstName} {lastName}</div>
        </li>
    );
}

export default Users;
