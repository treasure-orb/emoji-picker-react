import { usePickerConfig } from '../components/context/PickerConfigContext';
import { isSystemDarkTheme } from '../DomUtils/isDarkTheme';
import {
  EmojiClickData,
  EmojiStyle,
  SkinTones,
  SuggestionMode,
  Theme,
} from '../types/exposedTypes';

import { CategoriesConfig } from './categoryConfig';

export function useSearchPlaceHolderConfig(): string {
  const { searchPlaceHolder } = usePickerConfig();
  return searchPlaceHolder;
}

export function useDefaultSkinToneConfig(): SkinTones {
  const { defaultSkinTone } = usePickerConfig();
  return defaultSkinTone;
}

export function useSkinTonesDisabledConfig(): boolean {
  const { skinTonesDisabled } = usePickerConfig();
  return skinTonesDisabled;
}

export function useEmojiStyleConfig(): EmojiStyle {
  const { emojiStyle } = usePickerConfig();
  return emojiStyle;
}

export function useAutoFocusSearchConfig(): boolean {
  const { autoFocusSearch } = usePickerConfig();
  return autoFocusSearch;
}

export function useCategoriesConfig(): CategoriesConfig {
  const { categories } = usePickerConfig();
  return categories;
}

export function useOnEmojiClickConfig(): (
  emoji: EmojiClickData,
  event: MouseEvent
) => void {
  const { onEmojiClick } = usePickerConfig();
  return onEmojiClick;
}

export function useShowPreviewConfig(): boolean {
  const { showPreview } = usePickerConfig();
  return showPreview;
}

export function useThemeConfig(): Theme {
  const { theme } = usePickerConfig();

  if (theme === Theme.AUTO) {
    return isSystemDarkTheme() ? Theme.DARK : Theme.LIGHT;
  }

  return theme;
}

export function useSuggestedEmojisModeConfig(): SuggestionMode {
  const { suggestedEmojisMode } = usePickerConfig();
  return suggestedEmojisMode;
}

export function useLazyLoadEmojisConfig(): boolean {
  const { lazyLoadEmojis } = usePickerConfig();
  return lazyLoadEmojis;
}
