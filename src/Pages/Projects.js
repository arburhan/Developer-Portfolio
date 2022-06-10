import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [myProjects, setMyProjects] = useState([]);
    useEffect(() => {
        fetch('ProductsInfo.json')
            .then(res => res.json())
            .then(data => setMyProjects(data));
    }, [])
    return (
        <div>
            <h3 className="text-md underline underline-offset-2 text-center my-8 text-accent">My Projects</h3>
            <p className="text-md text-xl text-center">I've done a number of projects, some of which are highlighted</p>
            <div className='flex flex-col md:flex-row justify-center gap-8'>
                {
                    myProjects.map(project => <Project key={project._id} project={project} ></Project>)
                }
            </div>
        </div>
    );
};


export default Projects;