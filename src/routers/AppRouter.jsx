import React from "react";
import './appRouter.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Home } from "../pages/home/Home";
import { Details } from "../pages/details/Details";
import { Collection } from "../pages/collection/Collection";
import { About } from "../pages/about/About";
import { SizeGuides } from "../pages/size-guides/SizeGuides";
import { ReturnWarrantiesPage } from "../pages/returns-warranties-page/ReturnWarrantiesPage";
export const AppRouter = () => {
  return (
    <BrowserRouter basename='/majo-s-store-react' >
      <div className="container-root-main">
        <div className="container-root-header">
          <Header />
        </div>
        <div className="container-root-body">
          <Routes>
            <Route path="home" exact element={<Home />} />
            <Route path="all-collection" exact element={<Collection />} />
            <Route path="detail/:product" exact element={<Details />} />
            <Route path="about" exact element={<About />} />
            <Route path="size-guides" exact element={<SizeGuides />} />
            <Route path="return-warranties" exact element={<ReturnWarrantiesPage />} />
            **<Route path="*" element={<Home />}></Route>**
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
