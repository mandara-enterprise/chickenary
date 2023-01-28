const { Link, useRouteError } = require("react-router-dom");

function Error() {
  const error = useRouteError();
  return (
    <div>
      <p>{error.message}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Error;
