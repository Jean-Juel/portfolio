import {FaJsSquare, FaSass, FaGitAlt, FaReact, FaWordpressSimple, FaNpm} from 'react-icons/fa';
import {SiNextdotjs, SiTailwindcss} from 'react-icons/si';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Skills() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            className: 'sample',
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 400,
            arrows: false,
            lazyLoad: 'ondemand',
            responsive:  [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        speed: 600,
                    }
                },
                {
                    breakpoint: 630,
                    settings: 'unslick'
                }
            ]
        };



    return (
        <section id="skill"
                 className="transition-all duration-[1s] m-auto">
            <h2 className="text-4xl m-0 text-center">Quality</h2>
            <div className="flex justify-center items-center relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/2 clip-big bg-tertiary dark:bg-secondary w-full h-full -translate-x-1/2 -translate-y-1/2 -z-30"></div>
            <div
                className="absolute top-1/2 left-1/2 clip-small bg-yellow dark:bg-secondary w-full h-full -translate-x-1/2 -translate-y-1/2 -z-30 flex text-black">

            </div>
                <div
                className="slider absolute top-[53%] hidden sm:flex left-1/2 bg-transparent dark:bg-secondary w-full h-full [&>svg}:text-4xl -translate-x-1/2 -translate-y-1/2 -z-30 text-black justify-center items-center lg:-skew-y-[3deg] -skew-y-6">
                <Slider {...settings}>
                    <div><FaSass/></div>
                    <span>Autonomie</span>
                    <div><FaGitAlt/></div>
                    <span>Maturité</span>
                    <div><FaReact/></div>
                    <span>Esprit d'équipe</span>
                    <div><FaWordpressSimple/></div>
                    <span>Courage</span>
                    <div><SiTailwindcss/></div>
                    <span>Réflexion</span>
                    <div><SiNextdotjs/></div>
                    <span>Adpatabilité</span>
                </Slider>
            </div>

            <div className="mt-[6.5rem] flex flex-col md:flex-row justify-center items-center p-5 gap-10">

                <div
                    className="h-auto md:min-h-[460px] backdrop-filter backdrop-blur-sm bg-opacity-40 p-8 flex justify-center flex-col rounded-2xl border-black shadow-2xl md:w-[50%] w-full">
                    <h2 className="mb-4 text-3xl text-center">Hard Skills</h2>
                    <div className="flex flex-wrap mt-10 gap-8 justify-center items-center text-center">
                        <div className="skills-card bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
                            <FaJsSquare/></div>
                        <div className="skills-card"><FaSass/></div>
                        <div className="skills-card"><FaGitAlt/></div>
                        <div className="skills-card"><FaReact/></div>
                        <div className="skills-card"><FaWordpressSimple/></div>
                        <div className="skills-card"><SiTailwindcss/></div>
                        <div className="skills-card"><SiNextdotjs/></div>
                    </div>
                </div>
                <div
                    className="min-h-[460px] backdrop-filter backdrop-blur-sm bg-opacity-40 p-8 flex justify-center flex-col rounded-2xl border-black shadow-2xl md:w-[50%] md:ml-20 w-full">
                    <h2 className="mb-4 text-3xl text-center">Soft Skills</h2>
                    <div className="flex flex-wrap mt-10 gap-8 justify-center items-center text-center">
                        <div className="skills-card soft">Autonomie</div>
                        <div className="skills-card soft">Maturité</div>
                        <div className="skills-card soft">Esprit d'équipe</div>
                        <div className="skills-card soft">Courage</div>
                        <div className="skills-card soft">Réflexion</div>
                        <div className="skills-card soft">Adaptabilité</div>

                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
