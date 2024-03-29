import s from "./SongCard.module.css";

export default function SongCard({ song }) {
    return (
        <a className={s.card} rel="noreferrer noopener" target="_blank" href={song.url}>
            <div className={s.card__container}>
                <img loading="lazy" className={s.card__img} src={song.img} alt={song.alt} />
                <p className={s.card__author}>{song.author}</p>
                <p className={s.card__title}>{song.title}</p>
            </div>
        </a>
    );
}
