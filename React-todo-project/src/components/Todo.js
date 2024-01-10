//every time todos theke ekti ekti ko re todo made korte cacchi
//basically form er niccher part tokor kaj hocce ei kahne
//todo parent todos er parent home
//todo -- todos -- home

import React from 'react';
import style from './todo.module.css';

/*props er sahajje value recieve */
const Todo = (props) => {
    const { title, desc } = props.todo; //todo theke title and desc ke ni nicchi chaile id o ni e ni te pari
    const { id } = props; //id ta ke props theke koje nicchi
    const handleClick = (id) => {
        props.onRemoveTodo(id);
    };
    return (
        <article className={style.todo}>
            <div>
                <h3>{title}</h3> {/*tittle and desc ta ke load korchi */}
                <p>{desc}</p>
            </div>
            <div>
                <button
                    className={style.btn}
                    onClick={() => {
                        handleClick(id);
                    }}>
                    <i className="fa fa-trash fa-2x"></i>
                </button>
            </div>
        </article>
    );
};

export default Todo;
