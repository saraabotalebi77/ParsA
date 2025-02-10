import React, { ReactNode } from "react";
import { Link } from "react-router";

export default function AuthLayout({ children }: { children: ReactNode[] }) {

  return (
    <main className="flex h-screen w-full items-center justify-center bg-[url('/images/login/balloon-lg.jpg')] bg-cover bg-center">
      <div className="flex w-[90%] flex-col overflow-hidden rounded-xl sm:w-4/5 lg:flex-row">
        <div className="bg-[url('/images/login/balloon.jpg')] bg-cover bg-no-repeat p-6 text-[#fff] sm:px-10 sm:py-12 md:p-12 lg:w-2/5 lg:py-14">
          {children[0]}
        </div>
        <div className="lg:px-18 flex flex-col bg-light-foreground p-6 sm:px-10 sm:py-12 md:p-12 lg:w-3/5 lg:py-14 dark:bg-dark-foreground">
          <Link to="/" className="mb-7 inline-block sm:mb-10 self-center">
            <img
              src="./images/logos/black.svg"
              alt=""
              className="w-[7vw] min-w-[100px] dark:hidden"
            />
            <img
              src="./images/logos/white.svg"
              alt=""
              className="hidden w-[7vw] min-w-[100px] dark:block"
            />
          </Link>
          {children[1]}
        </div>
      </div>
    </main>
  );
}
