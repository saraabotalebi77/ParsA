import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import TitlePage from "../layout/TitlePage";
import { Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function Main() {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState({
    state: "open",
    isShowMainMenu: true,
    isShowSubMenu: false,
    activeItem: "dashboard",
  });
  const handleMenu = (
    state: string,
    isShowMainMenu: boolean,
    isShowSubMenu: boolean,
    activeItem: string,
  ) => {
    setMenu({
      state,
      isShowMainMenu,
      isShowSubMenu,
      activeItem,
    });
  };
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const elem = e.target as HTMLElement;

      if (
        menu.isShowSubMenu &&
        !document.getElementById("navbar")?.contains(elem) &&
        !document.getElementById("menu-icon")?.contains(elem) &&
        !document.getElementById("responsive-menu-icon")?.contains(elem)
      ) {
        handleMenu("open", true, false, menu.activeItem);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menu.isShowSubMenu, menu.activeItem]);

  return (
    <div>
      <Header handleMenu={handleMenu} menu={menu} />
      <div className="sticky top-[72px] flex">
        <Navbar handleMenu={handleMenu} menu={menu} />
        <div className="grow">
          {pathname !== "/chat" && <TitlePage />}
          <Outlet />
          {pathname !== "/chat" && <Footer />}
        </div>
      </div>
    </div>
  );
}
