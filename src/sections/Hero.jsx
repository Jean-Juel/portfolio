import hero from '../assets/hero-devices.svg'
import juhel from "../assets/moi.png"

import {FaGithub,FaLinkedinIn} from 'react-icons/fa'
import {Link} from "react-router-dom";
function Hero() {

    return (
            <section id="hero" className={`h-[100vh]  clip-hero ${({isDarkMode}) => (isDarkMode ? 'bg-dark-mode' : 'bg-tertiary')} transition-all duration-[1s] flex justify-center items-center`}>
                <div className="max-w-6xl w-full flex flex-col lg:flex-row p-10">
                    <div className="w-full lg:w-1/2 p-5 text-center lg:text-left">
                        <div className="lg:border-l-2 lg:border-black pl-4 border-0">
                            <h1 className="text-4xl ">Vicktor Juhel</h1>
                            <p className="mb-4 text-4xl">Developpeur Web</p>
                        </div>
                            <p className="mb-4">Vous recherchez un Développeur Web jeune, dynamique et motivé <br/> pour une mission de courte ou longue durée.</p>
                            <p className="mb-4">Sous contrat en CDD ou CDI ou même Freelance, je vous propose <br/>mes compétences et mon éxpérience.</p>
                            <p className="mb-4">Mon profil vous intéresse !?</p>
                        <div className="-active:translate-y-10 bg-black m-auto lg:m-0 lg:mb-5 max-w-[9rem] w-full mb-5 max-h-10 h-full flex justify-center items-center hover:bg-white hover:[&>*]:text-black border-2 border-black  hover:bg-white cusor-pointer bg-back border-2-transparent hover:rounded-3xl whitespace-nowrap">
                            <Link to="/contact" className="w-full hover:text-black text-white text-center flex justify-center items-center h-full">Contactez moi !</Link>
                        </div>
                        <div className="reseau flex items-start gap-2 justify-center lg:justify-start">
                            <Link to="https://github.com/Jean-Juel"><FaGithub className="text-3xl cursor-pointer" to="https://github.com/Jean-Juel"/></Link>
                            <Link to="https://www.linkedin.com/in/vicktor-juhel-294421231/"><FaLinkedinIn className="text-3xl cursor-pointer" to="https://www.linkedin.com/in/vicktor-juhel-294421231/"/></Link>
                        </div>
                    </div>
                    <div className="hidden lg:block relative w-full lg:w-1/2 h-auto max-w-2xl relative flex justify-center">
                        <img className=" object-cover w-[80%] lg:w-full lg:h-full rounded-lg shadow-md z-10" src={juhel} alt="Photo de Vicktor Juhel Developpeur Web"/>
                        <div className="hidden lg:block absolute right-[6.5rem] lg:-right-6 -bottom-3  w-[80%] lg:w-full h-full bg-transparent border-black border-2 -z-[8] rounded-lg"></div>
                    </div>
                </div>
            </section>
    )
}

export default Hero
