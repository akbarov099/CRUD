import { Create } from "../modules/Create/Create";
import { Get } from "../modules/Get/Get";
import { Single } from "../modules/Single/Single";
import { Update } from "../modules/Update/Update";

export const routes = () => {
  return [
    {
      id: 1,
      path: "/",
      element: <Get />,
    },
    {
      id: 2,
      path: "/create",
      element: <Create />,
    },
    {
      id: 3,
      path: "/post/:id",
      element: <Single />,
    },
    {
      id: 4,
      path: "/blog/:id",
      element: <Update />,
    },
  ];
};
