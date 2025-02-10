import RoutesApp from "@/Routes";
import { Suspense, useEffect } from "react";
import { getLocalStorage } from "./shared/utils/localStorage";
import { useAppSelector } from "@/redux/hooks";

export default function App() {
  const lang = useAppSelector((state) => state.bilingual.lang);

  //change language and direction for first time
  useEffect(() => {
    let theme = "light";
    if (getLocalStorage("theme") == "dark") {
      theme = "dark";
    }
    document.documentElement.className = theme;
    document.documentElement.dir = lang === "En" ? "ltr" : "rtl";
  }, []);

  return (
    <Suspense fallback={"loading"}>
      <RoutesApp />
    </Suspense>
  );
}
