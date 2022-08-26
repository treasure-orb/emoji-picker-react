import * as React from 'react';
import './Body.css';
import { EmojiList } from './EmojiList';
import { useRef } from 'react';
import { useActiveCategoryScrollDetection } from '../../hooks/useActiveCategoryScrollDetection';
import { useOnScroll } from '../../hooks/useOnScroll';

export function Body() {
  const bodyRef = useRef<null | HTMLDivElement>(null);

  useActiveCategoryScrollDetection(bodyRef);
  useOnScroll(bodyRef);

  return (
    <div className="epr-body" ref={bodyRef}>
      <EmojiList />
    </div>
  );
}
