import { Routes, Route } from "react-router";
import Main from "./presentation/pages/Main";
import Sign from "./presentation/pages/Sign";
import NotFound from "./presentation/pages/NotFound";
import Chat from "./presentation/pages/Chat";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="chat" element={<Chat/>}/>
      </Route>
      <Route path="/login" element={<Sign/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}
