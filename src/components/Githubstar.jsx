import { useEffect, useState } from 'react';
import NumberFlow, { continuous } from '@number-flow/react';

export default function GithubStar() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    fetch('https://api.github.com/repos/EmmanuellSk8/Apps-devs')
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count !== undefined) {
          setValue(data.stargazers_count);
        } else {
          console.error("No se pudo obtener la cuenta de estrellas");
        }
      })
      .catch(error => {
        console.error("Error al obtener las estrellas:", error);
      });
  }, []);



    return (
        <NumberFlow
            plugins={[continuous]}
            value={value}
        />
    );
}
