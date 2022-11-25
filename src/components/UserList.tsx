import React, {FC} from 'react';
import {IUser} from "../types/types";
//import UserItem from "./UserItem";

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {

    return (
        <div>
            {users.map(user =>
                <div style={{padding: '15px', border: '1px solid gray'}}>
                    {user.id}. {user.name} lives in the city {user.address.city} on the street {user.address.street}
                </div>
            )}
        </div>
    );
};

export default UserList;