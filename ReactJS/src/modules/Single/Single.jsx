import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/axiosInstance";
import { Back } from "../../components/Back";
import Loading from "../../assets/icons/Loading.svg";

export const Single = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/blog/${id}`)
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      api
        .delete(`/blog/${id}`)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to delete the post.");
        });
    }
  };

  if (isLoading) {
    return <img className="loading__img" src={Loading} alt="Loading" />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <section className="single">
        <div className="container">
          <Back />
          <div className="single__wrapper">
            <h1>{post.title}</h1>
            <h3>{post.excerpt}</h3>
            <p>{post.description}</p>
            <button onClick={() => navigate(`/blog/${id}`)}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </section>
    </>
  );
};
