import { useState } from "react";
import { useFetch } from "./useFetch";
import "./app.scss";

// If the API does not work use these local URLs
// const URLS = {
//   USERS: "users.json",
//   POSTS: "posts.json",
//   COMMENTS: "comments.json",
// }

const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};

// BONUS:
const OPTIONS = {
  method: "POST",
  body: JSON.stringify({ name: "Kyle" }),
  headers: {
    "Content-type": "application/json",
  },
};

function App() {
  const [url, setUrl] = useState(URLS.USERS);
  // console.log(url);

  // const { data, isLoading, isError } = useFetch(url);
  // BONUS:
  const { data, isLoading, isError } = useFetch(url, OPTIONS);

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            checked={url === URLS.USERS}
            onChange={() => setUrl(URLS.USERS)}
          />
          Users
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.POSTS}
            onChange={() => setUrl(URLS.POSTS)}
          />
          Posts
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.COMMENTS}
            onChange={() => setUrl(URLS.COMMENTS)}
          />
          Comments
        </label>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        // <pre>{JSON.stringify(data, null, 2)}</pre>
        // <div>
        //   {data?.map((user) => (
        //     <div key={user.id}>
        //       <h2>{user.name}</h2>
        //       <p>Email: {user.email}</p>
        //     </div>
        //   ))}
        // </div>
        <div className="table-container">
          {data && data.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th colSpan={1}>ID</th>
                  <th colSpan={3}>Body || Email</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((cur, index) => (
                  <tr key={index}>
                    <td>{cur.id ?? ""}</td>
                    <td>{cur?.body ?? cur.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data found</p>
          )}
        </div>
      )}
    </>
  );
}

export default App;
