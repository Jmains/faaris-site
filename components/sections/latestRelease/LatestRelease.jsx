import SongCard from "../../songCard/SongCard";
import s from "./LatestRelease.module.css";
export default function LatestRelease() {
  return (
    <div className={s.latest} id="latestReleaseSection">
      <div className="container">
        <h2 className={s.latest__title}>Latest Release</h2>
        <div className="">
          <SongCard song={songs} />
        </div>
      </div>
    </div>
  );
}

const songs = {
  img: "/StillSleepinCover.jpg",
  author: "Faaris Ft. Keralanka",
  title: "Still Sleepin",
  alt: "Still Sleepin",
  url: "https://open.spotify.com/album/5Qp1qOnSkBcrKtX6dGUNTU",
};
