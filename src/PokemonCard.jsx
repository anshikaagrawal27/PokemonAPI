export const PokemonCard=({pokemonData})=>{
    return(
        <li className="pokemon-card">
           
            <figure>
                <img src={pokemonData.sprites.other.dream_world.front_default}
                className="pokemon-image"/>
            </figure>
            <h1 className="pokemon-name">
                {pokemonData.name}
            </h1>

            <div className=" pokemon-info pokemon-highlight">
              <p>  {pokemonData.types.map((currHighlight)=>currHighlight.type.name).join(" - ")}</p>
            </div>

<div className="grid-three-cols">
    <p className="pokemon-info">
        <span>Height:</span>{pokemonData.height}
    </p>
    <p className="pokemon-info">
        <span>Weight:</span>{pokemonData.weight}
    </p>
    <p className="pokemon-info">
        <span>Speed:</span>{pokemonData.stats[0].base_stat}
    </p>

<div className="pokemon-info">
   <p>{pokemonData.abilities.map((currability)=>
       currability.ability.name
    )
    .slice(0,1)
    .join(",")}</p> 
</div>



</div>



        </li>
    )
    
}