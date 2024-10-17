export interface ApiMethodList{
    name: string;
    to: string;

}

export interface CodeList{
    id: string,
    subtitle: string,
    style: any,
    styleDark: any,
    code: any,
}

export interface ShowCodeProps {
    id: string;
    code: string;
    title: string;
    style: any;
    styleDark: any;
  }