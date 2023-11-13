import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import ReactTooltip from "react-tooltip"
import { client, urlFor } from "../../client"
import { AppWrap, MotionWrap } from "../../wrapper"

import "./Skills.scss"
const Skills = () => {
    const [skills, setSkills] = useState([])
    const [experiences, setExperience] = useState([])
    useEffect(() => {
        const skillsQuery = '*[_type == "skills"]'
        const query = '*[_type == "experiences"]'

        client.fetch(query).then((data) => {
            setExperience(data)
        })
        client.fetch(skillsQuery).then((data) => {
            setSkills(data)
        })
    }, [])
    return (
        <>
            <h2 className="head-text">專長 & 經歷</h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills?.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transaction={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}>
                            <div
                                className="app__flex"
                                style={{
                                    backgroundColor: skill.bgColor,
                                }}>
                                <img
                                    src={urlFor(skill.icon)}
                                    alt={skill.name}
                                />
                                <p className="p-text">{skill.name} </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="app__skill-exp">
                    {experiences.map((experience, i) => (
                        <motion.div className="app__skills-exp-item" key={i}>
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work, i) => (
                                    <>
                                        <motion.div
                                            whileInView={{
                                                opacity: [0, 1],
                                            }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            // key={work.name}
                                            key={i}>
                                            <h4 className="bold-text">
                                                {work.name}
                                            </h4>
                                            <p className="p-text">
                                                {work.company}
                                            </p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip">
                                            {work.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

// export default AppWrap(Skills, "skills")
export default AppWrap(
    MotionWrap(Skills, "app__skills"),
    "skills",
    "app__whitebg"
)
