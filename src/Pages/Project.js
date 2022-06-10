import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img className='rounded-xl p-6 md:p-0' src={project.image} alt="Shoes" />
            </figure>
            <div className="card-body py-2 md:p-3">
                <h2 className="card-title md:py-2 text-2xl md:text-3xl">
                    {project.name}
                </h2>
                <p title={project.description} >{project.description.length > 120 ? project.description.slice(0, 120) + '...' : project.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline border-green-400">{project.stackCategory}</div>
                </div>
            </div>
        </div>
    );
};

export default Project;