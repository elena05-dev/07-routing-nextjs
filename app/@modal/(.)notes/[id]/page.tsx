import { fetchNoteById } from '@/lib/api';
import NoteModalClient from '@/app/@modal/(.)notes/[id]/NotePreview.client';

type PageModalNotesProps = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: PageModalNotesProps) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NoteModalClient note={note} />;
};

export default NotePreview;
