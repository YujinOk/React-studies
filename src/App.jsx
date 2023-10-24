import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    async function logUsers() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          }
        );

        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    logUsers();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users?.map((curUser) => (
            <li key={curUser.id}>{curUser.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
