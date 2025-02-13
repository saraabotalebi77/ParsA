
export default function SortIcon({className}:{className?:string}) {
  return (
    <div className={`${className}`}>
      <span className="arrow-icon rotate-180 text-light-text dark:text-dark-text"></span>
      <span className="arrow-icon text-light-muted dark:text-dark-muted"></span>
    </div>
  );
}
