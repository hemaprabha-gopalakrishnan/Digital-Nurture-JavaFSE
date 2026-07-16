import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {

    return (

        <div>

            <CalculateScore
                name="Hema Prabha"
                school="Bharathi Matric Higher Secondary School"
                total={549}
                goal={6}
            />

        </div>

    );

}

export default App;