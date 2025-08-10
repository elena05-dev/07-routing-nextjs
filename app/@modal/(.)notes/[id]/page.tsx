import { fetchNoteById } from '@/lib/api';
import NoteModalClient from '@/components/NoteModalClient';

type PageModalNotesProps = {
  params: { id: string };
};

export default async function NoteModal({ params }: PageModalNotesProps) {
  const { id } = params;
  if (id === 'filter') {
  }
  console.log('Modal id:', id);

  const note = await fetchNoteById(id);

  return <NoteModalClient note={note} />;
}
