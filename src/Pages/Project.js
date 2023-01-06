import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/virtual';

const Project = ({ project }) => {
    const navigate = useNavigate();
    const handleLiveLink = () => {
        window.open(project.liveLink)
    }
    const handleClientLink = () => {
        window.open(project.githubClient)
    }
    const handleServerLink = () => {
        window.open(project.githubServer)
    }
    const handleDetails = (id) => {
        navigate(`/project/${id}`);
    }
    // swiper js slider code 
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
    ></Swiper>
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <SwiperSlide>
                    <img className='rounded-xl p-6 md:p-0' src={project.image} alt="project screenshoot" />
                </SwiperSlide>

            </figure>
            <div className="card-body py-2 md:p-3">
                <h2 className="card-title md:py-2 text-2xl md:text-3xl">
                    {project.name}
                </h2>
                <p title={project.description} >{project.description.length > 120 ? project.description.slice(0, 120) + '...' : project.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline border-green-400">{project.stackCategory}</div>
                </div>
                <div className='flex items-center justify-around gap-4 py-5'>
                    <div onClick={handleLiveLink} className="flex flex-col items-center hover:underline  cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <p className='underline-offset-2'>Live Link</p>
                    </div>
                    <div onClick={handleClientLink} className="flex flex-col items-center hover:underline  cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        <p className='underline-offset-2'>Client Code</p>
                    </div>
                    {project.githubServer && <div onClick={handleServerLink} className="flex flex-col items-center hover:underline  cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        <p className='underline-offset-2'>Server Code</p>
                    </div>}
                </div>
                <button onClick={() => {
                    handleDetails(project._id)
                }} className='btn btn-accent' >Details</button>
            </div>
        </div >
    );
};

export default Project;