import { fetchNoteById } from '@/lib/api';
import NoteModalClient from '@/components/NoteModalClient';

type PageModalNotesProps = {
  params: Promise<{ id: string }>;
};

export default async function NoteModal({ params }: PageModalNotesProps) {
  const { id } = await params;

  const note = await fetchNoteById(id);

  return <NoteModalClient note={note} />;
}
