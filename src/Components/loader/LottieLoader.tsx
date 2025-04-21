'use client';

import dynamic from 'next/dynamic';
import animationDataNew from "@/Components/loader/Animation - 1745212551090.json";

const LottieComponent = dynamic(() => import('lottie-react'), { ssr: false });

const LottieLoader = ({ text }: { text: string }) => {
  return (
    <div
      className="fixed justify-center items-center"
      style={{
        zIndex: 999999999999,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="flex justify-center items-center">
        <LottieComponent
          animationData={animationDataNew}
          loop
          autoplay
          style={{ width: 400, height: 700 }}
        />
        <h2 className="text-white mt-5">{text}</h2>
      </div>
    </div>
  );
};

export default LottieLoader;
