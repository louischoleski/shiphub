export interface IOptions {
    key: string;
    name: string;
}

export interface INavPillProps {
    options: IOptions[];
    currentItem?: string;
    onChange: (selectedItem: string) => void;
}