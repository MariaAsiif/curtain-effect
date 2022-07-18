import React from 'react'
// import CurtainRevealBox from 'react-curtain-reveal'

const Home = () => {
    return (
        <div className="curtain">
            <div className="curtain__wrapper">
                <input type="checkbox" defaultChecked="" />
                <div className="curtain__panel curtain__panel--left">
                </div>{" "}
                {/* curtain__panel */}
                <div className="curtain__content">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/trophy.svg" alt="reward_img" />
                    <h2>Achievement Unlocked!</h2>
                </div>
                <div className="curtain__panel curtain__panel--right">
                </div>{" "}
                {/* curtain__panel */}
            </div>{" "}
            {/* curtain__wrapper */}
        </div>


    )
}

export default Home