import s from "./VideosSection.module.css";

export default function VideosSection() {
  return (
    <div class={s.videos__container} id="videosSection">
      <div className="container">
        <h2 className={s.videos__title}>Videos</h2>
        <div className={s.videos__vidContainer}>
          <iframe className={s.video} src="https://www.youtube.com/embed/pEwZyRSOnEE"></iframe>
        </div>
      </div>
    </div>
  );
}
