import type { NextComponentType, NextPageContext } from 'next';
import { Dispatch, SetStateAction } from 'react';
import { Filter } from '../ToDo/ToDo';
import styles from './FilterComponent.module.scss';
interface Props {
    activeFilter: Filter;
    setActiveFilter: Dispatch<SetStateAction<Filter>>;
}

const FilterComponent: NextComponentType<NextPageContext, {}, Props> = ({ activeFilter, setActiveFilter }: Props) => {
    return (
        <div className={styles.filterBlock}>
            <button className={activeFilter && activeFilter === 'all' ? styles.activeFilter : ''} onClick={() => setActiveFilter('all')}>
                All
            </button>
            <button className={activeFilter && activeFilter === 'active' ? styles.activeFilter : ''} onClick={() => setActiveFilter('active')}>
                Active
            </button>
            <button className={activeFilter && activeFilter === 'completed' ? styles.activeFilter : ''} onClick={() => setActiveFilter('completed')}>
                Completed
            </button>
        </div>
    );
};

export default FilterComponent;
