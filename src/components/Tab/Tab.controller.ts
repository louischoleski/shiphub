export interface ITabOption {
  key: string;
  component: React.ReactNode;
}

export interface ITabComponentProps {
  options: ITabOption[];
  onTabSelect?: (key: string) => void;
}
