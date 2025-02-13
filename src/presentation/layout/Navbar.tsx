import { FC } from "react";
import Accordion from "../shared/components/Accordion";
import { Link, NavLink, useLocation } from "react-router";

const menuItems = [
  { name: "dashboard", icon: "iconsminds-shop-4" },
  { name: "firewall", icon: "iconsminds-firewall" },
  { name: "applications", icon: "iconsminds-air-balloon-1", pages: ["/chat"] },
  { name: "UI", icon: "iconsminds-pantone" },
  { name: "Menu", icon: "iconsminds-three-arrow-fork" },
  { name: "blank page", icon: "iconsminds-bucket" },
];

interface PropsComponents {
  menu: {
    isShowMainMenu: boolean;
    isShowSubMenu: boolean;
    state: string;
    activeItem: string;
  };
  handleMenu: (
    state: string,
    isShowMainMenu: boolean,
    isShowSubMenu: boolean,
    activeItem: string,
  ) => void;
}

const Navbar: FC<PropsComponents> = ({ handleMenu, menu }) => {
  const { pathname } = useLocation();
  const handleMainMenuItem = (item: string) => {
    handleMenu("open", true, true, item);
  };
  return (
    <nav
      id="navbar"
      className={`fixed top-[72px] z-1 h-[calc(100vh-72px)]  shrink-0 transition-[width] duration-700 lg:relative lg:top-0 ${menu.isShowMainMenu ? "w-24 lg:w-28" : "w-0"}`}
    >
      <div
        className={`absolute h-full w-24 lg:w-28 ${menu.isShowMainMenu ? "ltr:left-0 rtl:right-0" : "ltr:-left-24 lg:ltr:-left-28 rtl:-right-24 lg:rtl:-right-28"} ltr:transition-[left] rtl:transition-[right] duration-500`}
      >
      <div
          className={`absolute top-0 rounded-se-2xl rounded-ee-2xl py-3 ${menu.isShowSubMenu ? "ltr:left-24 lg:ltr:left-28 rtl:right-24 lg:rtl:right-28" : "ltr:-left-28 lg:ltr:-left-24 rtl:-right-28 lg:rtl:-right-24"} h-full w-52 border-[#f3f3f3] bg-light-foreground shadow-light  duration-500 ltr:border-l rtl:border-r dark:border-[#313131] dark:bg-dark-foreground dark:shadow-dark`}
        >
          {menu.activeItem === "firewall" && (
            <>
              <Accordion title="Rules">
                <ul className="navbar-subMenu">
                  <li className="hover:text-light-bluenavy-100 has-[.active]:list-disc has-[.active]:text-light-bluenavy-100 dark:has-[.active]:text-dark-bluenavy-100  dark:hover:text-dark-bluenavy-100">
                    <NavLink
                      to="/fwaas/rules/list"
                      className="navbar-subMenu--navlink"
                    >
                      <i className="simple-icon-list"></i>
                      <span>Rules Management</span>
                    </NavLink>
                  </li>
                </ul>
              </Accordion>
              <Accordion title="Objects">
                <ul className="navbar-subMenu">
                  <li className="hover:text-light-bluenavy-100 has-[.active]:list-disc has-[.active]:text-light-bluenavy-100 dark:has-[.active]:text-dark-bluenavy-100  dark:hover:text-dark-bluenavy-100">
                    <NavLink
                      to="/fwaas/object/list"
                      className="navbar-subMenu--navlink"
                    >
                      <i className="simple-icon-list"></i>
                      <span>Objects Management</span>
                    </NavLink>
                  </li>
                </ul>
              </Accordion>
            </>
          )}
          {menu.activeItem == "applications" && (
            <ul className="navbar-subMenu">
              <li className="hover:text-light-bluenavy-100 has-[.active]:list-disc has-[.active]:text-light-bluenavy-100 dark:has-[.active]:text-dark-bluenavy-100  dark:hover:text-dark-bluenavy-100">
                <NavLink to="/chat" className="navbar-subMenu--navlink">
                  <i className="simple-icon-bubbles"></i>
                  <span>chat</span>
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <div className="absolute top-0 left-0 h-full w-full overflow-auto bg-light-foreground scrollbar dark:bg-dark-foreground dark:scrollbar-dark">
          <ul className="flex h-full list-none flex-col *:flex *:min-h-20 *:grow *:hoverable-text *:flex-col *:items-center *:justify-center *:border-b *:border-[#f3f3f3] dark:*:border-[#313131]">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleMainMenuItem(item.name)}
                className={
                  item.pages?.includes(pathname)
                    ? "navbar-mainMenu--activeItem"
                    : ""
                }
              >
                <i className={`${item.icon} text-2xl font-bold`}></i>
                <span className="text-sm capitalize">{item.name}</span>
              </li>
            ))}
            <li>
              <a
                href="https://dore-jquery-docs.coloredstrategies.com"
                target="_blank"
                className="flex flex-col items-center justify-center"
              >
                <i className="iconsminds-library text-lg font-bold"></i>
                <span className="text-sm">Docs</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
