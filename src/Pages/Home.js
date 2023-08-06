import React from 'react';
import Footer from '../Shared/Footer';
import AboutMe from './AboutMe';
import Banner from './Banner';
import ContactMe from './ContactMe';
import MySkills from './MySkills';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;