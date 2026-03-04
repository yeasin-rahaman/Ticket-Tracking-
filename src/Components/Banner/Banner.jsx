import React from "react";
import leftLines from "./../../assets/Group 1.png";
import rightLines from "./../../assets/Group 2.png";

const Banner = ({ inProgress, resolved }) => {
    return (
        <div className="w-full mx-auto max-w-[1600px] px-6 py-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* In Progress Card */}
                <div
                    className="relative overflow-hidden rounded-2xl
                     min-h-[150px] md:min-h-[200px] lg:min-h-[250px]
                     flex items-center justify-center
                     text-white
                     bg-gradient-to-r from-purple-600 to-indigo-600
                     shadow-xl"
                >
                    {/* Top Left Decoration */}
                    <img
                        src={rightLines}
                        alt=""
                        className="absolute top-0 left-0 w-52 opacity-80 pointer-events-none   min-h-[150px] md:min-h-[200px] lg:min-h-[250px]"
                    />

                    {/* Bottom Right Decoration */}
                    <img
                        src={leftLines}
                        alt=""
                        className="absolute bottom-0 right-0 w-52 opacity-80 pointer-events-none   min-h-[150px] md:min-h-[200px] lg:min-h-[250px]"
                    />

                    <div className="relative z-10 text-center">
                        <p className="text-sm md:text-base font-medium tracking-wide opacity-90">
                            In-Progress
                        </p>
                        <h2 className="text-5xl md:text-6xl font-bold mt-3">
                            {inProgress}
                        </h2>
                    </div>
                </div>

                {/* Resolved Card */}
                <div
                    className="relative overflow-hidden rounded-2xl
                    min-h-[150px] md:min-h-[200px] lg:min-h-[250px]
                     flex items-center justify-center
                     text-white
                     bg-gradient-to-r from-emerald-500 to-green-600
                     shadow-xl"
                >
                    {/* Top Left Decoration */}
                    <img
                        src={rightLines}
                        alt=""
                        className="absolute top-0 left-0 w-52 opacity-80 pointer-events-none   min-h-[150px] md:min-h-[200px] lg:min-h-[250px]"
                    />

                    {/* Bottom Right Decoration */}
                    <img
                        src={leftLines}
                        alt=""
                        className="absolute bottom-0 right-0 w-52 opacity-80 pointer-events-none   min-h-[150px] md:min-h-[200px] lg:min-h-[250px]"
                    />

                    <div className="relative z-10 text-center">
                        <p className="text-sm md:text-base font-medium tracking-wide opacity-90 ">
                            Resolved
                        </p>
                        <h2 className="text-5xl md:text-6xl font-bold mt-3">
                            {resolved}
                        </h2>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;