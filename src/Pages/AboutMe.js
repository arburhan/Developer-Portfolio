import React from 'react';
import aboutMeImage from '../Assests/Images/burhanSecond.png';

const AboutMe = () => {

    return (
        <div
            style={{ overflow: 'hidden' }}
            id='aboutMe' className='my-12'>
            <h3 className="text-md underline underline-offset-1 text-center my-8 text-accent">About Me</h3>
            <div data-aos="zoom-out-left" className="hero">
                <div className="hero-content flex-col lg:flex-row gap-6 md:gap-20">
                    <div>
                        <img src={aboutMeImage} className="w-md md:max-w-sm rounded-lg " alt='ar burhan' />
                    </div>
                    <div className='w-xs md:max-w-4xl'>
                        <h1 className="text-4xl font-bold">Why You Are Hire Me</h1>
                        <p className="py-6 md:pr-8">My name is Md Borhan Uddin Ashik. I am a junior web developer.My sole purpose is to create new websites all the time. Always try to work with advanced technology and with
                            total concentration to be user-friendly. But I am always ready to take on a challenge so that I can learn
                            something new.This year I have completed Diploma in Computer Technology from Rajshahi Polytechnic Institute.</p>
                        <a className='btn btn-accent' href="tel:+8801737509339">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;