import clsx from 'clsx';
import styles from './styles.module.css';

export default function MemberCard({ name, subtitle, avatar, link, children }) {
    const AvatarElement = (
        <img
            className={clsx("avatar__photo", styles.coverImage)}
            alt={name}
            src={avatar}
        />
    );

    return (
        <blockquote>
            <div className={clsx("avatar", styles.avatarDiv)}>
                {link ? (
                    <a href={link} target="_blank">
                        {AvatarElement}
                    </a>
                ) : (
                    AvatarElement
                )}
                <div className="avatar__intro">
                    <div className={clsx("avatar__name", styles.namePrimary)}>{name}</div>
                    {subtitle && <small className="avatar__subtitle">{subtitle}</small>}
                </div>
            </div>
            {children}
        </blockquote>
    );
}
