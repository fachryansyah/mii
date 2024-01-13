import { useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import Typewriter from "typewriter-effect";

function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [showBtnScrollBottom, setShowBtnScrollBottom] = useState(false);
  const [showQuotes, setShowQuotes] = useState(false);
  const [showCipiCapa, setShowCipiCapa] = useState(false);

  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <ParticleBackground />
      <div className="flex flex-col items-center justify-center mt-24">
        <div className="flex">
          <span className="text-3xl font-bold text-white">Halloo&nbsp;</span>
          <span className="text-3xl font-bold text-white">
            <Typewriter
              options={{
                strings: [
                  "Ayangku😘",
                  "My World💕",
                  "Mii🥰",
                  "💖 😘 🥰 😍 🩷 💝 💓 💕",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        {!showVideo ? (
          <button
            className="bg-pink-300 color-pink-800 px-8 py-4 rounded mt-8 hover:bg-pink-800 hover:text-pink-300 duration-500"
            onClick={() => {
              setShowVideo(true);
              setTimeout(() => {
                setShowBtnScrollBottom(true);
              }, 10 * 1000);
            }}
          >
            Pencet Aku!
          </button>
        ) : (
          <iframe
            className="rounded-lg mt-8"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ncdmols_QBM?si=qirZ-A7wq8qDEiGc&amp;controls=0&start=0&end=10&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        )}

        {showBtnScrollBottom ? (
          <button
            className="bg-pink-300 animate-fade color-pink-800 px-8 py-4 rounded mt-8 hover:bg-pink-800 hover:text-pink-300 duration-500"
            onClick={() => {
              setShowQuotes(true);
              setTimeout(() => {
                goToSection("quotes");
              }, 500);
            }}
          >
            Pencet Aku Lagii!
          </button>
        ) : null}
      </div>

      {showQuotes ? (
        <>
          <div
            id="quotes"
            className="animation-fade text-center mt-96 container mx-auto"
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-lg flex flex-1 flex-col justify-between">
                <img src="teddy-anim.gif" className="h-80" />
                <p className="text-pink-500 text-2xl">
                  &quot;Your love brightens every moment of my life, and I am
                  endlessly grateful to have you by my side&quot;
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg flex flex-1 flex-col justify-between">
                <img src="patpat.gif" className="h-80" />
                <p className="text-pink-500 text-2xl">
                  &quot;Your love brightens every moment of my life, and I am
                  endlessly grateful to have you by my side&quot;
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg flex flex-1 flex-col justify-between">
                <img src="cat-love.gif" className="h-80" />
                <p className="text-pink-500 text-2xl">
                  &quot;I&apos;m thankful for you and the happiness you bring
                  into my life.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row mt-36 mb-24">
            {showCipiCapa ? (
              <>
                <iframe
                  className="m-auto rounded-lg"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0tOXxuLcaog?si=fB3Z2iI2fdMQ1t0d&amp;controls=0&autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </>
            ) : (
              <button
                className="bg-pink-300 m-auto animate-fade color-pink-800 px-8 py-4 rounded mt-8 hover:bg-pink-800 hover:text-pink-300 duration-500"
                onClick={() => {
                  setShowCipiCapa(true);
                }}
              >
                Jangan dipencett &gt;_&lt; !
              </button>
            )}
          </div>
          <p className="text-center text-pink-300 mb-10">
            made with 💖 by{" "}
            <a className="text-blue-300" href="https://instagram.com/fachry.stark" target="__blank">
              fahri
            </a>
          </p>
        </>
      ) : null}
    </div>
  );
}

export default Home;
