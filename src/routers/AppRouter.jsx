import React from "react";
import './appRouter.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Home } from "../pages/home/Home";
import { Details } from "../pages/details/Details";
// import { Breadcrumbs } from "../components/breadcrumb/Breadcrumb";
// import { dataRutas } from './dataRutas';
// import { NotFount } from "../components/pages/notFound/NotFound";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container-root-main">
        <div className="container-root-header">
          <Header />
        </div>
        <div className="container-root-body">
          <Routes>
            <Route path="home" exact element={<Home />} />
            <Route path="detail" exact element={<Details />} />
            **<Route path="*" element={<Home />}></Route>**
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
