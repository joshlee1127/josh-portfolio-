import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { images } from "../../constants";
import "./Navbar.scss";
const navLit2 = [
    {
        e: "home",
        c: "首頁",
    },
    {
        e: "about",
        c: "關於",
    },
    {
        e: "work",
        c: "作品集",
    },
    {
        e: "skills",
        c: "專長",
    },
    {
        e: "contact",
        c: "聯絡我",
    },
];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img
                    src={images.logo_josh}
                    alt="logo"
                    style={{ margin: "auto", height: "30px" }}
                />
            </div>
            <ul className="app__navbar-links">
                {navLit2.map((item) => (
                    <li className="app__flex p2-text" key={`link-${item.e}`}>
                        <div />
                        <a href={`#${item.e}`}>{item.c}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: "easeOut" }}>
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {navLit2.map((item) => (
                                <li key={item.e}>
                                    <a
                                        href={`#${item.e}`}
                                        onClick={() => setToggle(false)}>
                                        {item.c}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
