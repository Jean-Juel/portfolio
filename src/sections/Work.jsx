import {FaJsSquare} from "react-icons/fa";
import deya from '../assets/deya.png'
import {Link} from "react-router-dom";
import {FaLongArrowAltRight} from "react-icons/fa";

function Work() {

    return (
        <section id="work"
                 className="h-[80vh] bg-white dark:bg-secondary transition-all duration-[1s] flex justify-center items-center content-center w-full">
            <div className="max-w-5xl w-full flex flex-col justify-center items-center my-52 m-auto">
                <div className="w-full p-5 m-auto">
                    <h2 className="mb-10 text-3xl text-center">Some works</h2>
                    <div className="flex justify-center items-center flex-wrap md:flex-nowrap w-full gap-10">
                        <div
                            className="hover:border-yellow border-slate-400 border-4 overflow-hidden box relative cursor-pointer w-1/2 shadow-md max-h-[350px] rounded-lg transition-all duration-300 [&>div]:hover:h-[100%] [&>div]:hover:flex">
                                <img className="h-full object-cover w-full" src={deya} alt="deya project"/>
                            <div
                                className="absolute top-0 left-0 transition-all duration-200 h-0 hidden w-full flex flex-col p-5 text-white z-10 h-0 flex-col items-center justify-center">
                                <h3 className="text-3xl text-white mb-3">DEYA Project</h3>
                                <Link to="https://github.com/Jean-Juel" className="flex justify-center items-center gap-2 text-white [&>svg]:hover:fill-yellow [&>svg]:hover:translate-x-2"><span className="relative ease-out transition-scale duration-300 before:content-[''] before:block before:absolute before:w-full before:h-[1px] before:bg-yellow before:left-0 before:-bottom-[3px] hover:before:scale-x-100 before:scale-x-0 hover:text-yellow">Lien Github</span><FaLongArrowAltRight className="stroke-black text-2xl"/></Link>
                            </div>
                            <div className="absolute top-0 left-0 bg-slate-800 opacity-50 h-0 w-full -z-3"></div>
                        </div>
                        <div
                            className="box relative cursor-pointer w-1/2 shadow-md h-[200px] rounded-lg transition-all duration-300 [&>div]:hover:h-[35%] [&>div]:hover:block">
                                <img className="h-[70%] object-cover w-full" src={deya} alt="deya project"/>
                            <div
                                className="absolute bottom-0 left-0 transition-height bg-work duration-200 h-0 hidden w-full flex flex-col p-5 text-white -z-2">
                                <div
                                    className="absolute bottom-0 left-0 w-full  opacity-50 -z-1 h-full"></div>
                                <h3 className="text-2xl text-white ">Project</h3>
                                <p className="text-white">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work