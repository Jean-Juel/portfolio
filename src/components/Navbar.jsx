import {HiMenuAlt3, HiOutlineX} from "react-icons/hi";
import {FaRegMoon, FaSun, FaLongArrowAltRight} from "react-icons/fa";
import {Link} from "react-router-dom";
import React, {useState, useEffect, useContext} from "react";
import '../styles/tailwind.css'
// import {ThemeContext} from "../utils/context";

export default function Header({ThemeContext}) {
    // console.log(ThemeContext === 'dark' ? 'yes' : 'no')
    // const { toggleTheme, theme } = useContext(ThemeContext)
    const [isOpen, setOpen] = useState(true)
    let [scrollPosition, setScrollPosition] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    // const [theme, setTheme] = useState(null)
    const [darkTheme, setDarkTheme] = useState(false)

    //choose the screen size
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }


    useEffect(() => {
        if (window.localStorage.getItem('DarkTheme') !== null) {
            setDarkTheme(JSON.parse(window.localStorage.getItem('DarkTheme')))
        }
    }, [])


    useEffect(() => {
        const html = document.querySelector('html')
        if (localStorage.getItem('darkTheme') === false) {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }

        window.localStorage.setItem('DarkTheme', JSON.stringify(darkTheme))

    }, [darkTheme])

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY)
        }

        window.addEventListener('scroll', updatePosition)
        updatePosition()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])


    const body = document.querySelector('body')

    const handleIsOpen = () => {
        setOpen(!isOpen)
        body.style.overflow = 'auto'
    }
    const closeSideBar = () => {
        setOpen(false)
        body.style.overflow = 'hidden'
    }

    return (
        <>
            <header
                className={`${scrollPosition === 0 ? "bg-tertiary md:h-15 h-18" : "shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20"} sticky top-0 z-30 transition-all duration-[1s] dark:bg-secondary bg-tertiary w-full flex justify-between content-center`}>
                <div
                    className={`${scrollPosition === 0 ? "p-8 px-5" : "p-5"} transition-spacing duration-300 ease-in-out flex md:justify-around justify-between w-full items-center`}>

                    <Link className="flex items-baseline" to="/">
                        <h2 className="text-3xl dark:text-white font-medium">Portfolio</h2>
                        <div className="w-2 h-2 bg-primary dark:bg-tertiary rounded-lg ml-1"></div>
                    </Link>

                    <div className="flex items-center justify-center">
                        {/*menu*/}
                        <nav className="hidden lg:flex items-center">
                            <ul className="flex gap-4 items-center">
                                <a href="#hero" className="relative link-desktop translate-x-0 dark:text-white">Home</a>
                                <a href="#about"
                                   className="relative link-desktop translate-x-0 dark:text-white">About</a>
                                <a href="#skill"
                                   className="relative link-desktop translate-x-0 hover:after:transition-[scale] hover:after:duration-[1s] dark:text-white">Skills</a>
                                <a href="#work" className="relative link-desktop translate-x-0 dark:text-white">Work</a>
                                <Link to="/contact">
                                    <button type="button"
                                            className="ml-3 text-white bg-black hover:bg-yellow font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all duration-[.8s] dark:bg-tertiary dark:text-black dark:hover:text-white dark:hover:bg-black dark:focus:ring-purple-900">Here
                                        Me
                                    </button>
                                </Link>
                            </ul>
                        </nav>

                        <label onClick={() => setDarkTheme(!darkTheme)}
                               className={`z-2 ${!isOpen ? "block" : "hidden"} lg:block z-50 relative inline-flex items-center cursor-pointer h-auto ml-4`}>
                            <input type="checkbox" value="" className="sr-only peer"/>
                            <div
                                className={`flex flex-wrap justify-start content-center w-11 h-6 bg-quatre peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[110%] after:translate-x-[10%] peer-checked:after:border-white after:content-[""] text-lg after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}>
                                <FaRegMoon
                                    className="absolute top-[5px] left-[5px] fill-white inline-flex content-center cursor-pointer w-3.5 h-3.5"/>
                                <FaSun
                                    className="absolute top-[5px] right-[5px] fill-white inline-flex content-center cursor-pointer w-3.5 h-3.5"/>
                            </div>
                        </label>

                        {/*Burger*/}
                        <HiMenuAlt3 onClick={() => {
                            closeSideBar()
                        }}
                                    className={`${isOpen ? "block" : "hidden"} lg:hidden cursor-pointer w-8 h-8 text-xl`}/>
                        <HiOutlineX onClick={() => {
                            handleIsOpen()
                        }}
                                    className={`${!isOpen ? "block" : "hidden"} mr-4 lg:hidden z-50 cursor-pointer w-8 z-3 h-8 text-xl`}/>

                    </div>
                </div>
            </header>
            {/*nav side mobile*/}
            <nav
                className={`${!isOpen ? "w-1/2" : "hidden"} transition-all flex translate-x-1/2 p-5 z-20 ease-in-out duration-500 dark:bg-tertiary bg-blue lg:hidden absolute md:h-[calc(h-100vh_-_3.75rem)] top-0 content-center justify-start items-start m-auto w-1/2 h-screen right-0`}>
                <ul className={`flex gap-2 flex-col p-5 child:pb-2 child:hover:color-tertiary child:color-tertiary child:cursor-pointer w-full relative mt-10`}>
                    <a href="/"
                       className={`flex items-center gap-1 [&>svg]:text-2xl transition-all ease-in [&>svg]:hover: [&>svg]:hover:block [&>svg]:hover:translate-x-2 relative after:absolute after:w-full after:bottom-0 after:left-0 after:bg-black after:h-[0.5px]`}>
                        Home
                        <FaLongArrowAltRight className="hidden"/>
                    </a>
                    <Link to="work" className='link'>About</Link>
                    <li>Skills</li>
                    <li>Work</li>
                    <li className="">Contact</li>
                </ul>
            </nav>
            <div
                onClick={() => setOpen(!isOpen)}
                className={`${!isOpen ? "block" : "hidden"} overlay absolute h-screen z-10 w-full top-0 bg-gradient-to-t from-indigo-200 via-red-200 to-yellow-100`}></div>
        </>
    )
}
