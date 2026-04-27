import "../styles/login.scss";
import { useAuth } from '../context/useAuth';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


const ERROR_MESSAGES: Record<string, string> = {
    AUTH_FAILED:"Prístup zamietnutý. Najprv sa prihláste."
};

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const errorCode = location.state?.errorCode;
    const [showWarning, setShowWarning] = useState(!!errorCode);

    const [message] = useState(
        errorCode ? ERROR_MESSAGES[errorCode] : "Niečo sa pokazilo."
    );

    const handleLogin = () =>{
        setShowWarning(false);
        login();
        navigate('/dashboard', {replace:true});
    }

    useEffect(() => {
        if (location.state?.authDeclined) {
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location.state, navigate, location.pathname]);

    return (
        <>
            <div className="login-hlavna-karta">

                <div className="login-vnutrona-karta">
                    {showWarning && (
                        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 text-red-500 rounded-lg text-sm">
                            {message}
                        </div>
                    )}

                    <form className="space-y-4">

                        <div className="input-box">
                            <label className="label-login">
                                Meno
                            </label>
                            <input
                                type="text"
                                placeholder="email@email.com"
                                className="input-login"
                            />
                        </div>

                        <div className="input-box">
                            <label className="label-login">
                                Heslo
                            </label>
                            <input
                                type="password"
                                placeholder="****"
                                className="input-login"
                            />
                        </div>

                        <button
                            type="button"
                            className="button-login"
                            onClick={handleLogin}
                        >
                            Prihlásiť sa
                        </button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Login;