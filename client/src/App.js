import { useState } from "react";

import DataProvider from "./context/DataProvider";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

//component
import Login from "./component/Login";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import CreatPost from "./component/CreatPost/CreatPost";
import DetailView from "./component/detail/DetailView.jsx";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: 64 }}>
          <Routes>
            <Route
              exact
              path="/login"
              element={<Login isUserAuthenticated={isUserAuthenticated} />}
            />
            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route exact path="/" element={<Home />} />
            </Route>

            <Route
              path="/creatPost"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route exact path="/creatPost" element={<CreatPost />} />
            </Route>

            <Route
              path="/details/:id"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route exact path="/details/:id" element={<DetailView />} />
            </Route>

          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
