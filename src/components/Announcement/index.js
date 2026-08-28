import { useEffect, useId, useRef } from 'react';
import styles from './styles.module.css';

export default function Announcement({ title = '公告', closeText = '我知道了', children }) {
    const dialogRef = useRef(null);
    const titleId = useId();

    useEffect(() => {
        const dialog = dialogRef.current;
        dialog.showModal();

        return () => dialog.close();
    }, []);

    const close = () => dialogRef.current?.close();

    const closeFromBackdrop = (event) => {
        const dialog = dialogRef.current;
        const rect = dialog.getBoundingClientRect();
        const isOutside =
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom;

        if (isOutside) close();
    };

    return (
        <dialog
            ref={dialogRef}
            className={styles.dialog}
            aria-labelledby={titleId}
            onClick={closeFromBackdrop}
        >
            <header className={styles.header}>
                <h2 id={titleId} className={styles.title}>{title}</h2>
                <button
                    type="button"
                    className={styles.close}
                    aria-label="关闭公告"
                    onClick={close}
                >
                    ×
                </button>
            </header>
            <div className={styles.body}>{children}</div>
            <footer className={styles.footer}>
                <button type="button" className="button button--primary" onClick={close}>
                    {closeText}
                </button>
            </footer>
        </dialog>
    );
}
