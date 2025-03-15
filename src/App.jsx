import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { Card, ExpandableCard1 } from "./hooks/Cards";

export const App = () => {
  //useState
  const [characterList, setCharacterList] = useState([]);
  const [character, setCharacter] = useState("");
  const url = "https://rickandmortyapi.com/api/character";
  const { data, isLoading } = useFetch(url);

  //useEffect
  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch(
        "https://rickandmortyapi.com/api/character/1,2,3,4,5,6"
      );
      const data = await res.json();
      setCharacterList([...data]);
    };

    getCharacters();
  }, []);

  const onSelectCharacter = (event) => {
    const value = event.target.value;
    setCharacter(value);
    console.log(value);
  };

  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold underline">
          Rick and Morty characters
        </h1>
        <fieldset>
          <legend>Choose any character:</legend>
          {characterList.map((item, index) => {
            return <ExpandableCard1 name={item.name} image={item.image} />;
          })}
        </fieldset>
      </div>
    </>
  );
};
