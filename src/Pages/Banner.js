import React from 'react';
import bannerPhoto from '../Assests/Images/bannerPhoto.png';
import Typed from "react-typed";
import bannerBackgroundImage from '../Assests/Images/background-image.jpg';

const Banner = () => {
    const handleDownloadCV = () => {
        window.open('https://drive.google.com/file/d/17DQmFH0WH_zj2VxiLZ6ma6eqCywf4-iR/view?usp=sharing');
    }
    return (
        <div
            style={{
                /*  background: `url(${bannerBackgroundImage})`,
                 backgroundSize: 'cover', */
            }}
        >
            <div class="hero h-[85vh]">
                <div class="hero-content flex-col lg:flex-row-reverse gap-5">
                    <img src={bannerPhoto} class="w-sm md:max-w-md rounded-lg shadow-2xl" alt='' />
                    <div className='w-xs md:max-w-4xl' >
                        <p className="text-md">Hello I'm</p>
                        <h1 className="text-2xl md:text-5xl font-bold py-1">Md Borhan Uddin Ashik</h1>
                        <Typed
                            className="text-xl md:text-3xl text-red-500"
                            strings={[
                                "Junior Web Developer",
                                "Full-Stack Web Developer",
                            ]}
                            typeSpeed={100}
                            backSpeed={70}
                            loop
                        />
                        <p className="text-md py-4 md:pr-8">I am a junior web developer. I love coding and coding is my passion. I like to constantly get acquainted with new technologies and take on challenges and I find joy in it. Recently I created some fullstack websites that you can find in the projects area.</p>
                        <div className='flex gap-5'>
                            {/* <button class="btn underline">Hire Me</button> */}
                            <button onClick={handleDownloadCV} class="btn btn-accent">Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Banner;