import React from 'react'
import propTypes from 'prop-types'


const Profile = (props) => {
    return(
        <div>
        
        {props.children}
        <h4>{props.name}</h4>
        <h4>{props.namedefault}</h4>
        <p>{props.bio}</p>
        <h4>{props.profession}</h4>        
        </div>

    )
}

Profile.defaultProps = {
     namedefault : 'AFBF_DEV'
}

Profile.propTypes = {
namedefault : propTypes.string.isRequired
}


export default Profile;