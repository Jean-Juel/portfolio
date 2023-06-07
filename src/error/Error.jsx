import {Link} from "react-router-dom";

export default function Error() {

    return (
        <div className="h-[100vh] flex justify-center items-center flex-col">
            <h1 className="text-[60px]">404</h1>
            <p className="text-center text-[20px]"><span className="text-[30px]">Oups</span> <br/> Vous êtes perdu ?</p>
            <Link to="/" className="underline mt-4 active:decoration-yellow active:text-yellow hover:decoration-yellow hover:text-yellow">Revenez sur la page d'acceuil</Link>
        </div>
    )
}
