export enum EInputTypes {
    TEXT = 'TEXT',
    DATE = 'DATE',
    EMAIL = 'EMAIL',
    PHONE = 'PHONE',
    SEARCH = 'SEARCH',
    PASSWORD = 'PASSWORD',
}

export interface IInputProps {
    name: string;
    value: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    type: EInputTypes | string;
    setValue: (text: string, key?: string) => void;
}

export const DEFAULT_INPUT_ICONS = {
    [EInputTypes.EMAIL]: 'mail',
    [EInputTypes.PHONE]: 'call',
    [EInputTypes.DATE]: 'calendar',
    [EInputTypes.SEARCH]: 'search',
    [EInputTypes.PASSWORD]: 'lock',
};
