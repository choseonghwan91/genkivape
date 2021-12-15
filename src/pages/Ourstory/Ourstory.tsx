import React from "react";

const Ourstory = () => {
  return (
    <div className="flex flex-col overflow-y-scroll">
      <div className="w-screen h-screen flex flex-col items-center bg-cover bg-ourStoryDark">
        <div className="flex items-center mt-16">
          <img
            className="object-cover w-500px h-500px"
            alt="Logo"
            src="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.18169-9/943299_576428669046911_977586398_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0Teo-RVJX6MAX-ceWmW&_nc_ht=scontent-gmp1-1.xx&oh=00_AT-IO5gioC_Bng9gKTa67q5iiDWaLnMDqCw0lZ1zPMyCnQ&oe=61DE0F8C"
          />
          <div className="flex flex-col items-start ml-20">
            <div className="text-8xl text-red-600 ">
              Welcome.
              <br />
              We are Genkivape
            </div>
            <div className="flex flex-col items-start mt-8 pl-2 text-white text-2xl">
              <div className="mt-4">
                이 회사는 2006년도에 설립하였습니다. 전자담배샵 입니다.
              </div>
              <div className="mt-4">
                genkivape는 좋다는 뜻의 genki와 vape 가 합쳐진 말입니다.{" "}
              </div>
              <div className="mt-4">여러가지 맛의 전자담배를 제공합니다.</div>
            </div>
          </div>
        </div>
        <div className="flex mt-20">
          <img
            className="w-80 h-80 mx-10"
            alt="Logo"
            src="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.18169-9/943299_576428669046911_977586398_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0Teo-RVJX6MAX-ceWmW&_nc_ht=scontent-gmp1-1.xx&oh=00_AT-IO5gioC_Bng9gKTa67q5iiDWaLnMDqCw0lZ1zPMyCnQ&oe=61DE0F8C"
          />
          <img
            className="w-80 h-80 mx-10"
            alt="Logo"
            src="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.18169-9/943299_576428669046911_977586398_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0Teo-RVJX6MAX-ceWmW&_nc_ht=scontent-gmp1-1.xx&oh=00_AT-IO5gioC_Bng9gKTa67q5iiDWaLnMDqCw0lZ1zPMyCnQ&oe=61DE0F8C"
          />
          <img
            className="w-80 h-80 mx-10"
            alt="Logo"
            src="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.18169-9/943299_576428669046911_977586398_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0Teo-RVJX6MAX-ceWmW&_nc_ht=scontent-gmp1-1.xx&oh=00_AT-IO5gioC_Bng9gKTa67q5iiDWaLnMDqCw0lZ1zPMyCnQ&oe=61DE0F8C"
          />
        </div>
      </div>
      <div className="flex justify-around mt-36 h-500px">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/AzMK-ryxGBc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/AzMK-ryxGBc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

export default Ourstory;
