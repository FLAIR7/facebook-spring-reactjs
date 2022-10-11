import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./not-found.scss";

export default function NotFound(){

    /*
        TODO: Must create a token that
        checks if the user is already in session
        if so, this should be the not found page
        otherwise, It should be another not found page 
        if the user doesn't have the token
    */

    return (
        <>
            <Navbar/>
            <div className="not__found">
                <div className="not__found--flex">
                    <div className="not__found--flex-container">
                        <div className="not__found--section">
                            <div className="not__found--block">
                                <div className="not__found--block-container">
                                    <div className="not__found--middle">
                                        <div className="not__found--middle-flex">
                                            <div className="not__found--middle-container">
                                                <div className="not__found--middle-icon">
                                                    <img className="x1b0d499" src="https://static.xx.fbcdn.net/rsrc.php/yN/r/MnQWcWb6SrY.svg" alt="" width="112" height="112"/>
                                                </div>
                                                <div className="not__found--middle-msg">
                                                    <div className="not__found--middle-header">
                                                        <span>
                                                            Esta Página não está Disponivel
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="not__found--middle-msg">
                                                    <div className="not__found--middle-text">
                                                        <span>
                                                        O link pode não estar funcionando ou a Página pode ter sido removida. Verifique se o link que você está tentando abrir está correto.
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="not__found--middle-btn">
                                                    <Link to="/home" className="a">

                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}