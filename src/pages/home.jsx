import React from 'react'
import CurtainRevealBox from 'react-curtain-reveal'

const Home = () => {
    return (
        <div className="curtain">
            <div className="curtain__wrapper">
                <input type="checkbox" defaultChecked="" />
                <div className="curtain__panel curtain__panel--left">
                    <h1>Click to reveal&nbsp;</h1>
                </div>{" "}
                {/* curtain__panel */}
                <div className="curtain__content">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/trophy.svg" />
                    <h2>Achievement Unlocked!</h2>
                </div>
                <div className="curtain__panel curtain__panel--right">
                    <h1>a special reward...</h1>
                </div>{" "}
                {/* curtain__panel */}
            </div>{" "}
            {/* curtain__wrapper */}
        </div>


    )
}

export default Home