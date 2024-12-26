import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/sajadthapa04")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="rounded-3xl text-center m-4 p-4 text-3xl bg-gray-700 text-white">
      <h1>Github Followers: {data.followers} </h1>
      <img
        className="h-auto rounded-full"
        src={data.avatar_url}
        alt="userImageGit pic"
      />
    </div>
  );
}

export default Github;

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sajadthapa04")
    const data = await response.json();
    return data;
};
