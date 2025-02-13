import { Routes, Route, Navigate } from "react-router";
import Main from "./presentation/pages/Main";
import Sign from "./presentation/pages/Sign";

import Chat from "./presentation/pages/Chat";
import FirewallRolesManagement from "./presentation/pages/FirewallRolesManagement";
import UserSetting from "./presentation/pages/UserSetting";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Sign />} />
      <Route path="/" element={<Main />}>
        <Route path="chat" element={<Chat />} />
        <Route path="fwaas/rules/list" element={<FirewallRolesManagement />} />
        <Route path="user-setting" element={<UserSetting/>}/>
      </Route>
    </Routes>
  );
}
