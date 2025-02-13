import { ReactNode } from "react";

interface PropsComponent {
  label: string | ReactNode;
  children: ReactNode;
  className?: string;
  id:string;
}
export default function DropDownMenu({
  label,
  children,
  className,
  id
}: PropsComponent) {
  return (
    <div className={`${className} relative w-[120px] rounded-full border flex`}>
      <span className="flex w-[70%] grow items-center justify-center">
        {label}
      </span>
      <input
        type="checkbox"
        id={id}
        className={`peer`}
        hidden
      />
      <label
        htmlFor={id}
        className={`flex w-[30%] items-center justify-center backdrop peer-checked:active-backdrop `}
      >
        <span className="block h-0 w-0 border-t-4 border-r-4 border-l-4 border-[#131113] border-r-transparent border-l-transparent cursor-pointer"></span>
      </label>
      <div className={`absolute z-1001 top-[calc(100%+4px)] border rtl:left-0 ltr:right-0 bg-[#fff] hidden peer-checked:block`}>{children}</div>
    </div>
  );
}
