import clsx from 'clsx';
import styles from './styles.module.css';

export default function ImageCard({ image, title, subtitle, link, maxWidth, children }) {
    const ImageElement = (
        <img className={styles.image} src={image} alt={title} />
    );

    const cardStyle = maxWidth ? { maxWidth } : undefined;

    return (
        <div className={clsx('card', styles.card)} style={cardStyle}>
            <div className="card__image">
                {link ? (
                    <a href={link} target="_blank">
                        {ImageElement}
                    </a>
                ) : (
                    ImageElement
                )}
            </div>
            <div className="card__body">
                <h4 className={styles.title}>{title}</h4>
                {subtitle && <small className={styles.subtitle}>{subtitle}</small>}
                {children}
            </div>
        </div>
    );
}
