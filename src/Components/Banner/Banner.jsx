import React from "react";
import leftLines from "./../../assets/Group 1.png";
import rightLines from "./../../assets/Group 2.png";

const Banner = ({ inProgress, resolved }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto p-6">

            {/* In Progress Card */}
            <div className="relative overflow-hidden rounded-xl p-8 text-white 
                      bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">

                {/* Left Decoration */}
                <img
                    src={rightLines}
                    alt=""
                    className="absolute top-0 left-0 w-44 opacity-20 pointer-events-none"
                />

                {/* Right Decoration */}
                <img
                    src={leftLines}
                    alt=""
                    className="absolute bottom-0 right-0 w-44 opacity-20 pointer-events-none"
                />

                <div className="relative z-10 text-center">
                    <p className="text-sm font-medium tracking-wide">In-Progress</p>
                    <h2 className="text-4xl font-bold mt-2">{inProgress}</h2>
                </div>
            </div>

            {/* Resolved Card */}
            <div className="relative overflow-hidden rounded-xl p-8 text-white 
                      bg-gradient-to-r from-emerald-500 to-green-600 shadow-lg">

                {/* Left Decoration */}
                <img
                    src={rightLines}
                    alt=""
                    className="absolute top-0 left-0 w-44 opacity-20 pointer-events-none"
                />

                {/* Right Decoration */}
                <img
                    src={leftLines}
                    alt=""
                    className="absolute bottom-0 right-0 w-44 opacity-20 pointer-events-none"
                />

                <div className="relative z-10 text-center">
                    <p className="text-sm font-medium tracking-wide">Resolved</p>
                    <h2 className="text-4xl font-bold mt-2">{resolved}</h2>
                </div>
            </div>

        </div>
    );
};

export default Banner;