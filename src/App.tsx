import React from 'react';
import UserList from "./components/UserList";
import {IUser} from "./types/types";

function App() {
    const users: IUser[] = [
        {id: 1, name: "Leanne Graham", email: "Sincere@april.biz", address: {street: "Kulas Light", city: "Gwenborough", zipcode: "92998-3874",}},
        {id: 2, name: "Oleg Graham", email: "Sincere@april.biz", address: {street: "Kulas Light", city: "Gwenborough", zipcode: "92998-3874",}},
        {id: 3, name: "Sasha Graham", email: "Sincere@april.biz", address: {street: "Kulas Light", city: "Gwenborough", zipcode: "92998-3874",}}
    ]
    return (
        <div>
            <UserList users={users}/>
        </div>
    );
}

export default App;