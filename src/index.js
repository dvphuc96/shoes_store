import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ShoeStore from "./pages/ShoesStore/ShoeShop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ShoeStore />}>
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
