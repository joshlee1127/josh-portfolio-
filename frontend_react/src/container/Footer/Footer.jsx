import React, { useState } from "react"

import { images } from "../../constants"
import { AppWrap, MotionWrap } from "../../wrapper"
import { client } from "../../client"

import "./Footer.scss"
const handleChange = () => {}
const Footer = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        message: "",
    })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const { username, email, message } = formData
    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = () => {
        setLoading(true)

        const contact = {
            _type: "contact",
            name: formData.username,
            email: formData.email,
            message: formData.message,
        }

        client
            .create(contact)
            .then(() => {
                setLoading(false)
                setIsFormSubmitted(true)
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <h2 className="head-text" style={{ marginTop: "2rem" }}>
                歡迎隨時來海邊跟我聊聊，喝杯咖啡．
            </h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email} alt="email" />
                    <a href="mailto:josh.lee1127@gmail.com" className="p-text">
                        josh.lee1127@gmail.com
                    </a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:+886937396553" className="p-text">
                        +886937396553
                    </a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="text"
                            placeholder="名字"
                            name="username"
                            value={username}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="email"
                            placeholder="郵件"
                            name="email"
                            value={email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="留下您的訊息"
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button
                        type="button"
                        className="p-text"
                        onClick={handleSubmit}>
                        {!loading ? "Send Message" : "Sending..."}
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">感謝您～我會立刻與您聯繫！</h3>
                </div>
            )}
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    "contact",
    "app__whitebg"
)
