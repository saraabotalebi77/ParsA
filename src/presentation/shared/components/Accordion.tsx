import { ReactNode, useState } from "react";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <div>
      <div
        className="flex gap-2 items-center p-2 hoverable-text opacity-70 dark:opacity-50 "
        onClick={() => {
          console.log("slm");
          setIsOpen(!isOpen);
        }}
      >
        
        <span
          className={`flex justify-center items-center w-4 h-4 ${isOpen ? "ltr:-rotate-45 rtl:rotate-45" : "rtl:-rotate-45 ltr:rotate-45"} transition-transform duration-500 after:w-[10px] after:h-[10px] after:border-e-2 after:border-b-2 after:border-current`}
        >

        </span>
        <span className="font-light">{title}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-screen" : "max-h-0"}`}
      >
        {children}
      </div>
    </div>
  );
}
