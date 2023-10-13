import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import DetailMovie from "./page/DetailMovie/DetailMovie";
import Header from "./component/Header";
import Layout from "./template/Layout";
import CheckOutPage from "./page/CheckOut/CheckOutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <Layout>
              <DetailMovie />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/checkout/:id"
          element={
              <CheckOutPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
