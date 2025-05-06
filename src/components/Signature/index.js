import clsx from 'clsx';
import styles from './styles.module.css';

export default function Signature({ name }) {
    return (
        <div className={clsx(styles.rightAlign)}>
            <em>{name}</em>
        </div>
    );
}