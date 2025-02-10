import { useState } from "react";

export default function Contacts() {
  const [listType, setListType] = useState("contacts");
  return (
    <>
      <input type="checkbox" id="contacts-list" className="peer/chat-menu-icon" hidden />
      <div className="fixed lg:relative flex w-72 flex-col rtl:-left-72 ltr:-right-72 rtl:peer-checked/chat-menu-icon:left-0 ltr:peer-checked/chat-menu-icon:right-0 lg:rtl:left-0 lg:ltr:right-0  bg-light-foreground shadow-light ltr:rounded-ss-2xl rtl:rounded-ss-2xl dark:bg-dark-foreground dark:shadow-dark">
        <label
          htmlFor="contacts-list"
          className="absolute top-7 z-10 flex h-7 w-7 cursor-pointer items-center justify-center bg-light-foreground text-light-secondary shadow-light lg:hidden ltr:-left-7 ltr:rounded-es-md ltr:rounded-ss-md rtl:-right-7 rtl:rounded-es-md rtl:rounded-ss-md dark:bg-dark-foreground dark:text-dark-secondary dark:shadow-dark"
        >
          <i className="simple-icon-options text-[#fff]"></i>
        </label>
        <div>
          <div className="mb-3 flex h-12 *:flex *:grow *:cursor-pointer *:items-center *:justify-center *:text-light-primary dark:*:text-dark-primary">
            <span
              onClick={() => setListType("message")}
              className={`${listType === "message" ? "contacts__active-list" : ""}`}
            >
              Messages
            </span>
            <span
              onClick={() => setListType("contacts")}
              className={`${listType === "contacts" ? "contacts__active-list" : ""}`}
            >
              Contacts
            </span>
          </div>
          <div className="mb-6 px-7">
            <input
              type="text"
              placeholder="search"
              className="w-full rounded-full border border-light-separator bg-light-input-bg px-4 py-2 outline-hidden focus:border-light-bluenavy-100 dark:border-dark-separator dark:bg-dark-input-bg dark:focus:border-dark-bluenavy-100"
            />
          </div>
        </div>
        <div className="scrollbar dark:scrollbar-dark grow overflow-auto px-7">
          {listType == "contacts" ? (
            <div>
              {Array(10)
                .fill("")
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 border-b border-light-separator-light py-3 dark:border-dark-separator-light"
                  >
                    <img
                      src="./images/profiles/l-1.jpg"
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col gap-[2px]">
                      <p className="hoverable-text text-sm md:text-base">
                        Sarah Kortney
                      </p>
                      <p className="text-xs text-light-muted md:text-sm dark:text-dark-muted">
                        Last seen today 01:24
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div>
              {Array(10)
                .fill("")
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 border-b border-light-separator-light py-3 dark:border-dark-separator-light"
                  >
                    <img
                      src="./images/profiles/l-1.jpg"
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                    <p className="hoverable-text text-sm md:text-base">
                      Sarah Kortney
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
