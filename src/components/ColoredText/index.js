import clsx from 'clsx';
import styles from './styles.module.css';

export default function ColoredText({ color, colorDark, children }) {
    const style = {
        '--text-color': color,
        ...(colorDark ? { '--text-color-dark': colorDark } : {}),
    };

    return (
        <span className={clsx(styles.coloredText)} style={style}>
            {children}
        </span>
    );
}