import type { ReactNode } from 'react';
import css from './LayoutNotes.module.css';

type LayoutFilterProps = {
  children: ReactNode;
  sidebar: ReactNode;
  modal?: ReactNode;
};

export default function NotesLayout({
  children,
  sidebar,
  modal,
}: LayoutFilterProps) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <main className={css.notesWrapper}>{children}</main>
      {modal && <div className={css.modal}>{modal}</div>}
    </div>
  );
}
