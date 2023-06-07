import {FaGithub} from "react-icons/fa";
import hero from "../assets/hero-devices.svg";
import juhel from "../assets/moi.png";
import {useState} from "react";

function About() {

    return (
            <section id="about" className="my-[6.5rem] bg-white transition-all duration-[1s] flex justify-center">
                <div className="">
                    <h2 className="text-4xl m-0 text-center">About me</h2>
                <div className="max-w-6xl w-full flex justify-center items-center p-10 flex-col lg:flex-row">
                    {/*// TODOimage changer reflechis  */}
                    <div className="h-auto flex w-[80%] lg:w-1/2">
                        <img className="hidden lg:block" src={hero} alt="image hero"/>
                        <div className="block lg:hidden relative w-full lg:w-1/2 h-auto max-w-2xl relative flex justify-center">
                            <img className=" object-cover w-[80%] lg:w-full lg:h-full rounded-lg shadow-md z-10" src={juhel} alt="Photo de Vicktor Juhel Developpeur Web"/>
                            <div className="hidden lg:block absolute right-[6.5rem] lg:-right-6 -bottom-3  w-[80%] lg:w-full h-full bg-transparent border-black border-2 -z-[8] rounded-lg"></div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-7">
                        <h2 className="mb-4">Depuis tout le temps, pour moi, l'informatique est un monde à part que j'ai toujours eu envie un jour de rejoindre.</h2>
                        <p className="mb-4">C'est après avoir voyagé et vécu d'autres expériences professionnelles initiatiques, que j'ai repris mes études.</p>
                        <p className="mb-4">L'idée de travailler dans ce monde m'est apparue comme évidente.</p>
                        <p className="mb-4">La vraie raison est que je suis passionné <br/>par le fait de comprendre et apprendre le fonctionnement des choses et de pouvoir les mettre en forme. </p>
                        {/*{ThemeContext = 'dark' ? 'light' ? (<p>light</p>))}*/}
                    </div>
                </div>
                </div>
            </section>
    )
}

export default About
