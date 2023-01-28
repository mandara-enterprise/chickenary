import { Link, useLoaderData } from "react-router-dom";

function Categories() {
  const categories = useLoaderData();
  console.log("z-categoreis", categories);
  return (
    <div>
      <h3>Categories List</h3>
      {categories.map((category) => (
        <div key={category.id}>
          <Link to={category.id.toString()}>{category.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Categories;
