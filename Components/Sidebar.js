import { useSession } from "next-auth/client";
import SidebarRow from "./SidebarRow";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  ClockIcon,
} from "@heroicons/react/solid";
import {
  DesktopComputerIcon,
  CalendarIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UserIcon} title="friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
