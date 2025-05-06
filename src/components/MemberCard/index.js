import clsx from 'clsx';
import styles from './styles.module.css';

export default function MemberCard({ name, subtitle, avatar, link }) {
    return (
        <div className="avatar">
            {link ? (
                <a
                    className="avatar__photo-link avatar__photo"
                    href={link}
                    target="_blank"
                >
                    <img alt={`${name} Profile`} src={avatar} />
                </a>
            ) : (
                <img
                    className="avatar__photo"
                    alt={`${name} Profile`}
                    src={avatar}
                />
            )}
            <div className="avatar__intro">
                <div className={clsx("avatar__name", styles.namePrimary)}>{name}</div>
                {subtitle && <small className="avatar__subtitle">{subtitle}</small>}
            </div>
        </div>
    );
}
