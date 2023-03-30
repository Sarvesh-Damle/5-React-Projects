import React from "react";
// import { useEffect, useState } from "react";
import "./SpaceNews.css";
import useSWR from "swr";

const SpaceNews = () => {
  // const [newsList, setNewsList] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.spaceflightnewsapi.net/v3/articles")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       setNewsList(data)
  //     });
  // }, []);
  const fetcher = (...args) => fetch(...args).then(response => response.json());

  const {data} = useSWR('https://api.spaceflightnewsapi.net/v3/articles', fetcher)

  return (
    <div className="newsMain">
      <div className="newstitle">
        <h1>Space News</h1>
      </div>
      <div className="newsContainer">
        {/* {newsList.map((val, key) => { */}
        {data && data.map((val, key) => {
            return (
            <div key={key} className="article"onClick={() => {window.location.href = val.url}} >
              <h3>{val.title}</h3>
              <img src={val.imageUrl} alt="article_image" />
              <p>{val.summary}</p>
              <h4>{val.publishedAt}</h4>
              </div>
            )
        })}
      </div>
    </div>
  );
};

export default SpaceNews;
