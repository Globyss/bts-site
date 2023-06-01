import { FC } from 'react';

export interface IAsideNavItem {
	name: string;
}

const AsideNavItem: FC<IAsideNavItem> = ({ name }) => {
	return (
		<li className="cursor-pointer py-0.5 transition-all duration-300 ease-out line-clamp-1 rounded hover:line-clamp-none hover:p-2 hover:bg-gradient-to-l from-blue-600/30 to-blue-600/80 hover:text-white">
			{name}
		</li>
	);
};

export default AsideNavItem;
