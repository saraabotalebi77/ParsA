import Contacts from "../chat/Contacts";
import Conversation from "../chat/Conversation";

export default function Chat() {
  return <main className="h-[calc(100vh-72px)] w-full flex">
    <Conversation/>
    <Contacts/>

  </main>;
}
