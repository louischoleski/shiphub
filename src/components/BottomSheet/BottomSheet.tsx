import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, Dimensions, Modal, PanResponder, View } from 'react-native';

import styles from './BottomSheet.styled';

export interface IBottomSheetProps {
    visible: boolean;
    onDismiss?: () => void;
    withoutOverlay?: boolean;
    children: React.ReactNode;
}

const BottomSheet: React.FC<IBottomSheetProps> = ({
    children,
    visible = false,
    withoutOverlay = false,
    onDismiss = () => null,
}) => {
    const { height: screenHeight } = Dimensions.get('screen');
    const panY = useRef(new Animated.Value(screenHeight)).current;

    const resetPositionAnim = useMemo(
        () =>
            Animated.timing(panY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        [panY]
    );

    const closeAnim = useMemo(
        () =>
            Animated.timing(panY, {
                toValue: screenHeight,
                duration: 500,
                useNativeDriver: true,
            }),
        [panY, screenHeight]
    );

    const panResponders = useMemo(
        () =>
            PanResponder.create({
                onStartShouldSetPanResponder: () => true,
                onMoveShouldSetPanResponder: () => false,
                onPanResponderMove: Animated.event([null, { dy: panY }], { useNativeDriver: false }),
                onPanResponderRelease: (_, { dy, vy }) => {
                    if (dy > 100 && vy > 0.5) {
                        closeAnim.start(() => onDismiss?.());
                    } else {
                        resetPositionAnim.start();
                    }
                },
            }),
        [panY, closeAnim, resetPositionAnim, onDismiss]
    );

    useEffect(() => {
        visible ? resetPositionAnim.start() : closeAnim.start();
    }, [visible, resetPositionAnim, closeAnim]);

    const renderAnimatedContent = () => (
        <Animated.View
            style={[
                styles.container,
                {
                    transform: [
                        {
                            translateY: panY.interpolate({
                                inputRange: [0, screenHeight],
                                outputRange: [0, screenHeight],
                                extrapolate: 'clamp',
                            }),
                        },
                    ],
                },
            ]}
            {...panResponders.panHandlers}
        >
            {children}
        </Animated.View>
    );

    const renderContent = (
        <View
            pointerEvents={withoutOverlay ? 'box-none' : 'auto'}
            style={[styles.overlay, !withoutOverlay && styles.overlayBackground]}
        >
            {withoutOverlay ? <View style={styles.container}>{children}</View> : renderAnimatedContent()}
        </View>
    );

    return withoutOverlay ? renderContent : (
        <Modal
            animated
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={onDismiss}
        >
            {renderContent}
        </Modal>
    );
};

export default BottomSheet;
