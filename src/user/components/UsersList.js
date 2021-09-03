import React from 'react';
import UsersItem from './UserItem';
import "./UsersList.css";

const UsersList = props => {
    if(props.items.length === 0)
    {
        return (
            <div className = "center">Users not found.</div>
        );
    }

    return  ( 
        <ul>
            {props.items.map (user => (
                <UsersItem 
                
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name}
                placeCount={user.places}  
                
                />
            ))}
        </ul>
    );
};

export default UsersList;