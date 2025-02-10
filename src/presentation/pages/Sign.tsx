import UiSign from "../authentication/UiSign";
import UiVerifyCode from "../authentication/UiVerifyCode";

export default function Sign() {
  return (
    <div className="h-screen w-full lg:flex">
      <div className="relative z-10 h-[18vh] w-full overflow-hidden rounded-b-4xl bg-[url(./images/login/bg-auth.png)] bg-cover bg-center bg-no-repeat lg:h-full lg:w-[50%] ltr:lg:rounded-tr-4xl ltr:lg:rounded-bl-none rtl:lg:rounded-tl-4xl rtl:lg:rounded-br-none rtl:lg:rounded-bl-4xl">
        <span className="hidden h-full w-full bg-linear-[#0006,#0006] dark:block"></span>
      </div>
      <div className="relative h-[82vh]  lg:h-full lg:w-[50%] overflow-hidden">
        <UiSign />
        <UiVerifyCode />
      </div>
    </div>
  );
}
