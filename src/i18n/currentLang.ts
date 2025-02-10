import { getCookie } from "../presentation/shared/utils/cookie";

export default function getCurrentLang() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("lang") || getCookie("lang") || "Fa";
}
