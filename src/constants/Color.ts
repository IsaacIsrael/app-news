export const Color = {
  BACKGROUND: '#F9F8FE',
  TEXT_DARK: '#20102F',
  PRIMARY: '#5EAA41',
  SECONDARY: '#B4A3EB',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  RED: '#F94646',
} as const;

export type Colors = keyof typeof Color;
