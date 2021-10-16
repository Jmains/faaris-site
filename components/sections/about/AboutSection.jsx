import s from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <div id="aboutSection" className={s.about}>
      <div className="container">
        <div className={s.about__contentWrapper}>
          <div className={s.about__textWrapper}>
            <h2 className={s.about__title}>About</h2>
            <p className={s.about__description}>
              Faaris Sattar, better known by his stage name Faaris, is a 23 y.o. singer and
              rapper, born and raised in Austin, TX. He broke into music scene with his first
              song Presidential, released in month 2021.
            </p>
            <p style={{ marginTop: "1rem" }} className={s.about__description}>
              Since then, he has been building his career as a performer with his clever
              lyricism delivered over hard-hitting instrumentals.
            </p>
          </div>
          <div role="img" className={s.about__img} alt="faaris sitting down" />
        </div>
      </div>
    </div>
  );
}
