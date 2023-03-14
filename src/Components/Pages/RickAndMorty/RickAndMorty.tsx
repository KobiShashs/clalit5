import { useEffect, useState } from "react";
import "./RickAndMorty.css";
import { Result, RootObject } from "../../../Models/RickAndMorty";
import axios from "axios";

function RickAndMorty(): JSX.Element {



    const [results, setResults] = useState<Result[]>([]);

    useEffect(() => {
        console.log(123);
        axios.get<RootObject>('https://rickandmortyapi.com/api/character')
            .then(res => setResults(res.data.results))
            .catch(err => console.log(err));

    },[]);


    return (
        <div className="RickAndMorty">
            <h1>Welcome to Rick and Morty</h1>
            {results.map(x => <p key={x.id}>{x.id},{x.name},{x.species} ,<img src={x.image} alt={x.name} /></p>)}
        </div>
    );
}

export default RickAndMorty;
