/* eslint-disable no-undef */
import '@emotion/react';

export type themeId = 'grey' | 'primary' | 'secondary' | 'success' | 'error';

declare module '@emotion/react' {
  export interface Theme {
    [key in themeId]: {
      background: string;
      color: string;
      hoverBackground: string;
    };
  }
}
