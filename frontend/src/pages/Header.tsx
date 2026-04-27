import "../styles/header.scss"
import { useState, useEffect } from 'react';
import {useAuth} from "../context/useAuth.ts";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [isDark, setIsDark] = useState(true);
    const {isAuthenticated, logout} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const handleLogout = () => {
        navigate('/login', {replace:true});
        setTimeout(() => {
            logout();
        }, 10);
    };

    return (
        <header className="header gap-4">
            <button
                onClick={() => setIsDark(!isDark)}
                className="theme-btn"
            >
                {isDark ? '🌙 Tmavý' : '☀️ Svetlý'}
            </button>

            {isAuthenticated && (
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors text-sm font-semibold"
                >
                    Odhlásiť sa
                </button>
            )}
        </header>
    );
};

export default Header;