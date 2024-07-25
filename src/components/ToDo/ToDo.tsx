'use client';
import type { NextComponentType, NextPageContext } from 'next';
import { ReactElement, useState } from 'react';
import FilterComponent from '../FilterComponent/FilterComponent';
import FormComponent from '../Form/FormComponent';
import ToDoList from '../ToDoList/ToDoList';
import styles from './ToDo.module.scss';

interface Props {
    title: string;
    image: ReactElement;
}

export interface ITodo {
    id: string;
    todo: string;
    isComplete: boolean;
}
export type Filter = 'all' | 'active' | 'completed';
const ToDo: NextComponentType<NextPageContext, {}, Props> = ({ title, image }: Props) => {
    const [toDos, setToDos] = useState<ITodo[]>([]);
    const [activeFilter, setActiveFilter] = useState<Filter>('all');

    return (
        <>
            <div className={styles.mainWrapper}>
                <div className={styles.head}>
                    <h1>{title}</h1>
                    {image}
                </div>
                <div className="flex flex-col gap-6">
                    <FormComponent setToDos={setToDos} />
                    <ToDoList toDos={toDos} setToDos={setToDos} activeFilter={activeFilter} />
                    <FilterComponent activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                </div>
            </div>
        </>
    );
};

export default ToDo;
