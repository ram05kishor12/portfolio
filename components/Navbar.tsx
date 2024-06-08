
"use client"
import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "./assets/svg/MenuSvg";
import { HamburgerMenu } from "./designs/Navbar";
import Image from "next/image";
import logo from "../public/jsm-logo.png"
import Link from "next/link";
import MagicButton from "./MagicButton";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";

interface NavbarProps {
    data: any;
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-md ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
                }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block  xl:mr-8" href="#hero">
                    <p className=" h5 font-bold">Ramkishor</p>

                </a>

                <nav
                    className={`${openNavigation ? "flex" : "hidden"
                        } fixed top-[5rem] left-0 right-0 bottom-0 backdrop-blur-lg lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {data.map((item: any) => (
                            < div key={item.id}>
                                {item.link == null && item.url ? (
                                    <a

                                        href={item.url}
                                        onClick={handleClick}
                                        className={`block relative font-code text-2xl uppercase text-white  transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                                            } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                                    >
                                        {item.title}
                                    </a>
                                ) : (
                                    <Link key={item.id} href={item.link} className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                                        } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12`} >{item.title}</Link>
                                )}
                            </div>
                        ))}
                    </div>


                    <HamburgerMenu />
                </nav>

                <div className="hidden text-black lg:block">
                    <Button white className="flex items-center">
                        <FaGithub />
                    </Button>
                </div>

                <Button white={false}
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Navbar;