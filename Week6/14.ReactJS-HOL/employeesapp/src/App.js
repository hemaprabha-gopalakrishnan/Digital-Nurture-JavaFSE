import { useState } from "react";
import "./App.css";

import ThemeContext from "./ThemeContext";

import EmployeeList from "./Components/EmployeesList";

function App() {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
    };

    return (

        <ThemeContext.Provider value={theme}>

            <div data-testid="theme-wrapper" className={theme}>
                <button type="button" onClick={toggleTheme}>
                    {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                </button>
                <EmployeeList/>
            </div>

        </ThemeContext.Provider>

    );

}

export default App;