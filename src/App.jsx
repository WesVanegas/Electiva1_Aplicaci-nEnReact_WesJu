import { useState, useEffect } from "react";
import { ExpandableCard1 } from "./hooks/Cards";

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
      <div className="bg-blue-950 flex justify-center p-8">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Rick and Morty characters
        </h1>
        <fieldset>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Choose any character...
          </p>
          <div className="flex flex-wrap -mb-4">
            {characterList.map((item, index) => {
              return (
                <ExpandableCard1
                  name={item.name}
                  image={item.image}
                  id={item.id}
                  species={item.species} 
                  status={item.status}
                />
              );
            })}
          </div>
        </fieldset>
      </div>
    </>
  );
};
