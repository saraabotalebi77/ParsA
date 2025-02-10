export default function Conversation() {
  return (
    <div className="flex h-full grow flex-col">
      <div className="px-3 pt-3 md:px-6 md:pt-6 lg:px-12 lg:pt-12">
        <div className="mb-5 flex items-center gap-6">
          <img
            src="./images/profiles/l-1.jpg"
            alt=""
            className="h-12 w-12 rounded-full md:h-14 md:w-14"
          />
          <div className="flex flex-col gap-[2px]">
            <p className="text-sm text-light-primary md:text-base dark:text-dark-primary">
              Sarah Kortney
            </p>
            <p className="text-xs text-light-muted md:text-sm dark:text-dark-muted">
              Last seen today 01:24
            </p>
          </div>
        </div>
        <hr className="w-full border-light-separator dark:border-dark-separator" />
      </div>

      <div className="grow overflow-hidden px-3 pb-3 pt-3 md:px-6 md:pt-6 lg:px-12 lg:pt-12">
        <div className="scrollbar dark:scrollbar-dark flex h-full flex-col gap-8 overflow-auto">
          {Array(10)
            .fill("")
            .map((item,index) => (
              <div key={index} className="flex flex-col self-start rounded-xl bg-light-foreground p-3 text-light-separator-light shadow-light dark:bg-dark-foreground dark:text-dark-primary dark:shadow-dark">
                <span className="self-end text-xs text-light-muted dark:text-dark-muted">
                  09:25
                </span>
                <div className="flex gap-3">
                  <img
                    src="./images/profiles/l-1.jpg"
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="text-ligth-primary mb-4 text-light-primary dark:text-dark-primary">
                      Sarah Kortney
                    </p>
                    <p className="text-sm text-light-secondary dark:text-dark-secondary">
                      What do you think about our plans for this product launch?
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <form className="flex gap-2 bg-light-input-bg px-3 py-2 shadow-light md:px-6 md:py-3 lg:px-12 lg:py-6 dark:bg-dark-input-bg dark:shadow-dark">
        <input
          type="text"
          placeholder="say something"
          className="grow"
        />
        <button className="btn-outline-primary flex h-11 w-11 items-center justify-center">
          <i className="simple-icon-paper-clip"></i>
        </button>
        <button
          type="submit"
          className="btn-primary flex h-11 w-11 items-center justify-center p-0 rtl:rotate-180"
        >
          <i className="simple-icon-arrow-right text-sm font-bold"></i>
        </button>
      </form>
    </div>
  );
}
