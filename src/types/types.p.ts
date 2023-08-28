import { ReactNode } from "react";

export enum langs {
  es = "es",
  en = "en",
}

export interface PropsLang {
  lang: langs;
}

export interface PropsDefault {
  params: PropsLang;
}

export interface ParamsRootLayout extends PropsDefault {
  children: ReactNode;
}

export type PropsPath = {
  pathname: string;
};

export enum ThemeQuill {
  snow = "snow",
  bubble = "bubble",
}
