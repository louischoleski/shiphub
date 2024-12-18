import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './Input.styled';
import Illustration from '../Illustration';

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

const Input: React.FC<IInputProps> = ({
    name,
    value, 
    label, 
    setValue, 
    placeholder,
    type = EInputTypes.TEXT, 
}) => {
    const hasLabel = React.useMemo(() => (
        label && label.length
    ), [label]);

    const onChangeText = (keyValue: string) => setValue(keyValue, name);

    const [ hasIcon, secureTextEntry ] = React.useMemo(() => {
        let [ showIcon, showSecureTextEntry ] = [ false, false ];

        switch (type) {
            case EInputTypes.TEXT:
                showIcon = false
                break;
            case EInputTypes.DATE:
            case EInputTypes.EMAIL:
            case EInputTypes.PHONE:
            case EInputTypes.SEARCH:
                showIcon = true;
                break;
            case EInputTypes.PASSWORD:
                showIcon = true;
                showSecureTextEntry = true;
                break;
            default:
                showIcon = false;
        }

        return [ showIcon, showSecureTextEntry ];
    }, [type]);

    return (
        <View style={styles.root}>
            {hasLabel && (
               <Text style={styles.label}>
                    {label}
               </Text> 
            )}
            <View style={styles.container}>
                {hasIcon && (
                    <View style={styles.icon}>
                        <Illustration.Icon
                            name={DEFAULT_INPUT_ICONS[type]}
                        />
                    </View>
                )}
                <TextInput 
                    value={value}
                    placeholder={placeholder} 
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    style={[ styles.input, hasIcon ? styles.inputIcon : null]} 
                />
            </View>
        </View>
    );
}

export default Input;
