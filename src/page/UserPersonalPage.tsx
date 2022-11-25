import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";



const UserPersonalPage:FC = () => {

    const [user, setUser] = useState<IUser | null>(null)

    const navigator = useNavigate()
    const { id }: any = useParams()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser () {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div>
            <button onClick={() => navigator('/users')}>Back</button>
            <h1>{user?.id}.User page: {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city}, {user?.address.street}, {user?.address.zipcode}
            </div>

        </div>
    );
};

export default UserPersonalPage;