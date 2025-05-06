import clsx from 'clsx';
import styles from './styles.module.css';

export default function Signature({ children }) {
    return (
        <div className={clsx(styles.rightAlign)}>
            <em>{children}</em>
        </div>
    );
}