import React, { useState, useEffect } from "react";
import "./games-page.styles.scss";
import axios from "axios";

interface dataType {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {};
  };
  company: { name: string; catchPhrase: string; bs: string };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

const GamesPage: React.FC = () => {
  const [persons, setPersons] = useState([
    {
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {},
      },
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
      email: "Sincere@april.biz",
      id: 1,
      name: "John Ghouly",
      phone: "1-770-736-8031 x56442",
      username: "Bret",
      website: "hildegard.org",
    },
  ]);

  // axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
  //   console.log(res);
  //   setPersons(res.data);
  // });

  // console.log(persons);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res);
          const dataArray = res.data;
          dataArray.map((data: dataType) =>
            setPersons((persons) => [...persons, data])
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <div className="games">
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default GamesPage;
