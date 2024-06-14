'use client';
import React from 'react';
import Link from 'next/link';
import HomeIcon from '../assets/icons/home.svg';
import SearchIcon from '../assets/icons/search.svg';
import FolderopenIcon from '../assets/icons/folder_open.svg';
import CodemapIcon from '../assets/icons/codemap.svg';
import DiagramsIcon from '../assets/icons/diagrams.svg';
import RepositoriesIcon from '../assets/icons/repositories.svg';
import AdminIcon from '../assets/icons/admin.svg';
import AugoorbrandIcon from '../assets/icons/augoor_brand.svg';

type NavLink = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
};

const navLinks: NavLink[] = [
  { icon: HomeIcon, path: '/' },
  { icon: SearchIcon, path: '/search' },
  { icon: FolderopenIcon, path: '#!' },
  { icon: CodemapIcon, path: '/codemap' },
  { icon: DiagramsIcon, path: '/visual-explorer' },
  { icon: RepositoriesIcon, path: '/repositories' },
  { icon: AdminIcon, path: '/admin' },
];

const NavBar: React.FC = () => {
  return (
    <>
    <div className="bg-gray-800 h-screen border-r border-gray-700">
      <div className='px-5 py-4 flex align-center border-b border-gray-600'>
        <AugoorbrandIcon />
      </div>
      <div className="mt-2">
        {navLinks.map((link) => (
          <div key={link.path} className='px-0.5 py-3'>
            <Link href={link.path} className="text-white hover:text-gray-400 flex justify-center">
              <link.icon className="w-6 h-6" />
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default NavBar;
