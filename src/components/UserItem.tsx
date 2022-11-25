import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: '15px', border: '1px solid gray'}}>
            {user.id}. {user.name} lives in the city {user.address.city} on the street {user.address.street}
        </div>
    );
};

export default UserItem;