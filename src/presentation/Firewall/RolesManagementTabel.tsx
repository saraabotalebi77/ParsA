import DropDownMenu from "./shared/DropDownMenu";
import SortIcon from "./shared/SortIcon";

export default function RolesManagement() {
  return (
    <table className="w-full">
      <thead>
        <tr className="ltr:*:text-left rtl:*:text-right">
          <th></th>
          <th>
            <span className="flex items-center gap-1">
              <SortIcon className="hidden @5xl/RolesFirewall:inline-flex" />
              <span>ID</span>
            </span>
          </th>
          <th>
            <span className="flex items-center gap-1">
              <SortIcon className="hidden @5xl/RolesFirewall:inline-flex" />
              <span>Name</span>
            </span>
          </th>
          <th className="hidden @lg/RolesFirewall:table-cell">
            <span className="flex items-center gap-1">
              <SortIcon className="hidden @5xl/RolesFirewall:inline-flex" />
              <span>Source</span>
            </span>
          </th>
          <th className="hidden @2xl/RolesFirewall:table-cell">
            <span className="flex items-center gap-1">
              <SortIcon className="hidden @5xl/RolesFirewall:inline-flex" />
              <span>Destination</span>
            </span>
          </th>
          <th className="hidden @5xl/RolesFirewall:table-cell">
            <span className="flex items-center gap-1">
              <SortIcon className="hidden @5xl/RolesFirewall:inline-flex" />
              <span>Protocol</span>
            </span>
          </th>
          <th className="hidden @5xl/RolesFirewall:table-cell">
            <span className="flex items-center gap-1">
              <SortIcon className="hidden @5xl/RolesFirewall:inline-flex" />
              <span>Action</span>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src="/images/firewall/drag-drop.svg" alt="" />
          </td>
          <td>1</td>
          <td>google block</td>
          <td className="hidden @lg/RolesFirewall:table-cell">
            <p className="w-36 single-line">Customer service (Single)</p>
            <p className="w-36 single-line">Network Port Single 1</p>
          </td>
          <td className="hidden @2xl/RolesFirewall:table-cell">
            <p className="w-36 single-line">Customer service (Single)</p>
            <p className="w-36 single-line">Network Port Single 1</p>
          </td>
          <td className="hidden @5xl/RolesFirewall:table-cell">tcp</td>
          <td className="hidden @5xl/RolesFirewall:table-cell">deny</td>
          <td className="hidden @5xl/RolesFirewall:table-cell">
            <DropDownMenu
              label={
                <span className="w-full py-[5px] text-center">disable</span>
              }
              id="dropdown-FirewallRuleItem"
            >
              <ul>
                <li>
                  <i className="simple-icon-pencil"></i>
                  <span>edit</span>
                </li>
                <li>
                  <i className="simple-icon-trash"></i>
                  <span>delete</span>
                </li>
              </ul>
            </DropDownMenu>
          </td>
          <td className="@5xl/RolesFirewall:hidden">
            <button>
              <i className="simple-icon-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
