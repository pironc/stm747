import React, { useState, useEffect } from 'react';

const FrameComponent = ({ className = "" }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [expiresAt, setExpiresAt] = useState("");

  useEffect(() => {
    // Function to format the time as HH:MM:SS
    const formatTime = (date) => {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    };

    // Function to format the expiration time
    const formatExpirationTime = (date) => {
      const options = { timeZone: "America/New_York", month: 'short', day: 'numeric', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const strTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
      return `Expires ${formattedDate} at ${strTime}`;
    };

    // Function to update the current time
    const updateTime = () => {
      const now = new Date();
      const easternTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
      setCurrentTime(formatTime(easternTime));
    };

    // Function to set the expiration time (2 hours and 3 minutes after current time)
    const setExpirationTime = () => {
      const now = new Date();
      const easternTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
      easternTime.setHours(easternTime.getHours() + 2);
      easternTime.setMinutes(easternTime.getMinutes() - 3);
      setExpiresAt(formatExpirationTime(easternTime));
    };

    // Set the initial time and expiration time
    updateTime();
    setExpirationTime();
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[1.312rem] max-w-full text-left text-[3.438rem] text-black font-inter ${className}`}
    >

      <div className="flex flex-row items-start justify-start py-[0rem] px-[3.375rem] box-border max-w-full mq333:pl-[1.25rem] mq333:pr-[1.25rem] mq333:box-border">
        <b className="relative whitespace-nowrap">{currentTime}</b>
      </div>
      <div className="flex flex-row items-start justify-start pt-[0rem] px-[0.062rem] pb-[1.062rem] box-border max-w-full text-[2.813rem] text-white">
        <div className="rounded-11xl bg-steelblue flex flex-row items-start justify-start pt-[0.375rem] px-[2.812rem] pb-[0.312rem] box-border gap-[0.75rem] max-w-full mq330:pl-[1.25rem] mq330:pr-[1.25rem] mq330:box-border">
          <div className="h-[4.063rem] w-[20.625rem] relative rounded-11xl bg-steelblue hidden max-w-full" />
          <div className="relative z-[1]">Bus 747 x</div>
          <div className="w-[1.313rem] relative inline-block z-[1]">1</div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_1px_4px_-1px_#000] bg-white flex flex-col items-start justify-start pt-[0.687rem] pb-[1.125rem] pr-[0rem] pl-[0.875rem] box-border gap-[1rem] max-w-full text-[1.625rem]">
        <div className="w-[22.563rem] h-[9.813rem] relative shadow-[0px_1px_4px_-1px_#000] bg-white hidden max-w-full" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.562rem]">
          <h2 className="m-0 relative text-inherit font-normal font-inherit z-[1]">
            <p className="m-0">YUL Aéroport Mtl-Trudeau x</p>
            <p className="m-0">1 personne</p>
          </h2>
          <div className="w-[6.813rem] relative text-[0.938rem] text-dimgray inline-block z-[1]">
            Montreal, QC
          </div>
        </div>
        <b className="w-[20.938rem] relative text-[0.938rem] inline-block text-dimgray whitespace-nowrap max-w-full z-[1]">
          {expiresAt}
        </b>
      </div>
    </div>
  );
};

export default FrameComponent;