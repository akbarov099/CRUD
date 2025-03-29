import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/axiosInstance";
import { Back } from "../../components/Back";
import Loading from "../../assets/icons/Loading.svg";

export const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    excerpt: "",
    description: "",
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .patch(`/blog/${id}`, post)
      .then((res) => {
        navigate(`/post/${id}`);
      })
      .catch((err) => {
        setError("Failed to update the post.");
        console.error(err);
      });
  };

  if (isLoading) {
    return <img className="loading__img" src={Loading} alt="Loading" />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="update">
      <div className="container">
        <Back />
        <form onSubmit={handleSubmit}>
          <div className="form__row">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
            />
          </div>
          <div className="form__row">
            <label htmlFor="excerpt">Excerpt</label>
            <input
              type="text"
              id="excerpt"
              name="excerpt"
              value={post.excerpt}
              onChange={handleChange}
            />
          </div>
          <div className="form__row">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={post.description}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </section>
  );
};
