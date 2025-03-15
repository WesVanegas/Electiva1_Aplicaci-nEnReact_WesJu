import { useState, useEffect } from "react";
import {  ExpandableCard1 } from "./hooks/Cards";

export const App = () => {
  //useState
  const [characterList, setCharacterList] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  //useEffect
  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setCharacterList([...data.results]);
    };

    getCharacters();
  }, []);


  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold underline">
          Rick and Morty characters
        </h1>
        <fieldset>
          <legend>Choose any character:</legend>
          {characterList.map((item, index) => {
            return <ExpandableCard1 name={item.name} image={item.image} id={item.id} species={item.species} status={item.status}/>;
          })}
        </fieldset>
      </div>
    </>
  );
};
