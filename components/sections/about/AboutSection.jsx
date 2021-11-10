import s from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <div id="aboutSection" className={s.about}>
      <div className="container">
        <div className={s.about__contentWrapper}>
          <div className={s.about__textWrapper}>
            <h2 className={s.about__title}>About</h2>
            <p className={s.about__description}>
              Faaris Sattar, better known by his stage name Faaris, is a 23 y.o.
              <span style={{ color: "var(--pri-btnColor)" }}> rapper</span>, born and raised in
              Austin, TX. He broke into music scene with his first song{" "}
              <a
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
                href="https://open.spotify.com/album/1lWSYvfg0ur3I5eNmghk8G"
              >
                Presidential
              </a>
              , released in January 2021.
            </p>
          </div>

          <div role="img" className={s.about__img} alt="faaris sitting down" />
        </div>
      </div>
    </div>
  );
}
