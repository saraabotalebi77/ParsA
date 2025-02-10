import { useEffect, useState } from "react";
import Input from "./../shared/components/Input";
import { useAppSelector } from "@/redux/hooks";

export default function UiVerifyCode() {
  const [counter, setCounter] = useState(120);
  const step = useAppSelector(state=>state.authStep.stage);
  console.log(step) 

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
  }, [counter]);

  return (
    <div className={`absolute ${step=="login" ? "-top-full lg:top-0 rtl:-right-full ltr:-left-full" : "top-0 rtl:right-0 ltr:left-0"} transition-[top] rtl:lg:transition-[right] ltr:lg:transition-[left]  duration-300 flex h-full w-full overflow-hidden flex-col bg-light-bg p-4 lg:top-0 lg:h-full dark:bg-dark-bg`}>
      <form className="flex grow flex-col items-center justify-center gap-4">
        <div className="mb-14 w-[35%] min-w-[200px]">
          <img
            src="./images/logos/dark-logo.svg"
            className="hidden w-full dark:block"
          />
          <img
            src="./images/logos/light-logo.svg"
            className="w-full dark:hidden"
          />
        </div>

        <Input
          className="auth-input my-8"
          placeholder="Recieved code"
          icon={
            counter > 0 ? (
              <span>{formatTime(counter)}</span>
            ) : (
              <i className="simple-icon-reload cursor-pointer before:text-xs before:font-bold"></i>
            )
          }
        />
        <button className="text-light-light-text mt-5 flex w-[75%] justify-center gap-1 rounded-full bg-light-bg-btn py-[10px] font-bold text-dark-text xs:w-[50%] dark:bg-dark-bg-btn">
          Verify
        </button>
        <button className="hidden w-[50%] justify-center gap-1 rounded-full border border-light-bg-btn py-[10px] text-sm font-bold text-light-text lg:flex dark:border-hidden dark:bg-light-bg">
          Back
        </button>
        <div className="my-7 flex w-[80%] items-center gap-3 text-light-text xs:w-[50%] lg:hidden dark:text-dark-text">
          <hr className="grow" />
          <button>Back</button>
          <hr className="grow" />
        </div>
      </form>

      <span className="self-center text-xs text-light-muted dark:text-dark-muted">
        Created by Pars a 2025
      </span>
    </div>
  );
}
