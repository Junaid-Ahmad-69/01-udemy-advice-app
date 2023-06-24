import React, {useState, useEffect} from 'react'
import axios from "axios";
import Message from "./Message";

export default function App() {
    const [advice, setAdvice] = useState([]);
    const [adviceCounter, setAdviceCounter] = useState(0);


    useEffect(() => {
        getAdvice()
    }, [advice]);

    async function getAdvice() {
        const getData = await axios.get(`https://api.adviceslip.com/advice`)
            .then(response => setAdvice(response.data.slip.advice));
        setAdviceCounter((prevState) => prevState + 1)
        return getData;
    }

    return (
        <div>
            <h3>{advice}</h3>
            <button onClick={getAdvice}>Get Advice</button>
            <Message adviceCounter={adviceCounter}/>
        </div>
    )
}

