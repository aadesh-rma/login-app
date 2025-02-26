import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Dashboard({ isAuthenticated, setIsAuthenticated }) {
    const navigate = useNavigate();
    console.log("Dashboard component is rendering");

    useEffect(() => {
        if ((JSON.parse(localStorage.getItem("isAuthenticated")) || false) !== true) {
            navigate("/", { replace: true });

        }
    }, [isAuthenticated])


    const handleLogout = () => {
        setIsAuthenticated(false)
        navigate("/", { replace: true });
    }
    
    return (
        <>
            <div id="dash-image-container">
                <img src="/welcome.png" alt="welcome to dashboard" />
            </div>
            <button id="dash-logout" onClick={handleLogout}>Logout</button>
        </>
    )
}