
import React, { useState } from "react";

function CurrencyConvertor() {

    const [rupees, setRupees] = useState("");

    const [euro, setEuro] = useState("");

    const handleSubmit = () => {

        const value = rupees / 90;

        setEuro(value.toFixed(2));

    };

    return (

        <div>

            <h1>Currency Convertor</h1>

            <input

                type="number"

                placeholder="Enter Rupees"

                value={rupees}

                onChange={(e)=>setRupees(e.target.value)}

            />

            <br/><br/>

            <button onClick={handleSubmit}>
                Convert
            </button>

            <h2>

                Euro : {euro}

            </h2>

        </div>

    );

}

export default CurrencyConvertor;   