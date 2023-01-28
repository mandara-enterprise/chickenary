import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

//Layouts
import RootLayout from "layouts/RootLayout";
import HelpLayout from "layouts/HelpLayout";
import CategoriesLayout from "layouts/CategoriesLayout";

//Components
import Error from "components/error";

//Pages
import Home from "pages/home";
import About from "pages/about";
import FAQ from "pages/help/faq";
import Contact from "pages/help/contact";
import Categories from "pages/categories";
import CategoryDetails from "pages/categories/category-details";
import PageNotFound from "pages/pagenotfound";

//Loaders
import { categoriesLoader } from "loaders/categoriesLoader";
import { categoryDetailsLoader } from "loaders/categoryDetailsLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to="/cc" />} />
      <Route path="/cc" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route
        path="categories"
        element={<CategoriesLayout />}
        errorElement={<Error />}
      >
        <Route index element={<Categories />} loader={categoriesLoader} />
        <Route
          path=":id"
          element={<CategoryDetails />}
          loader={categoryDetailsLoader}
        />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
