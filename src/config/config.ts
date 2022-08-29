import { EmojiClickData } from './../hooks/useMouseDownHandlers';
import { SkinTones } from '../data/skinToneVariations';
import { defaultOnClickHandler } from '../hooks/useMouseDownHandlers';
import {
  CategoriesConfig,
  baseCategoriesConfig,
  mergeCategoriesConfig
} from './categoryConfig';

export function mergeConfig(userConfig: PickerConfig = {}) {
  const categories = mergeCategoriesConfig(userConfig.categories);
  return {
    ...basePickerConfig(),
    ...userConfig,
    categories
  };
}

export function basePickerConfig(): PickerConfigInternal {
  return {
    searchPlaceHolder: 'Search',
    defaultSkinTone: SkinTones.NEUTRAL,
    skinTonesDisabled: false,
    autoFocusSearch: true,
    emojiStyle: EmojiStyle.APPLE,
    categories: baseCategoriesConfig,
    onEmojiClick: defaultOnClickHandler,
    showPreview: true
  };
}

export type PickerConfigInternal = {
  searchPlaceHolder: string;
  defaultSkinTone: SkinTones;
  skinTonesDisabled: boolean;
  autoFocusSearch: boolean;
  emojiStyle: EmojiStyle;
  categories: CategoriesConfig;
  onEmojiClick: (event: React.MouseEvent, emoji: EmojiClickData) => void;
  showPreview: boolean;
};

export type PickerConfig = Partial<PickerConfigInternal>;

export enum EmojiStyle {
  NATIVE = 'native',
  APPLE = 'apple',
  TWITTER = 'twitter',
  GOOGLE = 'google',
  FACEBOOK = 'facebook'
}
