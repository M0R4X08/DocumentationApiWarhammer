export interface ApiMethodList{
    name: string;
    to: string;

}

export interface CodeList{
    id: string,
    subtitle: string,
    code: any,
    codeOutput?: any,
}

export interface ShowCodeProps {
    id: string;
    code: any;
    codeOutput?: any;
    title: string;

}

export interface ShowCodeListProps {
    title: string;
    codeList: CodeList[];
}
export interface ShowCodeOutPutProps {
    code: string;
}