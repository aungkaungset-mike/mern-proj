import React from 'react';
import UsersList from "../components/UsersList";


const Users = () => {
    const USRERS = [{id: 'u1', name: 'Mike', image: 'https://images.pexels.com/photos/5825584/pexels-photo-5825584.jpeg?cs=srgb&dl=pexels-charlotte-may-5825584.jpg&fm=jpg', places: 3}];
    
    return <UsersList items={USRERS} />;
};

export default Users;