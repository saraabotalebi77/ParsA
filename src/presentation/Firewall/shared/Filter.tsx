import SortIcon from "./SortIcon";
export default function Filter({className}:{className?:string}) {
  return (
    <div className={`${className} relative`}>
      <input type="checkbox" id="filter" hidden className="peer/filter" />
      <label htmlFor="filter" className="flex justify-center items-center gap-1 border  backdrop peer-checked/filter:active-backdrop">
        <img src="/images/firewall/filter.svg" alt="" className="w-4 h-4" />
        <span className="cursor-pointer">sorted by</span>
      </label>
      <ul className="hidden peer-checked/filter:block absolute top-[calc(100%+5px)] z-1001 rtl:left-0 ltr:right-0 *:flex *:items-center *:gap-2 *:py-1 *:px-2 *:cursor-pointer shadow-light bg-[#fff]">
        <li>
          <SortIcon className="inline-flex" />
          <span>ID</span>
        </li>
        <li>
          <SortIcon className="inline-flex" />
          <span>Name</span>
        </li>
        <li>
          <SortIcon className="inline-flex" />
          <span>Source</span>
        </li>
        <li>
          <SortIcon className="inline-flex" />
          <span>Destination</span>
        </li>
        <li>
          <SortIcon className="inline-flex" />
          <span>Protocol</span>
        </li>
        <li>
          <SortIcon className="inline-flex" />
          <span>Action</span>
        </li>
      </ul>
    </div>
  );
}
