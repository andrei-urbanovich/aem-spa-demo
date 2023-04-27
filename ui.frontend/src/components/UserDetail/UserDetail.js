import React from 'react';
import { Link, useParams } from "react-router-dom";
import { userBySlug } from "../../api/usePersistedQueries";
import backIcon from '../../images/icon-close.svg';
import { mapJsonRichText } from '../../utils/renderRichText';
import './UserDetail.scss';
import Error from "../Error";
import Loading from "../Loading";

function UserDetail() {
    // Read the slug value which is the parameter used to query for the user details
    const { slug } = useParams();

    // Query AEM for the user details, using the `slug`
    const { user, error } = userBySlug(slug);

    // Handle error and loading conditions
    if (error) {
        return <Error errorMessage={error} />;
    } else if (!user) {
        return <Loading />;
    }

    return (<div className="user-detail">
        <Link className="user-detail-close-button" to="/">
            <img className="Backbutton-icon" src={backIcon} alt="Return" />
        </Link>
        <UserDetailRender {...user} />
    </div>);
}

function UserDetailRender({
    firstName,
    lastName,
    birthDay }) {

    return (<>
        <h1 className="user-detail-title">User</h1>
        <div className="user-detail-info">
            <div className="user-detail-info-label">First Name</div>
            <div className="user-detail-info-description">{firstName}</div>
            <div className="user-detail-info-label">Last Name</div>
            <div className="user-detail-info-description">{lastName}</div>
            <div className="user-detail-info-label">Birthday</div>
            <div className="user-detail-info-description">{birthDay}</div>
        </div>
    </>
    );
}

export default UserDetail;
