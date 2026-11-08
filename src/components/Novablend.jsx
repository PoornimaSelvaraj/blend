
import React, { useState } from "react";

const flavors = [
  {
    name: "Sublime Lime",
    heading: "Sip into Freshness",
    description: "Discover a world of vibrant flavours with our premium juice collection. A fresh & zesty sip to refresh your day. We believe in the power of nature's finest ingredients to bring you delicious refreshment.",
    price: "$25.50",
    bg: "#62852f",
    liquid: "#a5d638",
    glow: "#c8f77a",
    dark: "#345b1c"
  },
  {
    name: "Sweet Velvet Crave",
    heading: "Sweet Velvet Crave",
    description: "Indulge in golden, buttery layers of rich caramel, perfectly balanced with a smooth and delicious finish. A luxurious flavour in every sip.",
    price: "$25.50",
    bg: "#b8621b",
    liquid: "#c27a3a",
    glow: "#efb875",
    dark: "#68340e"
  },
  {
    name: "Rich Creamy Coffee",
    heading: "Rich Creamy Coffee",
    description: "Experience the deep aroma of fresh coffee blended with silky cream. A smooth and refreshing taste made for every coffee lover.",
    price: "$25.50",
    bg: "#4b3425",
    liquid: "#6f4228",
    glow: "#bd9474",
    dark: "#29180f"
  }
];

const bubbles = [
  { x: 9, y: 42, s: 14, type: "ring", shade: "light" },
  { x: 16, y: 18, s: 45, type: "sphere", shade: "light" },
  { x: 21, y: 24, s: 30, type: "sphere", shade: "dark" },
  { x: 28, y: 9, s: 19, type: "sphere", shade: "dark" },
  { x: 37, y: 15, s: 37, type: "ring", shade: "light" },
  { x: 73, y: 22, s: 18, type: "ring", shade: "light" },
  { x: 80, y: 38, s: 31, type: "sphere", shade: "light" },
  { x: 72, y: 56, s: 43, type: "sphere", shade: "dark" },
  { x: 83, y: 66, s: 37, type: "sphere", shade: "light" },
  { x: 65, y: 76, s: 17, type: "sphere", shade: "dark" },
  { x: 48, y: 88, s: 22, type: "sphere", shade: "light" },
  { x: 28, y: 80, s: 27, type: "ring", shade: "light" },
  { x: 18, y: 88, s: 18, type: "sphere", shade: "dark" },
  { x: 23, y: 93, s: 30, type: "ring", shade: "light" },
  { x: 55, y: 94, s: 23, type: "sphere", shade: "dark" },
  { x: 90, y: 90, s: 30, type: "ring", shade: "light" },
  { x: 60, y: 56, s: 50, type: "sphere", shade: "light" },
  { x: 66, y: 66, s: 42, type: "sphere", shade: "dark" },
  { x: 75, y: 72, s: 23, type: "sphere", shade: "light" },
  { x: 40, y: 73, s: 14, type: "ring", shade: "light" },
  { x: 52, y: 30, s: 12, type: "sphere", shade: "light" },
  { x: 34, y: 56, s: 12, type: "sphere", shade: "dark" }
];

