import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/outline";
// import { VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";
const contacts = [
  {
    id: 1,
    src: "https://i.pravatar.cc/150?img=65",
    name: "Polo Arwando",
  },
  {
    id: 2,
    src: "https://i.pravatar.cc/150?img=32",
    name: "Kili Soni",
  },
  {
    id: 3,
    src: "https://i.pravatar.cc/150?img=56",
    name: "Moha Bores",
  },
  {
    id: 4,
    src: "https://i.pravatar.cc/150?img=31",
    name: "Amanda rony",
  },
  {
    id: 5,
    src: "https://i.pravatar.cc/150?img=33",
    name: "ling Yu",
  },
  {
    id: 6,
    src: "https://i.pravatar.cc/150?img=61",
    name: "miki rokes",
  },
];

function Widgets() {
  return (
    <div className=''>
      <div className='flex justify-between items-center gap-8 text-gray-500 mb-5'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <SearchIcon className='h-6' />
          <DotsHorizontalIcon className='h-6' />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.id} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
