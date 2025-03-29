import React, { useRef, useState } from "react";
import api from "../../utils/axiosInstance";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Create = () => {
  const titleInputRef = useRef(null);
  const excerptInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      !titleInputRef.current.value ||
      !excerptInputRef.current.value ||
      !descriptionInputRef.current.value
    ) {
      toast.error("All fields are required!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsLoading(false);
      return;
    }

    api
      .post("/blog/create", {
        title: titleInputRef.current.value,
        excerpt: excerptInputRef.current.value,
        description: descriptionInputRef.current.value,
      })
      .then((res) => {
        toast.success("Post added successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        toast.error(`Error: ${err.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsLoading(false);
      });
  };

  return (
    <section className="create">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form__row">
            <label>Title</label>
            <input type="text" ref={titleInputRef} />
          </div>
          <div className="form__row">
            <label>Excerpt</label>
            <input type="text" ref={excerptInputRef} />
          </div>
          <div className="form__row">
            <label>Description</label>
            <input type="text" ref={descriptionInputRef} />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "ADD"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};
