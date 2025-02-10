import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSearchParams } from "react-router";
import { useTranslation } from "react-i18next";
import { setCookie } from "@/presentation/shared/utils/cookie";
import { Fa, En, Ar } from "@/redux/features/bilingualSlice";

export default function Bilingual({className}:{className:string}) {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.bilingual.lang);
  const { i18n } = useTranslation();
  const [, setSearchParams] = useSearchParams();

  //change language and direction
  const handleChangeLanguage = (language: string) => {
    setSearchParams({
      lang: language,
    });
    setCookie("lang", language, {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60),
    });
    if (language === "Fa") {
      dispatch(Fa());
    } else if (language === "En") {
      dispatch(En());
    } else {
      dispatch(Ar());
    }
    i18n.changeLanguage(language);
    document.documentElement.dir = language === "En" ? "ltr" : "rtl";
    (document.getElementById("input-lable") as HTMLLabelElement).click();
  };

  return (
    <div className={`${className} relative w-9 self-end font-nunito text-light-text dark:text-dark-text`}>
      <input
        type="checkbox"
        id="bilingual-menu"
        className="peer/bilingual"
        hidden
      />
      <label
        id="input-lable"
        htmlFor="bilingual-menu"
        className="backdrop flex items-center justify-between gap-2 peer-checked/bilingual:active-backdrop peer-checked/bilingual:*:last:rotate-225 rtl:flex-row-reverse"
      >
        <span>{lang}</span>
        <span className="h-2 w-2 rotate-45 border-r-2 border-b-2 border-current transition-transform duration-300"></span>
      </label>

      <ul className="absolute z-[1001] hidden w-full rounded-sm bg-light-bg shadow-light *:flex *:cursor-pointer *:items-center *:justify-center *:py-1 *:text-[13px] *:text-light-text peer-checked/bilingual:block *:hover:bg-light-maroon-400 dark:bg-dark-bg dark:shadow-dark dark:*:text-dark-text dark:*:hover:bg-dark-maroon-400">
        <li onClick={() => handleChangeLanguage("Fa")}>Fa</li>
        <li onClick={() => handleChangeLanguage("En")}>En</li>
        <li onClick={() => handleChangeLanguage("Ar")}>Ar</li>
      </ul>
    </div>
  );
}
