import React from "react"
import { BsTwitter, BsInstagram } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
const SocialMedia = () => {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }
    return (
        <div className="app__social">
            {/* <div>
                <BsTwitter />
            </div>
            <div>
                <BsInstagram />
            </div> */}
            <div>
                <FaFacebook onClick={() => openInNewTab("https://www.facebook.com/josh.lee1127")} />
            </div>
        </div>
    )
}

export default SocialMedia
