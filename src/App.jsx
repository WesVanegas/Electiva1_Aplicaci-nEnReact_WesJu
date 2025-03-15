import { useState, useEffect } from "react";
import { Card } from "./hooks/Cards";

export const App = () => {
  //useState
  const [characterList, setCharacterList] = useState([]);
  const url = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6";

  //useEffect
  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setCharacterList([...data]);
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
            return <Card name={item.name} image={item.image} id={item.id}/>;
          })}
        </fieldset>
      </div>
    </>
  );
};
