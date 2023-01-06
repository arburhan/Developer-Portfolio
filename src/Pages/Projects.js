import React from 'react';
import Project from './Project';
import { useQuery } from 'react-query';
import ProductInfo from '../Assests/ProductInfo';

const Projects = () => {
    /*  const { data: myProjects, isLoading } = useQuery('myProjects', () => fetch(`https://arburhan-portfolio-server.onrender.com/projects`)
         .then(res => res.json()));
     if (isLoading) {
         return <progress className="progress w-56"></progress>
     } */

    return (
        <div id='projects' className='my-10'>
            <h3 className="text-md underline underline-offset-2 text-center my-4 text-accent">My Projects</h3>
            <p className="text-md text-xl text-center pb-10">I've done a number of projects, some of which are highlighted</p>
            <div data-aos="flip-down" className='flex flex-col md:flex-row justify-center gap-8'>
                {
                    ProductInfo.map(project => <Project key={project._id} project={project} ></Project>)
                }
            </div>
        </div>
    );
};


export default Projects;