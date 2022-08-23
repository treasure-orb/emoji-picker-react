import * as React from 'react';
import categories from '../../dataUtils/categories';
import emojisByCategory from '../../dataUtils/emojisByCategory';
import { EmojiCategory } from './EmojiCategory';
import './EmojiList.css';

export function EmojiList() {
  return (
    <ul className="epr-emoji-list">
      {categories.map(category => (
        <EmojiCategory
          category={category}
          key={category}
          emojis={emojisByCategory(category)}
        />
      ))}
    </ul>
  );
}
