import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { CreatePokemonPage } from "../pages/CreatePokemonPage/CreatePokemonPage";
import { PokemonDetailPage } from "../pages/PokemonDetailPage/PokemonDetailPage";
import { EditPokemonPage } from "../pages/EditPokemonPage/EditPokemonPage";

const queryCache = new QueryCache();

export function App() {
  return (
    <>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Router>
          <Switch>
            <Route path="/pokemon/create">
              <CreatePokemonPage />
            </Route>
            <Route path="/pokemon/:id/edit">
              <EditPokemonPage />
            </Route>
            <Route path="/pokemon/:id">
              <PokemonDetailPage />
            </Route>
            <Route path="/pokedex/page/:pageParam">
              <PokedexPage />
            </Route>
            <Route exact path="/">
              <Redirect to="/pokedex/page/0" />
            </Route>
          </Switch>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </ReactQueryCacheProvider>
    </>
  );
}
