import { Outlet } from "react-router-dom";

function CategoriesLayout() {
  return (
    <div>
      <h2>Categories</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque labore
        omnis deserunt pariatur ipsum adipisci iste nobis voluptatem veniam
        expedita?
      </p>
      <Outlet />
    </div>
  );
}

export default CategoriesLayout;
