import {
  HomeIcon,
  MapIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Map of links to display in the side navigation.
// If the application grows too big, this would be stored in a database.
const links = [
  { name: 'Home', href: 'https://safetyforwomen.org', icon: HomeIcon },
  {
    name: 'State Members',
    href: '/dashboard/',
    icon: MapIcon,
  },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-black-100 hover:text-black-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

