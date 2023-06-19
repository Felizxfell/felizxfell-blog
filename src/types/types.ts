import { ReactNode } from "react";

export enum langs {
  es = "es",
  en = "en",
}

export interface PropsLang {
  lang: langs;
}

export interface PropsHome {
  params: PropsLang;
}

export interface ParamsRootLayout extends PropsHome {
  children: ReactNode;
}

export type PropsPath = {
  pathname: string;
};
