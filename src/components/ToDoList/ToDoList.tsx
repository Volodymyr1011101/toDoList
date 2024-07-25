import { imageConfig } from '@/imageConfig';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { Filter, ITodo } from '../ToDo/ToDo';
import styles from './ToDoList.module.scss';
interface Props {
    toDos: ITodo[];
    setToDos: Dispatch<SetStateAction<ITodo[]>>;
    activeFilter: Filter;
}

const ToDoList: NextComponentType<NextPageContext, {}, Props> = ({ toDos, setToDos, activeFilter }: Props) => {
    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const items = Array.from(toDos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setToDos(items);
    };
    const handleDeleteToDoItem = (toDoId: string) => {
        setToDos(prev => prev.filter(item => item.id !== toDoId));
    };
    const handleToggleComplete = (toDoId: string) => {
        setToDos(prev => prev.map(item => (item.id === toDoId ? { ...item, isComplete: !item.isComplete } : item)));
    };
    const handleDeleteCompleted = (toDoList: ITodo[]) => {
        setToDos(prev => prev.filter(item => item.isComplete !== true));
    };
    const itemsLeftToDo = (toDoItems: ITodo[]) => {
        const itemsLeft = toDoItems.filter(item => item.isComplete !== true);
        return itemsLeft.length;
    };
    const filterToDos = (toDos: ITodo[], filter: Filter) => {
        switch (filter) {
            case 'active':
                return toDos.filter(toDo => !toDo.isComplete);
            case 'completed':
                return toDos.filter(toDo => toDo.isComplete);
            case 'all':
            default:
                return toDos;
        }
    };
    const filteredToDos = filterToDos(toDos, activeFilter);

    return (
        <div className={styles.todoListItems}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId={'droppable'}>
                    {provided => (
                        <ul className={`${styles.todoList}`} {...provided.droppableProps} ref={provided.innerRef}>
                            {filteredToDos.length > 0 ? (
                                filteredToDos.map((todo, index) => (
                                    <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                        {provided => (
                                            <li className={styles.todoItem} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <input
                                                    type="checkbox"
                                                    id={todo.id}
                                                    className={styles.toDoCheckbox}
                                                    onChange={() => handleToggleComplete(todo.id)}
                                                />
                                                <label htmlFor={todo.id} className={`${styles.toDoLabel} ${todo.isComplete && styles.complete}`}>
                                                    <span className={`${styles.checkedIcon} ${todo.isComplete && styles.done}`}>
                                                        {todo.isComplete && <Image {...imageConfig.checked} />}
                                                    </span>
                                                    {todo.todo}
                                                </label>
                                                <button onClick={() => handleDeleteToDoItem(todo.id)}>
                                                    <Image {...imageConfig.delete} />
                                                </button>
                                            </li>
                                        )}
                                    </Draggable>
                                ))
                            ) : (
                                <li className={styles.emptyListItem}>You don't have any tasks yet</li>
                            )}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <div className={styles.additionalInfo}>
                <span>{itemsLeftToDo(toDos)} items left</span>
                <button onClick={() => handleDeleteCompleted(toDos)}>Clear Completed</button>
            </div>
        </div>
    );
};

export default ToDoList;
