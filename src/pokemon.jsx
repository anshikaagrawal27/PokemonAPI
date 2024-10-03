import { useEffect, useState } from "react";
import "./index.css";
import { PokemonCard } from "./PokemonCard";

export const Pokemon=()=>{
    const [pokemon,setPokemon]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [search,setSearch]=useState("");

    const Api="https://pokeapi.co/api/v2/pokemon?limit=27";
    const fetchPokemon=async()=>{
        try{
       const res=await fetch(Api);
       const data=await res.json();
    //    console.log(data);
       const detailedPokemonData=data.results.map(async(curr)=>{
        // console.log(curr.url);
      const res=await fetch(curr.url);
      const data=await res.json();
    //   console.log(data)
      return data;

       })
    //    console.log(detailedPokemonData);
       const detailedResponse=await Promise.all(detailedPokemonData);
       console.log(detailedResponse);
setPokemon(detailedResponse)
setLoading(false);
}
catch(err){
setLoading(false);
setError(err.message)
}
    } 

    useEffect(()=>{
fetchPokemon()
    },[]);

    const searchData=pokemon.filter((currPokemon)=>currPokemon.name.toLowerCase().includes(search.toLowerCase()));


    if (loading) {
        return <div>
            <h1>Loading..</h1>
        </div>
    }

    if(error){
        return (
            <div>
                <h1>Error:{error.message}</h1>
            </div>
        )
    }

    return(
        <>
        <section className="container">
            <header>
        <h1>Lets Fatch Pokemon</h1>
        </header>

        <div className="pokemon-search">
            <form>
                <input type="text" value={search} placeholder="search" onChange={(e)=>setSearch(e.target.value)}/>
            </form>
        </div>

        <div className="card-demo">
            <ul className="cards">{
      searchData.map((currPokemon) => {
       return <PokemonCard key={currPokemon.id} pokemonData={currPokemon} />
    })
}
    </ul>
        </div>
        </section>
        </>
    )
}