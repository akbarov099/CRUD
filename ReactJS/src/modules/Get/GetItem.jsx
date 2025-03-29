import React from "react";
import { useNavigate } from "react-router-dom";

export const GetItem = ({ id, title, excerpt, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <li>
      <img
        src="https://s3-alpha-sig.figma.com/img/b785/baf6/7cdf52ef110f5b0e5d6f152617b11f89?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ka4NHZJIhKDlWw7XpUdPzRBcD8Aay5MvadQE2-2SwXzdYUHaAcN-26apzRLszN00iBBkvDOp2OVLULFP57MlawSOfliMLr1KTvde06zY8u41ISPYJzROEjNCjue0dPAfFFcL99k8QNTrE-46V6wBaxPJJU21lxcZfZXe19dgSAp2YxyUbLK5BPN3eCHql20NCTYTyGtaoHBlEt02R7lA9CYNl25CUdvbX1cw22ABvSMoFFM3bVonl6ZWglnq7ae5WUX5Q7DmVf9aXkalMG8Gv-4RQvkdvL9W-50nx5VbWrm7MkgBGzZDJGdh59WyqYWx8wAjWfxgBB5k0w0kewko1g__"
        alt=""
      />
      <div className="content">
        <h2>{title}</h2>
        <h3>{excerpt}</h3>
        <h4>{description}</h4>
        <button onClick={handleClick}>Look</button>
      </div>
    </li>
  );
};
