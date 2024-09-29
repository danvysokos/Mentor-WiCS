import React, {useState} from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-section">
            <div className='hero-mid-wrapper'>
                <h1>Unlock Your Potential with a Mentor</h1>
                <p>Connect with experienced professionals to guide your journey.</p>
                <div className="hero-buttons">
                    <button>Find a Mentor</button>
                    <button>Create an Account</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection