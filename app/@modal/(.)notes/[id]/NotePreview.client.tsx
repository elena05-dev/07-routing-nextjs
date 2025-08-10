'use client';

import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';
import { useRouter } from 'next/navigation';
import type { Note } from '@/types/note';

interface NotePreviewClientProps {
  note: Note;
}

export default function NoteModalClient({ note }: NotePreviewClientProps) {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  return (
    <Modal onClose={onClose}>
      <NotePreview note={note} />
    </Modal>
  );
}
