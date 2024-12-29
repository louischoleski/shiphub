import React from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './ScreenView.styled';
import Illustration from '../Illustration';

export interface IScreenViewProps {
    ctaIcon?: string;
    withNav?: boolean;
    withHeader?: boolean;
    withWhiteBg?: boolean;
    onBackPress?: () => void;
    withoutSafeView?: boolean;
    children: React.ReactNode;
    onCTAPress?: () => void | null;
}

const ScreenView: React.FC<IScreenViewProps> = ({
    withoutSafeView = false,
    withWhiteBg = false,
    withHeader = false,
    onBackPress = null,
    onCTAPress = null,
    withNav = false,
    ctaIcon = 'target',
    children
}) => {
    const ViewWrapper = withoutSafeView ? View : SafeAreaView;

    return (
        <ViewWrapper style={[styles.container, withWhiteBg ? styles.withWhiteBg : null]}>
            {withHeader && (
                <View style={styles.headerContainer}>
                    {withNav && onBackPress ? (
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

                    {withNav && onCTAPress ? (
                        <TouchableOpacity 
                            onPress={onCTAPress} 
                            style={styles.placeholder}
                        >
                            <Illustration.Icon
                                name={ctaIcon}
                            />
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.placeholder} />
                    )}
                </View>
            )}
            {children}
        </ViewWrapper >
    );
};

export default ScreenView;
