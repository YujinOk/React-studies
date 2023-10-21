import { useState, useEffect } from "react";
import "./app.scss";
import Child from "./Child";
const App = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  // https://jsonplaceholder.typicode.com/users

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        console.log("HERE");
        setUsers(data);
      })
      .catch((e) => {
        if (e?.name === "AbortError") return;
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="container">
      <h1>Users</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error!</h2>
      ) : (
        <pre>{JSON.stringify(users, null, 2)}</pre>
        // <p>{JSON.stringify(users)}</p>
      )}
    </div>
  );
};

export default App;
