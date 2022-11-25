import React, {useEffect, useState} from 'react';
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import UserPage from "./page/UserPage";
import TodosPage from "./page/TodosPage";
import UserPersonalPage from "./page/UserPersonalPage";

function App() {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos () {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <BrowserRouter>
            <header>
                <Link to={'/users'}>
                    Users
                </Link>
                <Link to={'/todos'}>
                    Todos
                </Link>
            </header>
            <Routes>
                <Route path={'/users'} element={<UserPage/>}/>
                <Route path={'/users/:id'} element={<UserPersonalPage/>}/>
                <Route path={'/todos'} element={<TodosPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;