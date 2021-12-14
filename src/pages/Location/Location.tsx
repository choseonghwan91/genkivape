import React from "react";

const Location = () => {
  return (
    <div className="container flex flex-col items-center mt-20 min-w-full">
      <div className="text-8xl opacity-0 animate-upHeader">
        Where is Genkivape
      </div>
      <div className="w-screen p-20 opacity-0 animate-upMap">
        <img
          className="w-screen h-auto"
          src="https://maps.googleapis.com/maps/api/staticmap?center=5528 Del Amo Blvd, Lakewood, CA 90713, United States,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=AIzaSyDo63qNBo5tSlU0jPljseK6pTFqi2KYXMI"
          alt="google-map"
        />
      </div>
      <div className="flex justify-around w-screen opacity-0 animate-upContent">
        <div className="flex flex-col items-center">
          <div className="text-5xl bg-yellow-500 p-4 rounded-xl ease-in-out">
            Location
          </div>
          <div className="mt-5 text-xl text-red-500 font-bold">LAKEWOOD</div>
          <div className="text-gray-500">5526 Del Amo Boulevard,</div>
          <div className="text-gray-500">Lakewood CA, 90713</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-5xl bg-yellow-500 p-4 rounded-xl">Contact</div>
          <div className="mt-5 text-xl text-red-500 font-bold">
            PHONE:562-496-3274
          </div>
          <div className="text-gray-500">EMAIL:email@gmail.com</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-5xl bg-yellow-500 p-4 rounded-xl">
            Business Hours
          </div>
          <div className="mt-5 text-xl text-red-500 font-bold">
            Monday – Saturday: 11AM - 8PM
          </div>
          <div className="text-gray-500">Sunday: Closed</div>
        </div>
      </div>
    </div>
  );
};

export default Location;
