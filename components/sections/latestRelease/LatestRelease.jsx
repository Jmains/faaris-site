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
  img: "/damnSon.JPG",
  author: "Faaris",
  title: "DAMN SON",
  alt: "Damn Son",
  url: "https://open.spotify.com/track/6ycByjWt7QAvDDW8DkopRt?si=tPYdK_ZKSVifWhIMT4lyQQ",
};
