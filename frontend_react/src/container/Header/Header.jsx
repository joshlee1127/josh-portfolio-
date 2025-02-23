import { motion } from "framer-motion";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";
const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

//1 S__217514038,
//2 S__217514037,
//3 S__217514035,
//4 S__217514034,
//5 S__217514031,
//6 S__217514015,
//7 S__217514011,
//8 S__217513999,
//9 S__217514018,
//0 S__217514023,

const headImages = [
    {
        id: 0,
        imageUrl: images.BgSub_profile_josh,
        alt: "images",
    },
    // {
    //     id: 1,
    //     imageUrl: images.S__217514038,
    //     alt: "S__217514038",
    // },

    // {
    //     id: 2,
    //     imageUrl: images.S__217514037,
    //     alt: "S__217514037",
    // },
    // {
    //     id: 3,
    //     imageUrl: images.S__217514035,
    //     alt: "S__217514035",
    // },
    // {
    //     id: 4,
    //     imageUrl: images.S__217514034,
    //     alt: "S__217514034",
    // },
    // {
    //     id: 5,
    //     imageUrl: images.S__217514031,
    //     alt: "S__217514031",
    // },
    // {
    //     id: 6,
    //     imageUrl: images.S__217514015,
    //     alt: "S__217514015",
    // },
    // {
    //     id: 7,
    //     imageUrl: images.S__217514011,
    //     alt: "S__217514011",
    // },
    // {
    //     id: 8,
    //     imageUrl: images.S__217513999,
    //     alt: "S__217513999",
    // },
    // {
    //     id: 9,
    //     imageUrl: images.S__217514018,
    //     alt: "S__217514018",
    // },
    // {
    //     id: 10,
    //     imageUrl: images.S__217514009,
    //     alt: "S__217514009",
    // },
];

const Header = () => {
    return (
        <div id="home" className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p2-text"> 哈囉!! 我是</p>
                            <h1 className="head-text">Josh</h1>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex">
                        <p className="p-text"> FullStack & Developer</p>
                        <p className="p-text"> Devops & SRE</p>
                    </div>

                    <div className="tag-cmp app__flex app__header-content">
                        <p className="sub-head-text">專業領域</p>
                        <p className="p-text">• 全端開發工程師</p>
                        <p className="p-text">• DevOps 工程師</p>
                        <p className="p-text">• 站點可靠性工程師 (SRE)</p>
                        <br />
                        <p className="sub-head-text">技術棧</p>
                        <p className="p-text">• 前端：React.js, Next.js, TypeScript</p>
                        <p className="p-text">• 後端：Node.js, Express, MongoDB</p>
                        <p className="p-text">• DevOps：Docker, K8s, AWS, CI/CD</p>
                        <br />
                        <p className="sub-head-text">特色專長</p>
                        <p className="p-text">• 微服務架構設計與實現</p>
                        <p className="p-text">• 自動化部署與監控系統建置</p>
                        <p className="p-text">• 高可用性系統優化與維護</p>
                    </div>
                </div>
            </motion.div>

            {/* <motion.div></motion.div> */}

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={2000}
                    showArrows={true}
                    showStatus={false}
                >
                    {headImages.map((image, i) => (
                        <img
                            key={image.id}
                            src={image.imageUrl}
                            alt={image.alt}
                            style={{ borderRadius: "5%" }}
                        />
                    ))}
                </Carousel>
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                    style={{ zIndex: -3 }}
                ></motion.img>
            </motion.div>

            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.react, images.node, images.javascript].map((circle, i) => (
                    <div className="circle-cmp app__flex" key={i}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AppWrap(Header, "home");
