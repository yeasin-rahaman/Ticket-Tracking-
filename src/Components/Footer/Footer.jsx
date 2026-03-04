import React from "react";
import {
    FaXTwitter,
    FaInstagram,
    FaFacebookF,
    FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 ">
            <div className=" mx-auto px-12 py-16 max-w-[1600px]">

                {/* 5 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Column 1 */}
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">
                            CS — Ticket System
                        </h2>
                        <p className="text-sm leading-6">
                            A Customer Support (CS) Ticket System is a centralized platform designed to manage, track, and resolve customer inquiries efficiently.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">About Us</li>
                            <li className="hover:text-white cursor-pointer">Our Mission</li>
                            <li className="hover:text-white cursor-pointer">Contact Sale</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Products & Services
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Customer Stories
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Download Apps
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Information</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Privacy Policy
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Terms & Conditions
                            </li>
                            <li className="hover:text-white cursor-pointer">Join Us</li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Social Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                                <FaXTwitter size={14} />
                                @CS — Ticket System
                            </li>
                            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                                <FaInstagram size={14} />
                                @CS — Ticket System
                            </li>
                            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                                <FaFacebookF size={14} />
                                @CS — Ticket System
                            </li>
                            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                                <FaEnvelope size={14} />
                                support@cst.com
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
                    © 2025 CS — Ticket System. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;