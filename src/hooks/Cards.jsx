import { useState, useEffect } from "react";

export const Card = ({ name, image, id }) => {
  const [isExpanded, setIsExpanded] = useState("");
  const [info, setInfo] = useState("");
  const url = "https://rickandmortyapi.com/api/character/1";


  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setInfo([...data]);
    };
    getInfo();
  }, [isExpanded]);

  return (
    <>
      <div class="card">
        <div class="name">{name}</div>

        <div class="body">
          <img src={image} alt={name} />
        </div>

        <div class="pie">
          <a onClick={id}>More information</a>
        </div>
      </div>
    </>
  );
};