export default function Novablend() {
  const [active, setActive] = useState(0);
  const [popup, setPopup] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const flavor = flavors[active];

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: -y * 10,
      y: x * 12
    });
  };

  const selectFlavor = (index) => {
    if (index !== active) {
      setActive(index);
      setTilt({ x: 0, y: 0 });
      setPopup(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          width: 100%;
          min-height: 100%;
        }

        body {
          overflow-x: hidden;
        }

        .nova {
          width: 100%;
          height: 100vh;
          height: 100svh;
          min-height: 600px;
          position: relative;
          overflow: hidden;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          background: ${flavor.bg};
          transition: background 0.9s ease;
          isolation: isolate;
        }

        .nova::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(ellipse at 53% 35%, ${flavor.glow} 0%, transparent 29%),
            radial-gradient(ellipse at 50% 100%, rgba(0,0,0,.15), transparent 60%);
          opacity: .65;
          pointer-events: none;
        }

        .nova-header {
          height: 65px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 5;
        }

        .nova-logo {
          font-size: 23px;
          font-weight: 700;
          letter-spacing: -1px;
          color: white;
        }

        .nova-logo span {
          color: #f6dfad;
        }

        .nova-main {
          height: calc(100% - 65px);
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr;
          align-items: center;
          padding: 0 7%;
          position: relative;
        }

        .nova-left {
          max-width: 350px;
          position: relative;
          z-index: 4;
          animation: novaTextIn .7s ease both;
        }

        .nova-left h1 {
          font-size: clamp(35px, 4vw, 55px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -1.5px;
          margin: 0 0 22px;
          color: #fff;
          text-shadow: 0 2px 8px rgba(0,0,0,.08);
        }

        .nova-left p {
          max-width: 310px;
          font-size: 12px;
          line-height: 2;
          opacity: .9;
          font-weight: 400;
          color: #fff;
        }

        .nova-center {
          width: 100%;
          height: 100%;
          min-height: 450px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }

        .nova-glow {
          position: absolute;
          width: 350px;
          height: 350px;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: ${flavor.glow};
          filter: blur(85px);
          opacity: .45;
          transition: background .9s ease;
        }

        .nova-bubbles {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .nova-bubble {
          position: absolute;
          display: block;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: bubbleFloat var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .nova-bubble.sphere {
          background:
            radial-gradient(circle at 28% 23%, rgba(255,255,255,.95), transparent 25%),
            radial-gradient(circle at 32% 28%, var(--bubble-light), var(--bubble-base) 48%, var(--bubble-dark) 100%);
          box-shadow:
            inset -5px -6px 12px rgba(0,0,0,.25),
            inset 3px 3px 8px rgba(255,255,255,.45),
            0 7px 15px rgba(0,0,0,.12);
        }

        .nova-bubble.ring {
          background:
            radial-gradient(circle, transparent 45%, rgba(255,255,255,.32) 49%, rgba(255,255,255,.7) 54%, transparent 75%);
          border: 1px solid rgba(255,255,255,.17);
          box-shadow: inset 0 0 8px rgba(255,255,255,.25);
        }

        .nova-bottle-area {
          position: relative;
          width: 260px;
          height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }

        .nova-bottle-float {
          position: relative;
          width: 190px;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: bottleFloat 4s ease-in-out infinite;
        }

        .nova-bottle-wrap {
          width: 160px;
          height: 340px;
          position: relative;
          transform-style: preserve-3d;
        }

        .nova-bottle-wrap.changing {
          animation: bottleDrop 1.1s cubic-bezier(.16,.75,.25,1) both;
        }

        .nova-bottle-model {
          width: 160px;
          height: 340px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform .2s ease-out;
        }

        .nova-bottle {
          position: absolute;
          width: 112px;
          height: 235px;
          left: 50%;
          top: 78px;
          transform: translateX(-50%);
          clip-path: polygon(
            37% 0%, 63% 0%,
            66% 13%, 72% 18%,
            91% 26%, 98% 34%,
            98% 94%, 91% 100%,
            9% 100%, 2% 94%,
            2% 34%, 9% 26%,
            28% 18%, 34% 13%
          );
          background: linear-gradient(
            90deg,
            rgba(255,255,255,.65),
            rgba(255,255,255,.16) 12%,
            rgba(255,255,255,.04) 36%,
            rgba(255,255,255,.12) 72%,
            rgba(255,255,255,.6)
          );
          filter: drop-shadow(0 15px 15px rgba(0,0,0,.18));
        }

        .nova-bottle::before {
          content: "";
          position: absolute;
          bottom: 2px;
          left: 3px;
          right: 3px;
          height: 75%;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,.3),
            ${flavor.liquid} 22%,
            ${flavor.liquid} 75%,
            rgba(255,255,255,.4)
          );
          border-radius: 0 0 15px 15px;
          transition: background .9s ease;
        }

        .nova-bottle::after {
          content: "";
          position: absolute;
          top: 38px;
          left: 12px;
          width: 8px;
          height: 180px;
          border-radius: 50%;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,.85),
            rgba(255,255,255,.08)
          );
          filter: blur(3px);
        }

        .nova-neck {
          position: absolute;
          z-index: 4;
          width: 39px;
          height: 60px;
          top: 22px;
          left: 50%;
          transform: translateX(-50%);
          border: 2px solid rgba(255,255,255,.7);
          border-bottom: 0;
          border-radius: 7px 7px 0 0;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,.65),
            rgba(255,255,255,.12) 40%,
            rgba(255,255,255,.5)
          );
        }

        .nova-cap {
          position: absolute;
          z-index: 6;
          width: 43px;
          height: 20px;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 5px 5px 2px 2px;
          background: repeating-linear-gradient(
            90deg,
            #a8a8a1 0px,
            #f5f4e8 5px,
            #888b80 9px,
            #e4e3d7 13px
          );
          border: 1px solid rgba(255,255,255,.7);
          box-shadow: 0 3px 7px rgba(0,0,0,.25);
        }

        .nova-cap::after {
          content: "";
          position: absolute;
          height: 4px;
          left: -2px;
          right: -2px;
          bottom: -3px;
          background: linear-gradient(90deg, #777, #f5f5e9, #888);
          border-radius: 2px;
        }

        .nova-bottle-shine {
          position: absolute;
          z-index: 5;
          top: 125px;
          left: 32px;
          height: 160px;
          width: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,.7);
          filter: blur(3px);
        }

        .nova-bottle-shadow {
          position: absolute;
          width: 135px;
          height: 20px;
          left: 50%;
          bottom: 5px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: rgba(0,0,0,.27);
          filter: blur(14px);
        }

        .nova-right {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: flex-end;
          flex-direction: column;
          text-align: right;
        }

        .nova-right .nova-select {
          font-size: 10px;
          letter-spacing: 2px;
          opacity: .7;
          color: white;
        }

        .nova-right h2 {
          font-size: 24px;
          line-height: 1.35;
          font-weight: 600;
          max-width: 200px;
          margin: 8px 0 25px;
          color: #fff;
        }

        .nova-options {
          display: flex;
          align-items: center;
          gap: 17px;
          margin-bottom: 28px;
        }

        .nova-option {
          width: 17px;
          height: 17px;
          padding: 0;
          border: 1px solid rgba(255,255,255,.6);
          border-radius: 50%;
          cursor: pointer;
          transition: .3s ease;
        }

        .nova-option:hover {
          transform: scale(1.3);
        }

        .nova-option.selected {
          outline: 2px solid white;
          outline-offset: 5px;
          transform: scale(1.1);
        }

        .nova-buy {
          padding: 13px 32px;
          border: 0;
          border-radius: 30px;
          background: #fff;
          color: #333;
          font-size: 11px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0,0,0,.1);
          transition: .3s;
        }

        .nova-buy:hover {
          transform: translateY(-4px);
          background: #272727;
          color: white;
        }

        .nova-price {
          position: absolute;
          z-index: 5;
          left: 50%;
          bottom: 35px;
          transform: translateX(-50%);
          font-size: clamp(28px, 3.5vw, 43px);
          line-height: 1;
          font-weight: 800;
          white-space: nowrap;
          color: white;
          text-shadow: 0 3px 12px rgba(0,0,0,.12);
        }

        .nova-modal {
          position: fixed;
          inset: 0;
          z-index: 20;
          display: grid;
          place-items: center;
          padding: 15px;
          background: rgba(0,0,0,.5);
          backdrop-filter: blur(8px);
        }

        .nova-modal-box {
          position: relative;
          width: min(360px, 90%);
          padding: 40px 28px;
          border: 1px solid rgba(255,255,255,.5);
          border-radius: 24px;
          background: ${flavor.bg};
          text-align: center;
          color: white;
          box-shadow: 0 20px 60px rgba(0,0,0,.3);
          animation: novaPop .4s ease;
          transition: background .9s ease;
        }

        .nova-modal-box h2 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 26px;
          font-weight: 700;
          color: white;
          margin: 10px 0 15px;
        }

        .nova-modal-box p {
          font-size: 13px;
          line-height: 1.8;
          color: white;
        }

        .nova-modal-icon {
          font-size: 27px;
          display: inline-flex;
          align-items: center;
          animation: iconFloat 2s ease-in-out infinite;
        }

        .nova-modal-box button:not(.nova-close) {
          padding: 11px 24px;
          margin-top: 12px;
          border: none;
          border-radius: 30px;
          background: white;
          color: #333;
          font-family: inherit;
          font-weight: 600;
          cursor: pointer;
          transition: .3s;
        }

        .nova-modal-box button:not(.nova-close):hover {
          background: #272727;
          color: white;
          transform: translateY(-3px);
        }

        .nova-close {
          position: absolute;
          top: 8px;
          right: 14px;
          border: 0;
          background: none;
          color: white;
          font-size: 25px;
          cursor: pointer;
        }

        @keyframes bottleDrop {
          0% {
            opacity: 0;
            transform: translateY(-110vh) rotateX(35deg) rotateY(-25deg) scale(.65);
          }

          55% {
            opacity: 1;
            transform: translateY(25px) rotateX(-8deg) rotateY(12deg) scale(1.08);
          }

          75% {
            transform: translateY(-12px) rotateX(4deg) rotateY(-5deg) scale(.98);
          }

          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0) rotateY(0) scale(1);
          }
        }

        @keyframes bottleFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bubbleFloat {
          0%, 100% {
            translate: 0 0;
          }

          50% {
            translate: 0 -15px;
          }
        }

        @keyframes novaTextIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes novaPop {
          from {
            opacity: 0;
            transform: scale(.85);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        @media (min-width: 901px) and (max-width: 1200px) {
          .nova-main {
            padding: 0 4%;
            grid-template-columns: 1fr 1.3fr 1fr;
          }

          .nova-left h1 {
            font-size: 40px;
          }

          .nova-center {
            min-height: 400px;
          }

          .nova-bottle-area {
            transform: scale(.9);
          }

          .nova-right h2 {
            font-size: 21px;
          }
        }

        @media (min-width: 601px) and (max-width: 900px) {
          .nova {
            min-height: 700px;
          }

          .nova-main {
            padding: 20px 4%;
            grid-template-columns: 1fr 1.2fr 1fr;
          }

          .nova-left h1 {
            font-size: 30px;
          }

          .nova-left p {
            font-size: 10px;
            line-height: 1.8;
          }

          .nova-center {
            min-height: 400px;
          }

          .nova-bottle-area {
            transform: scale(.78);
          }

          .nova-right h2 {
            font-size: 18px;
          }

          .nova-options {
            gap: 13px;
          }

          .nova-buy {
            padding: 12px 25px;
          }

          .nova-price {
            bottom: 20px;
          }
        }

        @media (max-width: 600px) {
          .nova {
            min-height: 850px;
            height: auto;
          }

          .nova-header {
            height: 60px;
          }

          .nova-main {
            height: auto;
            min-height: 780px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 20px 18px 80px;
            gap: 5px;
          }

          .nova-left {
            width: 100%;
            max-width: 350px;
            text-align: center;
          }

          .nova-left h1 {
            font-size: 30px;
            margin-bottom: 10px;
          }

          .nova-left p {
            font-size: 11px;
            line-height: 1.8;
            margin: auto;
          }

          .nova-center {
            width: 100%;
            height: 350px;
            min-height: 350px;
          }

          .nova-glow {
            width: 220px;
            height: 220px;
          }

          .nova-bottle-area {
            transform: scale(.78);
          }

          .nova-right {
            align-items: center;
            text-align: center;
            width: 100%;
          }

          .nova-right h2 {
            font-size: 21px;
            max-width: 100%;
            margin: 8px 0 22px;
          }

          .nova-options {
            gap: 20px;
            margin-bottom: 25px;
          }

          .nova-option {
            width: 20px;
            height: 20px;
          }

          .nova-buy {
            padding: 14px 35px;
            font-size: 12px;
          }

          .nova-price {
            bottom: 22px;
            font-size: 29px;
          }

          .nova-modal-box {
            width: 90%;
            padding: 35px 20px;
          }

          .nova-modal-box h2 {
            font-size: 23px;
          }
        }

        @media (max-width: 380px) {
          .nova-left h1 {
            font-size: 26px;
          }

          .nova-left p {
            font-size: 10px;
          }

          .nova-center {
            height: 310px;
            min-height: 310px;
          }

          .nova-bottle-area {
            transform: scale(.7);
          }

          .nova-right h2 {
            font-size: 18px;
          }
        }

        @media (max-height: 700px) and (min-width: 601px) {
          .nova-header {
            height: 45px;
          }

          .nova-main {
            height: calc(100% - 45px);
          }

          .nova-center {
            min-height: 350px;
          }

          .nova-bottle-area {
            transform: scale(.78);
          }

          .nova-price {
            bottom: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nova-bottle-float,
          .nova-bubble,
          .nova-modal-icon {
            animation: none;
          }

          .nova-bottle-wrap.changing {
            animation-duration: .01ms;
          }
        }
      `}</style>

      <section
        className="nova"
        onPointerMove={handleMove}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          "--bubble-base": flavor.glow,
          "--bubble-light": "#efffd0",
          "--bubble-dark": flavor.dark
        }}
      >
        <header className="nova-header">
          <div className="nova-logo">
            NovaBlend<span>.</span>
          </div>
        </header>

        <main className="nova-main">
          <div className="nova-left" key={flavor.heading}>
            <h1>{flavor.heading}</h1>
            <p>{flavor.description}</p>
          </div>

          <div className="nova-center">
            <div className="nova-glow"></div>

            <div className="nova-bubbles">
              {bubbles.map((bubble, index) => (
                <span
                  key={index}
                  className={`nova-bubble ${bubble.type}`}
                  style={{
                    left: `${bubble.x}%`,
                    top: `${bubble.y}%`,
                    width: `${bubble.s}px`,
                    height: `${bubble.s}px`,
                    "--delay": `${index * -0.35}s`,
                    "--duration": `${3 + (index % 5)}s`,
                    "--bubble-base":
                      bubble.shade === "dark"
                        ? flavor.dark
                        : flavor.glow,
                    "--bubble-light":
                      bubble.shade === "dark"
                        ? flavor.glow
                        : "#f2ffd9",
                    "--bubble-dark":
                      bubble.shade === "dark"
                        ? "#253c15"
                        : flavor.dark
                  }}
                />
              ))}
            </div>

            <div className="nova-bottle-area">
              <div className="nova-bottle-float">
                <div
                  key={active}
                  className="nova-bottle-wrap changing"
                >
                  <div
                    className="nova-bottle-model"
                    style={{
                      transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
                    }}
                  >
                    <div className="nova-cap"></div>
                    <div className="nova-neck"></div>
                    <div className="nova-bottle"></div>
                    <div className="nova-bottle-shine"></div>
                  </div>
                </div>

                <div className="nova-bottle-shadow"></div>
              </div>
            </div>
          </div>

          <div className="nova-right">
            <span className="nova-select">FLAVOUR</span>

            <h2>{flavor.name}</h2>

            <div className="nova-options">
              {flavors.map((item, index) => (
                <button
                  key={item.name}
                  className={`nova-option ${active === index ? "selected" : ""}`}
                  style={{ background: item.bg }}
                  onClick={() => selectFlavor(index)}
                  aria-label={item.name}
                  title={item.name}
                />
              ))}
            </div>

            <button
              className="nova-buy"
              onClick={() => setPopup(true)}
            >
              Buy Now
            </button>
          </div>
        </main>

        <div className="nova-price">
          {flavor.price}
        </div>

        {popup && (
          <div
            className="nova-modal"
            onClick={() => setPopup(false)}
          >
            <div
              className="nova-modal-box"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="nova-close"
                onClick={() => setPopup(false)}
                aria-label="Close popup"
              >
                ×
              </button>

              <h2>
                <span className="nova-modal-icon">⏳</span>
                Coming Soon!
              </h2>

              <p>
                {flavor.name} will be available very soon.
              </p>

              <button onClick={() => setPopup(false)}>
                Continue Exploring
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
