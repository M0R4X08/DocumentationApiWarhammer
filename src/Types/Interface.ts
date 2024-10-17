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
    codeOutput?: any,
}

export interface ShowCodeProps {
    id: string;
    code: any;
    codeOutput?: any;
    title: string;
    style: any;
    styleDark: any;
}

export interface ShowCodeListProps {
    title: string;
    codeList: CodeList[];
}