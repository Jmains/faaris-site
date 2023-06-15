import SongCard from "../../songCard/SongCard";
import s from "./LatestRelease.module.css";

export default function LatestRelease() {
    return (
        <div className={s.latest} id="latestReleaseSection">
            <div className="container">
                <h2 className={s.latest__title}>Latest Album</h2>
                {/* <div className={s.latest__songContainer}>
                    <SongCard song={songs} />
                </div> */}
                <div style={{ maxWidth: "100%", marginTop: "5rem" }}>
                    <div style={{ position: "relative", paddingBottom: "calc(56.25% + 52px)", height: 0 }}>
                        <iframe
                            style={{ position: "absolute", top: 0, left: 0 }}
                            // style="position:absolute;top:0;left:0;"
                            width="100%"
                            height="100%"
                            src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2Fhmnq2jsspckf9&theme=dark"
                            frameborder="0"
                            allowfullscreen
                            sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
                            allow="clipboard-read; clipboard-write"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

const songs = {
    img: "/albumCover.webp",
    author: "Faaris",
    title: "Change of Scenery",
    alt: "Change of Scenery",
    url: "https://open.spotify.com/track/6ycByjWt7QAvDDW8DkopRt?si=tPYdK_ZKSVifWhIMT4lyQQ",
};
