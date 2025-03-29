import React, { useEffect, useState } from "react";
import { GetItem } from "./GetItem";
import api from "../../utils/axiosInstance";
import Loading from "../../assets/icons/Loading.svg";

export const Get = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/blog")
      .then((res) => {
        console.log(res.data);
        setBlogData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <img className="loading__img" src={Loading} alt="Loading" />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="get">
      <div className="container">
        <ul>
          {blogData.map((item, index) => {
            return (
              <GetItem
                key={item._id || index}
                id={item._id}
                title={item.title}
                excerpt={item.excerpt}
                description={item.description}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
