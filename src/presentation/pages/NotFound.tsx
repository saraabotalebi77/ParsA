import AuthLayout from "../authentication/AuthLayout";
import { Link } from "react-router";
export default function NotFound() {
  return (
    <AuthLayout>
      <>
        <p className="lg:text-xlg text-lg">MAGIC IS IN THE DETAILS</p>

        <p className="mt-2 text-sm lg:text-base">Yes, it is indeed!</p>
      </>
      <div className="flex flex-col items-center">
        <h6 className="mb-5 mt-7 text-light-primary dark:text-dark-primary text-base text-center">Ooops... looks like an error occurred!</h6>
        <p className=" text-light-muted dark:text-dark-muted text-sm">Error code</p>
        <p className="font-semibold mt-2 text-light-primary dark:text-dark-primary text-4xl sm:text-8xl ">404</p>
        <Link to="" className="text-sm btn-primary mt-7">GO BACK HOME</Link>
      </div>
    </AuthLayout>
  );
}
