import { FC, InputHTMLAttributes, ReactNode } from "react";

interface PropsComponent extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  validation?: string;
  icon?: ReactNode;
}

const Input: FC<PropsComponent> = ({
  label,
  className,
  validation,
  icon,
  ...props
}) => {
  return (
    <div className={`${className} h-16`}>
      {label && <label className="text-sm">{label}</label>}
      <div className="w-full">
        <input
          type="text"
          {...props}
          className={`peer w-full p-2 text-light-text invalid:not-placeholder-shown:border-light-maroon-600 dark:text-dark-text dark:invalid:not-placeholder-shown:border-dark-maroon-600`}
        />
        {icon && (
          <span className="icon text-light-text dark:text-dark-text">
            {icon}
          </span>
        )}
        {validation && (
          <small
            className={`hidden items-center gap-1 text-light-maroon-600 peer-[&:not(:placeholder-shown):not(:focus):invalid]:flex dark:text-dark-maroon-600`}
          >
            <i className="simple-icon-exclamation text-[12px] font-bold"></i>
            {validation}
          </small>
        )}
      </div>
    </div>
  );
};

export default Input;
