import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      body: string;
      lightBody: string;
      asideBackground: string;
      text: string;
      inputBorder: string;
      textareaBackground: string;
      buttonTextColorOutlined: string;
      questionBackground: string;
      questionHighlight: string;
      questionAwnswered: string;
    };
  }
}
