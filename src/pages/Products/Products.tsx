import React from "react";

const Products = () => {
  return (
    <div>
      <section className="md:h-full flex items-center text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <h5 className="text-base md:text-lg text-indigo-700 mb-1">
              See our Recent News
            </h5>
            <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">
              Tailwind CSS RESPONSIVE
            </h1>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className=" p-4 sm:w-1/2 lg:w-1/3">
              <div className=" h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  src="https://picsum.photos/id/188/720/400"
                  alt=""
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                />
                <div className=" p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <h2 className=" text-base font-medium text-indigo-300 mb-1">
                    2021
                  </h2>
                  <h1 className=" text-2xl font-semibold mb-3">Vaping</h1>
                  <p className=" leading-relaxed mb-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, id praesentium. Perferendis voluptates laborum
                    voluptas quidem maxime, rerum iusto, porro incidunt vero,
                    obcaecati repudiandae quibusdam hic totam quam ratione
                    dolores!
                  </p>
                  <div className=" flex items-center flex-wrap">
                    <a
                      href="#"
                      className=" text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        storke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m5 12h14"></path>
                        <path d="M12 517 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        storke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </span>
                    <span className=" text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        storke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
