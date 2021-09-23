import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/outline";
// import { VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";
const contacts = [
  {
    id: 1,
    src: "https://links.papareact.com/f0p",
    name: "James Bond",
  },
  {
    id: 2,
    src: "https://links.papareact.com/f0p",
    name: "James Bond",
  },
  {
    id: 3,
    src: "https://links.papareact.com/f0p",
    name: "James Bond",
  },
  {
    id: 4,
    src: "https://links.papareact.com/f0p",
    name: "James Bond",
  },
  {
    id: 5,
    src: "https://links.papareact.com/f0p",
    name: "James Bond",
  },
  {
    id: 6,
    src: "https://links.papareact.com/f0p",
    name: "James Bond",
  },
];

function Widgets() {
  return (
    <div className=''>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
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
