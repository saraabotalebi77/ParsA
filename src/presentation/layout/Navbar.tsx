import { FC } from "react";
import Accordion from "../shared/components/Accordion";
import { Link, NavLink, useLocation } from "react-router";

const menuItems = [
  { name: "dashboard", icon: "iconsminds-shop-4" },
  { name: "pages", icon: "iconsminds-digital-drawing" },
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
      className={`${menu.isShowMainMenu ? "lg:w-28" : "lg:w-0"} transition-all duration-500`}
    >
      <div
        className={`fixed h-[calc(100vh-72px)] w-24 lg:w-28 ${menu.isShowMainMenu ? "ltr:left-0 rtl:right-0" : "ltr:-left-24 lg:ltr:-left-28 rtl:-right-24 lg:rtl:-right-28"} transition-all duration-500`}
      >
        <div
          className={`absolute top-0 rounded-ee-2xl rounded-se-2xl px-2 py-3 ${menu.isShowSubMenu ? "ltr:left-24 lg:ltr:left-28 rtl:right-24 lg:rtl:right-28" : "ltr:-left-28 lg:ltr:-left-24 rtl:-right-28 lg:rtl:-right-24"} h-full w-52 border-[#f3f3f3] bg-light-foreground shadow-light transition-all duration-500 ltr:border-l rtl:border-r dark:border-[#313131] dark:bg-dark-foreground dark:shadow-dark`}
        >
          {menu.activeItem === "pages" && (
            <Accordion title="Authorization">
              <ul className="navbar-subMenu">
                <li>
                  <Link to="/login">
                    <i className="simple-icon-user-following"></i>
                    <span>login</span>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <i className="simple-icon-user-follow"></i>
                    <span>register</span>
                  </Link>
                </li>
                <li>
                  <Link to="/forgot-password">
                    <i className="simple-icon-user-unfollow"></i>
                    <span>forgot password</span>
                  </Link>
                </li>
              </ul>
            </Accordion>
          )}
          {menu.activeItem == "applications" && (
            <ul className="navbar-subMenu">
              <li className="text-light-bluenavy-100 has-[.active]:list-disc dark:text-dark-bluenavy-100">
                <NavLink to="/chat" className="navbar-subMenu--navlink">
                  <i className="simple-icon-bubbles"></i>
                  <span>chat</span>
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <div className="scrollbar dark:scrollbar-dark absolute left-0 top-0 h-full w-full overflow-auto bg-light-foreground dark:bg-dark-foreground">
          <ul className="*:hoverable-text flex h-full list-none flex-col *:flex *:min-h-20 *:grow *:flex-col *:items-center *:justify-center *:border-b *:border-[#f3f3f3] dark:*:border-[#313131]">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleMainMenuItem(item.name)}
                className={
                  item.pages?.includes(pathname) ? "navbar-mainMenu--activeItem" : ""
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
