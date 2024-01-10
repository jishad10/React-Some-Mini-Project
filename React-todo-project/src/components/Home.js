//todo golo ke todos namer component e pass korbo & todos component theke ekti ekti ko re todos create korbo
//home er modde basically sob golo ke accecess kortechi

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Todos from './Todos';
import style from './home.module.css';
import NewTodo from './NewTodo';

const Home = () => {
    const [todos, setTodos] = useState([]); //todos golo ke rakar jonno and sorote amra empty rakchi

    //newtodo child oi khan theke data pass korte cacchi tai && previeous todo golo ke ey todos er sathe add korbo
    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), todo }]; //per er sathe new todo add hobe
        });
    };

    //just select id ke remove korbo ar golo ke reke dibo
    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
            return filteredTodos;
        });
    };

    return (
        <div className={style.container}>
            <h1 style={{ color: 'white' }}>Todo App</h1>
            <NewTodo onAddTodo={handleAddTodo} />
            {/* onAdTodo props er maddome value patabo */}
            {todos && <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />}
            {/* home theke jabo todos e oi khan theke amra id ta koje ni e asbo
            && todos theke jabo todo te id koje nie asar jonno */}
            <button
                className={style.btn}
                onClick={() => {
                    setTodos([]);
                }}>
                Clear All todos
            </button>
        </div>
    );
};

export default Home;
