import React, {useEffect, useState} from 'react';
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import UserPage from "./page/UserPage";
import TodosPage from "./page/TodosPage";

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
                <Route path={'/todos'} element={<TodosPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;