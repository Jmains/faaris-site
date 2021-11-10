import { Instagram, Itunes, Soundcloud, Spotify, Twitter, Youtube } from "../../icons";
import s from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={s.hero}>
      <div style={{ position: "relative" }} className="container">
        <div className={s.hero__contentContainer}>
          <h1 className={s.hero__title}>Faaris</h1>
          <p className={s.hero__description}>Artist</p>
          <div className={s.hero__btnsContainer}>
            <a
              rel="noopener noreferrer"
              href="https://open.spotify.com/artist/2wi8Z4BaQWkxQ6W8u8Q6uq"
              className={s.hero__button}
            >
              Listen now
            </a>
            <button className={s.hero__learnBtn}>Contact</button>
          </div>
        </div>
        <ul className={s.socials}>
          <li className={s.socials__listItem}>
            <a rel="noopener noreferrer" href="https://www.instagram.com/faaris.mp3/?hl=en">
              <Instagram className={s.socialIcon} />
            </a>
          </li>
          <li className={s.socials__listItem}>
            <a rel="noopener noreferrer" href="https://twitter.com/faaris_mp3">
              <Twitter className={s.socialIcon} />
            </a>
          </li>
          <li className={s.socials__listItem}>
            <a
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCWUJDpdUF7NC5HMj6k1s5gA"
            >
              <Youtube className={s.socialIcon} />
            </a>
          </li>
          <li className={s.socials__listItem}>
            <a rel="noopener noreferrer" href="https://soundcloud.com/faarismusic">
              <Soundcloud className={s.socialIcon} />
            </a>
          </li>
          <li className={s.socials__listItem}>
            <a
              rel="noopener noreferrer"
              href="https://music.apple.com/us/artist/faaris/1546574247"
            >
              <Itunes className={s.socialIcon} />
            </a>
          </li>
          <li className={s.socials__listItem}>
            <a
              rel="noopener noreferrer"
              href="https://open.spotify.com/artist/2wi8Z4BaQWkxQ6W8u8Q6uq"
            >
              <Spotify className={s.socialIcon} />
            </a>
          </li>
        </ul>
        <div className={s.hero__spotifyStats}>
          <a
            rel="noopener noreferrer"
            href="https://open.spotify.com/artist/2wi8Z4BaQWkxQ6W8u8Q6uq"
          >
            <Spotify color="#1DB954" height="2rem" width="2rem" />
          </a>
          <p>Monthly Listeners</p>
          <p>7,326</p>
        </div>
      </div>
    </div>
  );
}
