import React from 'react';
import UsersList from "../components/UsersList";


const Users = () => {
    const USRERS = [{id: 'u1', name: 'Mike', image: 'https://images.pexels.com/photos/3932961/pexels-photo-3932961.jpeg?cs=srgb&dl=pexels-tatiana-syrikova-3932961.jpg&fm=jpg', places: 3}];
    
    return <UsersList items={USRERS} />;
};

export default Users;