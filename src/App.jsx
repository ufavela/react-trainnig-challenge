import React from 'react';
import {
  Routes, Route, Outlet, Link, BrowserRouter,
} from 'react-router-dom';
import styled from 'styled-components';
import Lista from './pages/PokemonList/Lista';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Details from './pages/PokemonDetails/Details';
import pokemons from './api/pokemons';

const DivStyle = styled.div`
  border: 3px outset #c71900;
  background-color: #63d957;
  text-align: center;
`;
function Layout() {
  return (
    <DivStyle>
      <Header />
      <nav
        style={{
          borderBottom: 'solid 1px', paddingBottom: '1rem',
        }}
      >
        <Link to="/">Home</Link>
        |
        <Link to="/pokemonList">Pokemon List</Link>
        |
        <Link to="/test1/1">Pokemon Details</Link>
      </nav>
      <div>
        <Outlet />
      </div>
      <Footer />
    </DivStyle>
  );
}

function App() {
  return (
    <BrowserRouter>
      Hello
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="pokemonList" element={<Lista elementos={pokemons} />} />
          <Route path="test1/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
