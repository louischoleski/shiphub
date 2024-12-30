export interface ITabOption {
    key: string;
    component: React.ReactNode;
}

export interface ITabComponentProps {
    defaultTab?: string;
    options: ITabOption[];
    onTabSelect?: (key: string) => void;
}
