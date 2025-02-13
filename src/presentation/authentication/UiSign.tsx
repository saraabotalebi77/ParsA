import React, { useState } from "react";
import Input from "../shared/components/Input";
import Bilingual from "../shared/components/Bilingual";
import { emailRegex, mobileRegex } from "../shared/utils/regex";
import { useAppDispatch } from "@/redux/hooks";
import { Verify } from "@/redux/features/authStepSlice";

export default function UiSign() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const handleLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.match(emailRegex) || inputValue.match(mobileRegex)) {
      dispatch(Verify());
    }
  };
  return (
    <div className="flex h-full w-full flex-col justify-between p-4">
      <Bilingual className="hidden lg:block" />

      <form
        className="group flex grow flex-col items-center justify-center gap-4"
        noValidate
        onSubmit={handleLoginForm}
      >
        <div className="mb-16 w-[32%] min-w-[200px]">
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
          className="auth-input my-6"
          placeholder="Mobile or Email"
          pattern="^(?:[a-zA-Z0-9\.\+\-\%_]{1,}[@]{1}[a-zA-Z0-9\.\-]{1,}[.]{1}[a-zA-Z]{2,})|(?:\+98|0|98)9\d{9}$"
          validation="invlid"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          icon={<i className="simple-icon-envelope"></i>}
        />
        <button
          type="submit"
          className="btn-primary mt-5 w-[75%] group-invalid:pointer-events-none group-invalid:opacity-70 xs:w-[50%]"
        >
          Sign in | up
        </button>
        <button
          type="button"
          className="btn-outline-primary hidden w-[50%] justify-center gap-1 lg:flex"
        >
          <img
            src="./images/login/Google-icon.png"
            alt="google"
            className="h-5 w-5"
          />
          <span>
            Continue With Google
          </span>
        </button>
        <div className="my-7 flex w-[80%] items-center gap-3 text-light-text xs:w-[50%] lg:hidden dark:text-dark-text">
          <hr className="grow" />
          <span>OR</span>
          <hr className="grow" />
        </div>
        <button className="lg:hidden">
          <img
            src="./images/login/Google-icon.png"
            alt="google"
            className="h-5 w-5"
          />
        </button>
      </form>

      <span className="mt-4 self-center text-xs text-light-muted dark:text-dark-muted">
        Created by Pars a 2025
      </span>
    </div>
  );
}
