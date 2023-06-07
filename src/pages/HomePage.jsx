import About from "../sections/About";
import Work from "../sections/Work";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import {Link} from "react-router-dom";

function HomePage() {

    return (
            <main>
                <Hero id="hero"/>
                <About id="about"/>
                <Skills id="hero"/>
                <Work id="work"/>
                <div className="mb-[8rem] bg-black m-auto lg:mb-[80px] max-w-[15rem] w-full border-2 mb-5 max-h-[50px] h-full flex justify-center items-center hover:bg-white hover:[&>*]:text-black border-2-black border-black hover:bg-white cusor-pointer bg-back border-2-black rounded-3xl whitespace-nowrap">
                    <Link to="/contact" className="px-[20px] py-[10px] w-full inline-block hover:text-black text-xl transition-all duration-300 text-white text-center flex justify-center items-center h-full">Contactez moi !</Link>
                </div>
            </main>
    )
}

export default HomePage
