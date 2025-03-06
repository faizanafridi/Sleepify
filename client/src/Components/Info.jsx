import React from "react";

const Info = ({ data }) => {
  return (
    <div className="relative z-0">
      <div className="md:w-[90px] lg:w-[90px] h-[90px] flex flex-col">
        <div
          className={`md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[225px] absolute`}
        >
          <div
            className={`card  text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-xl relative ${data.id % 2 !== 0 ? "lg:top-[-340px] md:top-[-350px]" : "lg:top-[90px] md:top-[100px]"} left-[-50px]`}
          >
            <div className="px-8 py-10">
              <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
              <div className="uppercase font-bold text-sm">{data.title}</div>
              <div className="text-gray-400 mt-8 text-sm">
                <p>{data.description}</p>
              </div>
            </div>

            <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
          </div>
        </div>
        <div className="absolute md:w-[90px] lg:w-[90px] h-[90px] rounded-full">
          <img src={data.image} className="w-full h-full rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Info;
