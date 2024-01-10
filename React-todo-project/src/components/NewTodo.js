//uporer from ta eikahne create kortechi

import React, { useState } from 'react';
import style from './newtodo.module.css';

const NewTodo = (props) => {
    //ei props er modde onAddtodo thakbe
    const [todo, setTodo] = useState({ title: '', desc: '' }); //data golo ke koje nicchi
    const { title, desc } = todo;

    //previous state er upor base ko re todo ta ke update korbo
    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: event.target.value };
        });
    };

    //from submit er por title and desc field ta empty thakbe
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo); //todo ke pataachi
        setTodo({ title: '', desc: '' });
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style['form-field']}>
                {/* 2 ta word tai 3rd bracket er modde rakte hobe  && value er modde tittle ta ke pass ko re dicchi*/}
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" value={title} onChange={handleChange} />
            </div>
            <div className={style['form-field']}>
                <label htmlFor="desc">Description: </label>
                <textarea type="text" id="desc" name="desc" value={desc} onChange={handleChange} />
            </div>
            <button type="submit">Add todo</button>
        </form>
    );
};

export default NewTodo;
