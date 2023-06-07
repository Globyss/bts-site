'use client';
import { useSession } from 'next-auth/react';
import AsideNavItem from './AsideNavItem';

const Aside = () => {
  const { data: session } = useSession();
  return (
    <>
      {session && session.user ? (
        <aside className='px-3 shrink-0 basis-1/3'>
          <nav className='bg-white/80 rounded-2xl p-3 border-blue-400 border-2'>
            <ul className='flex flex-col font-medium'>
              <AsideNavItem name='Руководство' />
              <AsideNavItem name='Группа комплектования и подготовки кадров' />
              <AsideNavItem name='Диспетчерская служба' />
              <AsideNavItem name='Производственно-технический отдел' />
              <AsideNavItem name='Планово-экономеческая группа' />
              <AsideNavItem name='Бухгалтерия' />
              <AsideNavItem name='Группа материально-технических ресурсов' />
              <AsideNavItem name='Служба АСУ' />
              <AsideNavItem
                name='Отдел надёжности, охраны труда, пожарной, промышленной и
						радиационной безопасности'
              />
              <AsideNavItem name='Отдел капитального строительства' />
              <AsideNavItem name='Служба ТАИ, наладки и испытаний' />
              <AsideNavItem name='Служба сбыта тепловой энергии' />
              <AsideNavItem name='Абонентская служба' />
              <AsideNavItem name='Служба ремонтов' />
              <AsideNavItem name='Автотранспортный участок' />
              <AsideNavItem name='Район тепловых сетей' />
              <AsideNavItem name='Брестская ТЭЦ' />
              <AsideNavItem name='Котлотурбинный цех' />
              <AsideNavItem name='Электротехнический цех' />
              <AsideNavItem name='Восточная районная котельная №1' />
              <AsideNavItem name='Восточная районная котельная №2' />
              <AsideNavItem name='Южная районная котельная' />
              <AsideNavItem name='Социально-бытовой комплекс' />
              <AsideNavItem name='Профсоюз' />
              <AsideNavItem name='Общий ресурс' />
            </ul>
          </nav>
        </aside>
      ) : (
        ''
      )}
    </>
  );
};

export default Aside;
