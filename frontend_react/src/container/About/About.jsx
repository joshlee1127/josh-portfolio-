import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
const About = () => {
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text" style={{ marginTop: "1.5rem" }}>
                我知道一個 <span> 好的DevOps 🙈</span>
                <br />
                就代表<span> 好的職涯</span>
            </h2>
            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            duration: 0.5,
                            type: "tween",
                        }}
                        className="app__profile-item"
                        key={about.title + index}>
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>
                            {about.title}
                        </h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            {about.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
