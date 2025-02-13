import AddRule from "../Firewall/AddRule";
import RolesManagementTable from "../Firewall/RolesManagementTabel";
import DropDownMenu from "../Firewall/shared/DropDownMenu";
import Filter from "../Firewall/shared/Filter";

export default function FirewallRolesManagement() {
  return (
    <div className="@container/RolesFirewall border px-4">
      <div className="my-3 flex w-full flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2>Firewall</h2>
          <div className="flex flex-col gap-2">
            <button className="border rounded-full py-1">Add Rule</button>
            <DropDownMenu label={<span className="py-1">Apply</span>} id="dropdown-applyItem">
              <ul>
                <li>Discard</li>
              </ul>
            </DropDownMenu>
          </div>
        </div>
        <Filter className="self-end @5xl/RolesFirewall:hidden" />
      </div>
      <RolesManagementTable />
      <AddRule/>
    </div>
  );
}
