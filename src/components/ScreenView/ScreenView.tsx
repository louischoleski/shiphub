import React from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './ScreenView.styled';
import Illustration from '../Illustration';

export interface IScreenViewProps {
    withNav?: boolean;
    withHeader?: boolean;
    withWhiteBg?: boolean;
    onBackPress?: () => void;
    withoutSafeView?: boolean;
    children: React.ReactNode;
}

const ScreenView: React.FC<IScreenViewProps> = ({
    onBackPress = () => null,
    withoutSafeView = false,
    withWhiteBg = false,
    withHeader = false,
    withNav = false,
    children
}) => {
    const ViewWrapper = withoutSafeView ? View : SafeAreaView;

    return (
        <ViewWrapper style={[styles.container, withWhiteBg ? styles.withWhiteBg : null]}>
            {withHeader && (
                <View style={styles.headerContainer}>
                    {withNav ? (
                        <TouchableOpacity 
                            onPress={onBackPress} 
                            style={styles.backButton}
                        >
                            <Illustration.Icon
                                name="arrow_back"
                            />
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.backButton} />
                    )}

                    <Illustration.Icon
                        name="brand"
                    />

                    <View style={styles.placeholder} />
                </View>
            )}
            {children}
        </ViewWrapper >
    );
};

export default ScreenView;
