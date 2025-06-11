import  { useEffect } from "react";
import {
  FaRocket,
  FaHome,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaSearch,
} from "react-icons/fa";

export default function Error404() {
  useEffect(() => {
    const starsContainer = document.getElementById("stars");
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 5 + 3;

      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty("--duration", `${duration}s`);

      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-5 overflow-hidden">
      <div id="stars" className="absolute inset-0 pointer-events-none z-0"></div>

      <div className="container max-w-3xl p-10 rounded-2xl bg-opacity-70 bg-[#0f0c29] shadow-2xl backdrop-blur-md border border-white/10 relative z-10 text-center">
        <div className="text-4xl mb-6 flex justify-center items-center gap-3">
          <FaRocket className="text-purple-400 text-5xl" />
          <span>SPACE EXPLORER</span>
        </div>

        <h1 className="text-[6rem] md:text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-md">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl mb-5 text-indigo-100">
          Houston, We Have a Problem!
        </h2>
        <p className="text-lg md:text-xl text-indigo-200 mb-8 leading-relaxed mx-auto max-w-xl">
          Looks like you've drifted into uncharted territory. The page you're looking for has been lost in space. Don't worry, mission control is here to help you navigate back to safety.
        </p>

        <div className="relative h-[300px] mb-10">
          <div className="absolute inset-0 flex justify-center items-center animate-[float_6s_ease-in-out_infinite] hover:animate-[float_3s_ease-in-out_infinite]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-44 h-44">
              <circle cx="100" cy="80" r="30" fill="#F0F0F0" />
              <ellipse cx="100" cy="115" rx="35" ry="40" fill="#F0F0F0" />
              <circle cx="85" cy="75" r="5" fill="#333" />
              <circle cx="115" cy="75" r="5" fill="#333" />
              <path d="M90 95 Q100 105 110 95" stroke="#333" strokeWidth="3" fill="none" />
              <rect x="65" y="140" width="70" height="30" rx="10" fill="#6C63FF" />
              <rect x="70" y="150" width="20" height="15" rx="5" fill="#4A44C9" />
              <rect x="110" y="150" width="20" height="15" rx="5" fill="#4A44C9" />
              <circle cx="100" cy="85" r="10" fill="#FF6B6B" />
            </svg>
          </div>
          <div className="absolute bottom-8 left-[20%] w-20 h-20 rounded-full bg-gradient-to-br from-pink-300 to-pink-100 shadow-[0_0_30px_rgba(255,154,158,0.6)]"></div>
          <div className="absolute top-10 right-[25%] w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full shadow-[0_0_15px_#6c63ff] animate-[comet_10s_linear_infinite]"></div>
        </div>

        <div className="flex max-w-lg mx-auto rounded-full border border-white/20 bg-white/10 overflow-hidden">
          <input
            type="text"
            placeholder="Search our galaxy..."
            className="flex-1 px-6 py-3 bg-transparent text-white placeholder-white/50 outline-none"
          />
          <button className="px-6 bg-[#6c63ff] hover:bg-[#5a52d8] transition-colors">
            <FaSearch />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="btn btn-primary bg-gradient-to-r from-purple-400 to-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:-translate-y-1 transition-transform">
            <FaHome /> Return to Earth
          </button>
          <button className="btn btn-secondary bg-white/10 border border-white/20 text-indigo-100 font-semibold py-3 px-6 rounded-full hover:bg-white/20">
            <FaPhoneAlt /> Contact Mission Control
          </button>
        </div>

        <div className="flex justify-center gap-5 mt-10">
          <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-purple-500 flex items-center justify-center text-white transition-transform hover:-translate-y-1">
            <FaFacebookF />
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-purple-500 flex items-center justify-center text-white transition-transform hover:-translate-y-1">
            <FaTwitter />
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-purple-500 flex items-center justify-center text-white transition-transform hover:-translate-y-1">
            <FaInstagram />
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-purple-500 flex items-center justify-center text-white transition-transform hover:-translate-y-1">
            <FaGithub />
          </a>
        </div>
      </div>

      <style>{`
        .star {
          position: absolute;
          background-color: #fff;
          border-radius: 50%;
          animation: twinkle var(--duration, 5s) infinite ease-in-out;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          25% { transform: translate(-55%, -52%) rotate(5deg); }
          50% { transform: translate(-50%, -55%) rotate(0deg); }
          75% { transform: translate(-45%, -52%) rotate(-5deg); }
        }
        @keyframes comet {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateX(-300px) translateY(150px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}