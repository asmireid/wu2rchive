import clsx from 'clsx';
import styles from './styles.module.css';

export default function ImageCard({ image, title, description, link, maxWidth }) {
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
                {description && <small className={styles.description}>{description}</small>}
            </div>
        </div>
    );
}
