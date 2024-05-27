import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

import '../global.css';

const Desktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[1.937rem] px-[0.75rem] pb-[4.687rem] box-border gap-[6.437rem] leading-[normal] tracking-[normal] text-left text-[1.5rem] text-black font-inter">
      <div className="flex flex-col items-start justify-start pt-[0rem] pb-[0.75rem] pr-[1.25rem] pl-[0rem]">
        <h2 className="m-0 relative text-inherit font-bold font-inherit">
          ARTM / STM
        </h2>
        <div className="relative text-[0.75rem]">Show operator your ticket</div>
      </div>
      <FrameComponent1 />
      <section className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.187rem] pl-[1.25rem] box-border max-w-full">
        <FrameComponent />
      </section>
    </div>
  );
};

export default Desktop;
