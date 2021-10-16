import { Sliders } from "../../shared/slider/Slider";
import s from "./DiscographySection.module.css";
export default function DiscographySection() {
  return (
    <div
      id="discoSection"
      style={{ position: "relative", overflowX: "hidden" }}
      className={s.disco}
    >
      <div className="container">
        <div className={s.disco__contentWrapper}>
          <h2 className={s.disco__title}>Discography</h2>
          <div className={s.slider__wrapper}>
            <Sliders songs={songs} />
          </div>
        </div>
      </div>
    </div>
  );
}

const songs = [
  {
    img: "/PresidentialCover.JPG",
    author: "Faaris",
    title: "Presidential",
    alt: "Presidential",
    url: "https://open.spotify.com/album/1lWSYvfg0ur3I5eNmghk8G",
  },
  {
    img: "/AllorNothingCover.jpg",
    author: "Faaris Ft. Kid Travis",
    title: "All Or Nothing",
    alt: "All Or Nothing",
    url: "https://open.spotify.com/album/2JwXRC70KGSSAR6cvYTJNe",
  },
  {
    img: "/StillSleepinCover.jpg",
    author: "Faaris Ft. Keralanka",
    title: "Still Sleepin",
    alt: "Still Sleepin",
    url: "https://open.spotify.com/album/5Qp1qOnSkBcrKtX6dGUNTU",
  },
  {
    img: "/FallInPlaceCover.jpg",
    author: "Faaris Ft. Shai' Moya",
    title: "Fall In Place",
    alt: "Fall In Place",
    url: "https://open.spotify.com/album/6ykCNfcFjno3GBGVmCAwLE",
  },

  {
    img: "/LevelUpCover.jpg",
    author: "Faaris Ft. Dre Wave$",
    title: "Level Up",
    alt: "Level Up",
    url: "https://open.spotify.com/album/1ArV2UbzEZzoQswezrVUgv",
  },
  {
    img: "/HellOutThereCover.JPG",
    author: "Faaris",
    title: "Hell Out There",
    alt: "Hell Out There",
    url: "https://open.spotify.com/album/096skbNkoC4YUViSdFKwo4",
  },
];
