import React,{ useEffect, useState } from 'react';



export function Lista({elementos}){
    const [searchField, setSearchField] = useState('');
    const [Description, setDescription] = useState('');

    useEffect(()=>{
        if(!searchField) return;
        
        setDescription('hello my name is '+searchField);
        console.log(Description)
        },[searchField])

    const filteredPokemons = elementos.filter(
        elemento => {
          return (
            elemento
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase()) 
          );
        }
      );
   
    const handleChange = e => {
        setSearchField(e.target.value);
      };

    const handleClick= e => {
    setSearchField(e.target.value);
    };
    const Refresh= e => {
        setSearchField('');
        setDescription('');
    };

    return(
        <div >
            <div align ="center">
                <input 
                    className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                    type = "search" 
                    placeholder = "Search Pokemon" 
                    onChange = {handleChange}
                />
            </div>
            <table align="center">  
                <tr>
                    <th>Pokemon</th>
                    <th>Imagen</th>
                    <th>Detalles</th>
                </tr>
                
                {filteredPokemons.map((pokemon)=>(
                <tr>
                    <th><img src= {pokemon.image} width="50" height="60" alt ="not found"/></th>
                    <th>{pokemon.name}</th>
                    <th><button value={pokemon.name} onClick={handleClick}> Click me! </button></th>
                </tr>
               
                ))}
                

                
            </table>
            
            <div align="Center">
            {Description}
            </div>
            <div align="Center">
            
                <button > {'<<'} </button>{' '}
                <button >{'<'} </button>{' '}
                <button >{'>'} </button>{' '}
                <button >{'>>'} </button>{' '}
                <button  onClick={Refresh}> Return </button>
            </div>
        </div>
    );
}
