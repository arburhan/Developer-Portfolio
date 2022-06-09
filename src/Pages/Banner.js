import React from 'react';
import bannerPhoto from '../Assests/Images/bannerPhoto.png';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse gap-5">
                    <img src={bannerPhoto} class="w-sm md:max-w-md rounded-lg shadow-2xl" alt='' />
                    <div className='w-xs md:max-w-4xl' >
                        <p className="text-md md:text-xl">Hello I'm</p>
                        <h1 className="text-2xl md:text-5xl font-bold py-1">Md Borhan Uddin Ashik</h1>
                        <h2 className="text-xl md:text-3xl">Junior Web Developer</h2>
                        <p className="text-md py-4 md:pr-8">I am a junior web developer. I love coding and coding is my passion. I like to constantly get acquainted with new technologies and take on challenges and I find joy in it. Recently I created some fullstack websites that you can find in the projects area.</p>
                        <div className='flex gap-5'>
                            {/* <button class="btn underline">Hire Me</button> */}
                            <button class="btn btn-secondary">Download Resume</button>
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