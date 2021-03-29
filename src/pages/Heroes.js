import { useState, useEffect } from 'react';
import HeroCard from '../components/HeroCard';
import { heroData } from '../data/heroes.js';
import { Link } from 'react-router-dom';

const HeroesPage = () => {
    const [heroes, setHeroes] = useState([]);
    const [alert, setAlert] = useState(false);
useEffect(() => {
    setHeroes(heroData);

}, [alert]);

const updateFeatured = (heroId) => {
    let foundHero = heroData.find(hero => hero.id === +heroId);
    foundHero.featured = !foundHero.featured;
    setAlert(true);
    setTimeout(() => {
    setAlert(false);
    });
    console.log(foundHero);
};


    return (
        <div id='heroes'>
            <div className='row text-center mt-3'>
                <div className='col'>
                    <h2>View Our Hero Database</h2>
                </div>
            </div>
            <div className='row'>
                {heroes.map((hero) => {
                    return (
                        <div className='col-sm-12 col-md-3'>
                            <HeroCard hero={hero} updateFeatured={updateFeatured}/>
                            </div>
                    )
                })}
            </div>
           
               
            
        </div>
    );
};

export default HeroesPage;