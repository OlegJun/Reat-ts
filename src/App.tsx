import React, {useEffect, useState} from 'react';
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, Route} from "react-router-dom";
import UserPage from "./page/UserPage";

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
        <div>
            <EventsExample/>
            <UserPage/>
            <List
                items={todos}
                renderItem={(todo: ITodo) =>
                    <TodoItem todo={todo} key={todo.id}/>
                }
            />
        </div>
    );
}

export default App;