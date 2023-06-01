import Link from 'next/link';
import { FC } from 'react';

export interface INavItem {
  name: string | JSX.Element;
  href?: any;
}

const NavItem: FC<INavItem> = ({ name, href }) => {
  return (
    <li className='hover:text-white transition-all duration-200 cursor-pointer'>
      {name}
    </li>
  );
};

export default NavItem;
