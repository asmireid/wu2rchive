import clsx from 'clsx';
import styles from './styles.module.css';

export default function Spoiler({ children }) {
    return (
        <span className={clsx(styles.spoiler)}>
            {children}
        </span>
    );
}