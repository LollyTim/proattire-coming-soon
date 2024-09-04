import BgImgDesktop from "./assets/Images/BG-min-min.jpg";
import BgImgMobile from "./assets/Images/mobile BG-min-min.jpg";
import React, { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 640; // This matches the 'sm' breakpoint in Tailwind

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImage =
    windowWidth < breakpoint
      ? `url('${BgImgMobile}')`
      : `url('${BgImgDesktop}')`;

  return (
    <section
      className="h-screen w-full py-20 sm:py-0 flex flex-col items-center justify-between sm:justify-normal bg-cover bg-no-repeat"
      style={{ backgroundImage }}
    >
      <img
        src="/logo.svg"
        alt="logo"
        className="flex w-32 sm:w-24 md:w-28 sm:hidden"
      />
      <div className="flex flex-col justify-between items-center py-20 text-center max-w-[900px]">
        <img
          src="/logo.svg"
          alt="logo"
          className="hidden w-32 sm:w-24 md:w-28 sm:flex"
        />
        <div className="">
          <h1 className="text-[40px] sm:text-[32px] md:text-[70px] text-white font-exo leading-[53px] sm:leading-[48px] md:leading-[90px] mt-16">
            Expertly crafted fashion, just for you
          </h1>
          <h4 className="text-xl sm:text-base text-[#D9D9D9] font-exoReg mt-4">
            Shop unique and custom-made pieces, including Nigeria's very best
          </h4>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mt-10">
            <a
              href=""
              className="font-exoReg px-7 py-5 w-[320px] sm:w-[230px] text-white bg-[#7A7775] transition-all hover:bg-[#646260] rounded-lg"
            >
              Register as a seller
            </a>
            <a
              href=""
              className="font-exoReg px-7 py-5 text-black w-[320px] sm:w-[230px] bg-[#FFB16C] transition-all hover:bg-[#faa357] rounded-lg"
            >
              Get early access!
            </a>
          </div>
        </div>
      </div>
      <h3 className="font-exoReg text-white mt-4">Coming Soon....</h3>
    </section>
  );
}

export default App;
