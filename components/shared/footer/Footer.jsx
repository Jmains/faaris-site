import { scrollToElement } from "../../../utils/scrollToElement";
import { Instagram, Itunes, Soundcloud, Spotify, Twitter, Youtube } from "../../icons";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__content}>
          <div className={`${s.footer__col} ${s.footer__logoWrapper}`}>
            <a href="/" className={s.footer__logo}>
              Faaris
            </a>
            <div className={s.footer__addressContainer}>
              <p style={{ marginTop: "1rem", color: "rgb(77,77,77)" }}>
                <span style={{ fontWeight: "600", color: "#0C0C0C" }}>Email: </span>
                faarissattar@gmail.com
              </p>
            </div>
          </div>
          <div className={s.footer__col}>
            <p className={s.footer__col_title}>Links</p>
            <ul className={s.footer__col_linksContainer}>
              <li className={s.footer__col_item}>
                <span
                  onClick={() => {
                    scrollToElement("discoSection");
                  }}
                  className={s.footer__col_link}
                >
                  Discography
                </span>
              </li>
              <li className={s.footer__col_item}>
                <span
                  onClick={() => {
                    scrollToElement("aboutSection");
                  }}
                  className={s.footer__col_link}
                >
                  About
                </span>
              </li>
              <li className={s.footer__col_item}>
                <span className={s.footer__col_link}>Tour</span>
              </li>
              <li className={s.footer__col_item}>
                <span className={s.footer__col_link}>Videos</span>
              </li>
              <li className={s.footer__col_item}>
                <span className={s.footer__col_link}>Contact</span>
              </li>
            </ul>
          </div>

          <div className={s.footer__col}>
            <p className={s.footer__col_title}>Socials</p>
            <ul className={s.footer__col_linksContainer}>
              <li className={s.footer__col_item}>
                <a
                  href="https://www.instagram.com/faaris.mp3/?hl=en"
                  className={s.footer__col_link}
                >
                  Instagram
                </a>
              </li>
              <li className={s.footer__col_item}>
                <a href="https://twitter.com/faaris_mp3" className={s.footer__col_link}>
                  Twitter
                </a>
              </li>
              <li className={s.footer__col_item}>
                <a
                  href="https://www.youtube.com/channel/UCWUJDpdUF7NC5HMj6k1s5gA"
                  className={s.footer__col_link}
                >
                  Youtube
                </a>
              </li>
              <li className={s.footer__col_item}>
                <a href="https://soundcloud.com/faarismusic" className={s.footer__col_link}>
                  SoundCloud
                </a>
              </li>
              <li className={s.footer__col_item}>
                <a
                  href="https://music.apple.com/us/artist/faaris/1546574247"
                  className={s.footer__col_link}
                >
                  iTunes
                </a>
              </li>
              <li className={s.footer__col_item}>
                <a
                  href="https://open.spotify.com/artist/2wi8Z4BaQWkxQ6W8u8Q6uq"
                  className={s.footer__col_link}
                >
                  Spotify
                </a>
              </li>
            </ul>
          </div>
          <div className={`${s.footer__col} ${s.footer__col_socials}`}>
            <ul className={s.footer__col_social}>
              <li className={s.footer__col_socialItem}>
                <a href="https://twitter.com/faaris_mp3" className={s.footer__col_socialLink}>
                  <Twitter className={s.footer__col_link} />
                </a>
              </li>
              <li className={s.footer__col_socialItem}>
                <a
                  href="https://www.instagram.com/faaris.mp3/?hl=en"
                  className={s.footer__col_socialLink}
                >
                  <Instagram className={s.footer__col_link} />
                </a>
              </li>
              <li className={s.footer__col_socialItem}>
                <a
                  href="https://www.youtube.com/channel/UCWUJDpdUF7NC5HMj6k1s5gA"
                  className={s.footer__col_socialLink}
                >
                  <Youtube className={s.footer__col_link} />
                </a>
              </li>
              <li className={s.footer__col_socialItem}>
                <a
                  href="https://open.spotify.com/artist/2wi8Z4BaQWkxQ6W8u8Q6uq"
                  className={s.footer__col_socialLink}
                >
                  <Spotify className={s.footer__col_link} />
                </a>
              </li>
              <li className={s.footer__col_socialItem}>
                <a
                  href="https://music.apple.com/us/artist/faaris/1546574247"
                  className={s.footer__col_socialLink}
                >
                  <Itunes className={s.footer__col_link} />
                </a>
              </li>
              <li className={s.footer__col_socialItem}>
                <a
                  href="https://soundcloud.com/faarismusic"
                  className={s.footer__col_socialLink}
                >
                  <Soundcloud className={s.footer__col_link} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
