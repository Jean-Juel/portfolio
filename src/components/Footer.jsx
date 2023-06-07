import {FaMapMarkerAlt,FaPhone,FaEnvelope,FaLink} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="mt-auto bg-tertiary dark:bg-tertiary">
            <div className="w-full bg-yellow">
                <div className=" flex justify-between items-center max-w-4xl  m-auto h-1/5 px-5 py-4">
                <div className="flex items-baseline" >
                    <h2 className="text-3xl dark:text-white font-medium">Portfolio</h2>
                    <div className="w-2 h-2 bg-primary dark:bg-tertiary rounded-lg ml-1"></div>
                </div>
                <div className="">Front-end</div>
                </div>
            </div>
            <div
                className="relative flex md:flex-row justify-center items-center max-w-4xl m-auto py-[1.5rem] gap-4 md:gap-10 flex-col">
                <div className="[&>p]:text-lg w-full md:w-[70%] p-5 text-left md:border-r-2 border-black flex flex-col">
                    <h2 className="text-xl mb-2 font-medium">Dévelooppeur Informatique indépendant</h2>
                    <p className="text-slate-700">
                        Merci de partager mon profil si celui-ci vous à plus. <br/>
                        Je reste a votre disposition. <br/>
                        Envoyé moi un mail et je vous répondrai dan les plus bref délais.<br/>
                        Merci d'avoir pris du temps pour observer mon profil.<br/>
                        Au plaisir de communiquer avec vous.
                    </p>
                    <p>

                    </p>
                </div>
                <div className="w-full md:w-[30%] p-5 text-left flex flex-col md:justify-center md:items-end">
                    <div className="w-full flex md:justify-center md:items-center justify-start">
                        <h2 className="font-medium text-xl text-left">Vicktor Juhel</h2>
                    </div>
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list-me">
                            <FaMapMarkerAlt/>
                            <span>18 Quai Louis Durand</span>
                        </li>
                        <li className="list-me">
                            <FaPhone/>
                            <span>07 85 66 40 42</span>
                        </li>
                        <li className="list-me">
                            <FaEnvelope/>
                            <a href="mailto:someone@example.com">juhel@outlook.fr</a>
                        </li>
                        <li className="list-me">
                            <FaLink/>
                            //TODO SITE
                            {/*<a href="www.vicktor-juhel.fr">vicktor-juhel.fr</a>*/}
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    );
}

