'use client';

import Link from 'next/link';
import css from './SidebarNotes.module.css';
const TAGS = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function SidebarNotes() {
  return (
    <ul className={css.menuList} style={{ paddingLeft: '1rem' }}>
      {TAGS.map((tag) => {
        const href = tag === 'All' ? '/notes/filter' : `/notes/filter/${tag}`;
        return (
          <li key={tag} className={css.menuItem}>
            <Link href={href} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
