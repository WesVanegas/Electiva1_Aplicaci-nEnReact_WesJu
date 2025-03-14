import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { Card } from "./hooks/Cards";


export const App = () => {
  const characters = [
    {
      id: 164,
      name: "Insurance Rick",
      image: "",
    }
  ];

  //useState
  const [character, setCharacter] = useState("");
  const url = "https://rickandmortyapi.com/api/character";
  const { data, isLoading } = useFetch(url);

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
          {characters.map((item, index) => {
            return (
              <Card name={item.name} image={item.image}/>

            );
          })}
        </fieldset>

        {/* {isLoading ? <h2>Is Loading</h2> : <h1>cargó {data.species}</h1>} */}
      </div>
    </>
  );
};
