import React from 'react';
import { pokemons } from './api/pokemons';
import {Lista} from './components/lista'
import './style/Style.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
export function App(){
    
    return(
        <div class="exampleone">
            <Header />
            <Lista elementos ={pokemons}/>
            <Footer />
        </div>
        
    )
}