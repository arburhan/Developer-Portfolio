import React from 'react';
import aboutMeImage from '../Assests/Images/ar-burhan.png';

const AboutMe = () => {
    return (
        <div className='my-5'>
            <h3 className="text-md underline underline-offset-1 text-center my-8 text-accent">About Me</h3>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row gap-6 md:gap-20">
                    <img src={aboutMeImage} class="w-md md:max-w-sm rounded-lg shadow-2xl" alt='ar burhan' />
                    <div className='w-xs md:max-w-4xl'>
                        <h1 class="text-4xl font-bold">Why You Are Hire Me</h1>
                        <p class="py-6 md:pr-8">My name is Md Borhan Uddin Ashik. I am a junior web developer.My sole purpose is to create new websites all the time. Always try to work with advanced technology and with
                            total concentration to be user-friendly. But I am always ready to take on a challenge so that I can learn
                            something new.This year I have completed Diploma in Computer Technology from Rajshahi Polytechnic Institute.</p>
                        <button class="btn btn-accent">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;