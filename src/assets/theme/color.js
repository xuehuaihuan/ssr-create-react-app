import { lighten, darken, rgba } from 'polished';
import {
  getModeColor,
  MODE,
  baseMajorColor,
  baseMinorColor,
  basePlainColor,
  baseSuccessColor,
  baseInfoColor,
  baseDangerColor,
  baseWarningColor,
  baseDisabledColor,
} from './base';

/* light color start - 亮色 开始 */
export const lightColor = '#fff';
/* light color end - 亮色 结束 */

/* dark color start - 暗色 开始 */
export const darkColor = '#000';
export const darkColorOpacity10 = rgba(darkColor, 0.1);
export const darkColorOpacity20 = rgba(darkColor, 0.2);
export const darkColorOpacity30 = rgba(darkColor, 0.3);
/* dark color end - 暗色 结束 */

/* major color start - 主色 开始 */
export const majorColor = getModeColor(MODE, baseMajorColor);
export const majorColorLight10 = lighten(0.1, majorColor);
export const majorColorLight33 = lighten(0.33, majorColor);
export const majorColorDark10 = darken(0.1, majorColor);
export const majorColorOpacity10 = rgba(majorColor, 0.1);
/* major color end - 主色 结束 */

/* minor color start - 次色 开始 */
export const minorColor = getModeColor(MODE, baseMinorColor);
export const minorColorDark10 = darken(0.1, minorColor);
/* minor color end - 次色 结束 */

/* minor color start - 次色 开始 */
export const plainColor = getModeColor(MODE, basePlainColor);
/* minor color end - 次色 结束 */

/* success color start - 成功色 开始 */
export const successColor = getModeColor(MODE, baseSuccessColor);
/* success color end - 成功色 结束 */

/* info color start - 信息色 开始 */
export const infoColor = getModeColor(MODE, baseInfoColor);
export const infoColorLight30 = lighten(0.3, infoColor);
/* info color end - 信息色 结束 */

/* danger color start - 危险色 开始 */
export const dangerColor = getModeColor(MODE, baseDangerColor);
/* danger color end - 危险色 结束 */

/* warning color start - 警告色 开始 */
export const warningColor = getModeColor(MODE, baseWarningColor);
export const warningColorLight30 = lighten(0.3, warningColor);
/* warning color end - 警告色 结束 */

/* disabled color start - 禁用色 开始 */
export const disabledColor = getModeColor(MODE, baseDisabledColor);
/* disabled color end - 禁用色 结束 */

/* general color start - 常规颜色/一般颜色 开始 */
export const generalColor1 = '#333';
export const generalColor2 = '#666';
export const generalColor3 = '#999';
export const generalColor4 = '#ccc';
export const generalColor5 = '#ddd';
export const generalColor6 = '#eee';
export const generalColor7 = '#969696';
export const generalColor8 = '#dcdcdc';
export const generalColor9 = '#f7f7f7';
export const generalColor10 = '#f0f0f0';
/* general color end - 常规颜色/一般颜色 结束 */

/* CSS keywords start - CSS关键字 开始 */
export const transparent = 'transparent';
export const currentColor = 'currentColor';
/* CSS keywords end - CSS关键字 结束 */
