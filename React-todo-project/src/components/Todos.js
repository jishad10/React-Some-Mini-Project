import React from 'react';

import Todo from './Todo';
import style from './todos.module.css';

//home theke jegola pass kortechi oi gola recieve kortechi props er sahajje
const Todos = (props) => {
    return (
        <section className={style.todos}>
            {props.todos.map((todo) => (
                <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo} />
            ))}
            {/* todo theke todo ke pass korte hobe
            todos theke amra todo te data pass korechi
             todo component ta todo ke ready ko re di be  & every time new todo create korbo tai key di e dichi*/}
        </section>
    );
};

export default Todos;
