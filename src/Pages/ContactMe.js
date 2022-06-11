import React from 'react';

const ContactMe = () => {
    return (
        <div>
            <h3 class="text-md underline underline-offset-2 text-center my-4 text-accent">Contact Me</h3>
            <div className=" min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-full max-w-xl p-5">
                        <h3 className="text-md text-center text-primary underline underline-offset-2 py-3">Contact Info</h3>
                        <div className='card'>
                            <h2 className="text-2xl">Phone</h2>
                            <figure style={{ justifyContent: 'flex-start' }} className='flex items-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                <a href="tel:+8801737509339">+8801737509339</a>
                            </figure>
                        </div>
                        <div className='my-5'>
                            <h2 className="text-2xl">Email</h2>
                            <figure style={{ justifyContent: 'flex-start' }} className='flex items-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a href="mailto:arburhanar@gmail.com">arburhanar@gmail.com</a>
                            </figure>
                        </div>
                        <div>
                            <h2 className="text-2xl">Address</h2>
                            <figure style={{ justifyContent: 'flex-start' }} className='flex items-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <address>Sector-3,Uposhohor Rajshahi </address>
                            </figure>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-xl">
                        <div className="card-body">
                            <h3 className="text-md text-center text-primary underline underline-offset-2">Direct Mail</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea type="text" rows={6} className="textarea textarea-bordered" placeholder="Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent"> <span className='px-2'>Send</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                </svg> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;