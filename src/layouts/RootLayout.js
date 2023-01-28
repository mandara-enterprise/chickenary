const { NavLink, Outlet } = require("react-router-dom");

function RouteLayout() {
  return (
    <div>
      <header>
        <h1>CC</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/help">Help</NavLink>
          <NavLink to="/categories">Categories</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RouteLayout;
