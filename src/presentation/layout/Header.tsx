import { Link } from "react-router";
import Switch from "../shared/components/Switch";
import { setLocalStorage } from "./../shared/utils/localStorage";
import { useRef, FormEvent, FC } from "react";

const menuListItem = [
  { name: "setting", icon: "iconsminds-equalizer", link: "#" },
  { name: "users", icon: "iconsminds-male-female", link: "#" },
  { name: "components", icon: "iconsminds-puzzle", link: "#" },
  { name: "profits", icon: "iconsminds-bar-chart-4", link: "#" },
  { name: "surveys", icon: "iconsminds-file", link: "#" },
  { name: "tasks", icon: "iconsminds-suitcase", link: "#" },
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

const Header: FC<PropsComponents> = ({ handleMenu, menu }) => {
  const inputRef = useRef<HTMLLabelElement | null>(null);
  //change theme
  const handleChangeTheme = () => {
    if (document.documentElement.classList.toggle("dark")) {
      setLocalStorage("theme", "dark");
    } else {
      setLocalStorage("theme", "light");
    }
  };
  //Fullscreen Window
  const handleFullscreen = () => {
    document.documentElement.requestFullscreen();
  };
  //Exit Fullscreen Window
  const handleExitFullScreen = () => {
    document.exitFullscreen();
  };
  //handle responsive search form
  const handleSubmitResponsiveForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    inputRef.current?.click();
  };
  //handle main menu
  const handleMenuBtn = () => {
    if (menu.isShowMainMenu && menu.isShowSubMenu) {
      handleMenu("close", true, false, menu.activeItem);
    } else if (!menu.isShowMainMenu && !menu.isShowSubMenu) {
      handleMenu("open", true, false, menu.activeItem);
    } else if (
      menu.state === "open" &&
      menu.isShowMainMenu &&
      !menu.isShowSubMenu
    ) {
      handleMenu("open", true, true, menu.activeItem);
    } else if (
      menu.state === "close" &&
      menu.isShowMainMenu &&
      !menu.isShowSubMenu
    ) {
      handleMenu("close", false, false, menu.activeItem);
    }
  };
  //handleResponsiveMenuBtn
  const handleResponsiveMenuBtn = () => {
    if (menu.isShowMainMenu) {
      handleMenu("close", false, false, menu.activeItem);
    } else {
      handleMenu("open", true, false, menu.activeItem);
    }
  };
  return (
    <header className="sticky top-0 z-1 flex h-[72px] w-full items-center justify-between bg-light-foreground px-3 shadow-light lg:px-6 dark:bg-dark-foreground dark:shadow-dark">
      <div className="flex items-center gap-3 lg:hidden">
        <button
          id="responsive-menu-icon"
          className="flex h-4 w-4 cursor-pointer items-center justify-center"
          onClick={handleResponsiveMenuBtn}
        >
          <span className="menu-icon h-[1px] w-4 bg-light-primary opacity-75 dark:bg-dark-primary"></span>
        </button>
        <input
          type="checkbox"
          id="responsive-searchform"
          className="peer/seaechForm"
          hidden
        />
        <label
          ref={inputRef}
          htmlFor="responsive-searchform"
          className="hoverable-text"
        >
          <i className="simple-icon-magnifier before:text-sm before:font-bold"></i>
        </label>
        <form
          onSubmit={handleSubmitResponsiveForm}
          className="absolute left-0 top-0 z-10 hidden h-full w-full items-center bg-light-foreground px-3 peer-checked/seaechForm:flex dark:bg-dark-foreground"
        >
          <input
            placeholder="Search..."
            className="grow bg-transparent text-light-secondary outline-hidden rtl:text-sm dark:text-dark-secondary"
          />
          <button type="submit" className="hoverable-text">
            <i className="simple-icon-magnifier"></i>
          </button>
        </form>
      </div>

      <div className="flex items-center gap-4 ltr:mr-auto ltr:pr-4 rtl:ml-auto rtl:pl-4">
        <button
          id="menu-icon"
          className="hidden h-4 items-center gap-[2px] lg:flex"
          onClick={handleMenuBtn}
        >
          <span
            className={`menu-icon h-[1px] w-4 bg-light-primary ${menu.isShowMainMenu ? "opacity-75" : "opacity-35"} transition-all dark:bg-dark-primary`}
          ></span>
          <span
            className={`menu-icon h-[1px] w-2 bg-light-primary ${menu.isShowSubMenu ? "opacity-75" : "opacity-35"} transition-all dark:bg-dark-primary`}
          ></span>
        </button>

        <form className="hidden rounded-full bg-light-bg p-2 lg:block dark:bg-dark-bg">
          <input
            placeholder="Search..."
            className="border-0 bg-transparent outline-hidden px-2"
          />
          <span className="text-light-separator dark:text-dark-separator inline-flex items-center justify-center text-sm">
            <i className="simple-icon-magnifier"></i>
          </span>
        </form>
        <Link
          to="#"
          className="hidden mx-3 lg:mx-0 text-xs rounded-3xl border border-current px-4 py-2 text-light-bluenavy-100 transition-all duration-300 hover:border-light-bluenavy-100 hover:bg-light-bluenavy-100 hover:text-light-foreground md:block dark:text-dark-bluenavy-100 dark:hover:border-dark-bluenavy-100 dark:hover:bg-dark-bluenavy-100 dark:hover:text-dark-foreground"
        >
          BUY
        </Link>
      </div>

      <Link
        to="/"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img
          src="./images/logos/black.svg"
          alt=""
          className="hidden w-[8vw] min-w-[120px] 2xs:block dark:hidden"
        />
        <img
          src="./images/logos/mobile.svg"
          alt=""
          className="w-[6vw] min-w-[25px] 2xs:hidden"
        />
        <img
          src="./images/logos/white.svg"
          alt=""
          className="hidden w-[8vw] min-w-[120px] dark:2xs:block"
        />
      </Link>

      <div className="grow-1 flex items-center justify-end gap-4">
        <div className="group/tooltip relative hidden sm:block">
          <Switch
            onChange={handleChangeTheme}
            className="peer-checked/switch bg-light-separator text-[#fff] dark:bg-transparent dark:text-dark-bluenavy-100"
          />
          <div className="tooltip drak:after:content-['Light_Mode'] absolute top-1/2 hidden h-[2.2rem] w-auto -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-md border border-light-separator bg-light-foreground px-[5px] py-0 text-[12px] after:text-light-primary after:content-['Dark_Mode'] group-hover/tooltip:flex ltr:right-[calc(100%+10px)] rtl:left-[calc(100%+10px)] dark:border-dark-separator dark:bg-dark-foreground dark:after:text-dark-primary">
            <span className="absolute z-1 h-[0.6rem] w-[0.6rem] rounded-[0.1rem] border-b border-l border-light-separator bg-light-foreground ltr:left-[65px] ltr:rotate-[225deg] rtl:left-[-5px] rtl:rotate-45 dark:border-dark-separator dark:bg-dark-foreground"></span>
          </div>
        </div>

        <div className="relative hidden sm:block">
          <input
            type="checkbox"
            className="peer/menu"
            id="iconMenuButton"
            hidden
          />
          <label
            className="backdrop peer-checked/menu:active-backdrop flex items-center"
            htmlFor="iconMenuButton"
          >
            <i className="simple-icon-grid hoverable-text"></i>
          </label>
          <div className="absolute top-10 hidden w-52 grid-cols-2 gap-4 rounded-lg border border-light-primary/15 bg-light-input-bg p-5 peer-checked/menu:z-1001 peer-checked/menu:grid ltr:right-0 rtl:left-0 dark:border-dark-primary/15 dark:bg-dark-input-bg">
            {menuListItem.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="flex flex-col items-center text-[#6d6d6d] transition-all duration-300 hover:text-light-bluenavy-100 dark:text-[#c2c2c2] dark:hover:text-dark-bluenavy-100"
              >
                <i className={`${item.icon}`}></i>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative">
          <input
            type="checkbox"
            id="notificationButton"
            className="peer/notification"
            hidden
          />
          <label
            className="backdrop peer-checked/notification:active-backdrop relative flex items-center"
            htmlFor="notificationButton"
          >
            <i className="simple-icon-bell hoverable-text"></i>
            <span className="count absolute bottom-full left-1/2 flex h-4 w-5 items-center justify-center rounded-full border border-light-bluenavy-100 p-1 text-[10px] text-light-bluenavy-100 dark:border-dark-bluenavy-100 dark:text-dark-bluenavy-100">
              3
            </span>
          </label>
          <div className="scrollbar dark:scrollbar-dark absolute top-10 hidden h-64 w-64 flex-col overflow-auto rounded-lg border border-light-primary/15 bg-light-input-bg p-3 peer-checked/notification:z-1001 peer-checked/notification:flex ltr:right-0 rtl:left-0 dark:border-dark-primary/15 dark:bg-dark-input-bg">
            {Array(5)
              .fill("")
              .map((item, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <div className="flex items-center gap-3">
                    <img
                      src="./images/profiles/l-2.jpg"
                      alt=""
                      className="h-12 w-12 rounded-full"
                    />
                    <Link to="#" className="flex flex-col">
                      <p className="text-light-primary dark:text-dark-primary">
                        Joisse Kaycee just sent a new comment!
                      </p>
                      <p className="text-light-muted dark:text-dark-muted">
                        09.04.2018 - 12:45
                      </p>
                    </Link>
                  </div>
                  <hr className="my-2 w-[80%] border-light-separator dark:border-dark-separator" />
                </div>
              ))}
          </div>
        </div>

        <button className="hoverable-text hidden cursor-pointer sm:flex items-center">
          <i
            className="simple-icon-size-fullscreen"
            id="fullscreen"
            onClick={handleFullscreen}
          ></i>
          <i
            className="simple-icon-size-actual hidden"
            id="exit-fullScreen"
            onClick={handleExitFullScreen}
          ></i>
        </button>

        <div className="relative">
          <input
            type="checkbox"
            id="profile-menu"
            hidden
            className="peer/profile"
          />
          <label
            htmlFor="profile-menu"
            className="backdrop peer-checked/profile:active-backdrop"
          >
            <span className="flex cursor-pointer items-center justify-between gap-2">
              <span className="hidden text-[#878787] dark:text-[#dcdcdc]">
                Sarah Kortney
              </span>

              <img
                alt="Profile Picture"
                src="./images/profiles/l-1.jpg"
                className="size-7 rounded-full"
              />
            </span>
          </label>

          <ul className="absolute top-10 hidden w-36 flex-col overflow-hidden rounded-lg border border-light-primary/15  bg-light-input-bg *:p-1 *:px-3 *:text-sm *:text-light-primary *:hover:bg-light-bg peer-checked/profile:z-1001 peer-checked/profile:flex ltr:right-0 rtl:left-0 dark:border-dark-primary/15  dark:bg-dark-input-bg dark:*:text-dark-primary dark:*:hover:bg-dark-bg">
            <li className="">
              <Link to="#">Account</Link>
            </li>
            <li>
              <Link to="#">Features</Link>
            </li>
            <li>
              <Link to="#">History</Link>
            </li>
            <li>
              <Link to="#">Support</Link>
            </li>
            <li>
              <Link to="#">Sign out</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
