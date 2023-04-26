import React from 'react';
import classes from './TodoCard.module.css';
import Button from '../Button/Button';

const TodoCard = ({ task, handleDone, handleDelete }) => {
    return (
        <div className={classes.card}>
            <div className={classes.title}>
                <h2>{task.title}</h2>
            </div>
            <div className={classes.buttons}>
                <Button handleClick={() => handleDone(task.id)}>
                    {task.completed ? 'Отменить' : 'Готово'}
                </Button>
                <Button handleClick={() => handleDelete(task.id)}>Удалить</Button>
            </div>
        </div>
    );
};

export default TodoCard;