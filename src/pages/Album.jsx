import React from "react";
import { NavbarSimple } from "../components/NavbarSimple.jsx";
import { AlbumModal } from "../components/AlbumModal.jsx";


export const Album = () => {
  return (
    <div>
      <header>
        <NavbarSimple />
      </header>

      <main className="ml-20 p-5">
        <AlbumModal/>
      </main>
    </div>
  );
};
