import { fetchNoteById } from '@/lib/api';
import NoteModalClient from '@/components/NoteModalClient';

type PageModalNotesProps = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: PageModalNotesProps) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NoteModalClient note={note} />;
};

export default NotePreview;
