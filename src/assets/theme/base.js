import { lighten, darken } from 'polished';

// only used to control major color
export const baseMajorColor = '#61dafb';

// only used to control minor color
export const baseMinorColor = '#f84e57';

// only used to control plain color
export const basePlainColor = '#f7f7f7';

// only used to control success color
export const baseSuccessColor = '#07c160';

// only used to control info color
export const baseInfoColor = '#2196f3';

// only used to control danger color
export const baseDangerColor = '#c00';

// only used to control warning color
export const baseWarningColor = '#fa5151';

// only used to control disabled color
export const baseDisabledColor = '#ccc';

// light mode - 亮色模式
const LIGHT_MODE = 'light';
// dark mode - 暗色模式
const DARK_MODE = 'dark';
// default mode: normal - 默认模式：normal
export const MODE = 'normal';
export const getModeColor = (mode, color) => {
  switch (mode) {
    case LIGHT_MODE:
      return lighten(0.1, color);
    case DARK_MODE:
      return darken(0.1, color);
    default:
      return color;
  }
};
// styled-components length unit - 长度单位
export const scpx = (number) => `${number}px`;
