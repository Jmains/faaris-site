import SongCard from "../../songCard/SongCard";
import s from "./LatestRelease.module.css";
export default function LatestRelease() {
  return (
    <div className={s.latest} id="latestReleaseSection">
      <div className="container">
        <h2 className={s.latest__title}>Latest Release</h2>
        <div className={s.latest__songContainer}>
          <SongCard song={songs} />
        </div>
      </div>
    </div>
  );
}

const songs = {
  img: "/blindCover.JPG",
  author: "Faaris",
  title: "Blind",
  alt: "Blind",
  url: "https://open.spotify.com/track/3wh34i5NHe6JRKHwlvXNYW?si=ST60faXKQymMmRv8qSSElQ",
};
