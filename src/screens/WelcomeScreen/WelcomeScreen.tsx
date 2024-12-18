import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './WelcomeScreen.styled';
import { withPublicNav } from '../../utils/hocs';
import { ScreenView, Typography, Illustration, Button, Grid } from '../../components';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const [code, setCode] = React.useState('');

    const onConfirmPressed = () => {
        navigation.navigate('DeliveryScreen');
    };

    const onLogInPress = () => {
        navigation.navigate('LogInScreen');
    };

    const onResendPressed = () => {
        console.warn('onResendPressed');
    };

    return (
        <ScreenView withWhiteBg>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                <Typography.Heading type="PRIMARY">
                        Welcome to
                    </Typography.Heading>
                    <Typography.Heading>
                        <Typography.Inline color="#FFC107">
                            Ship
                        </Typography.Inline>
                        <Typography.Inline type="PRIMARY">
                            Hub!
                        </Typography.Inline>
                    </Typography.Heading>
                    <Typography.Paragraph>
                        We're glad to have you on board. Your ID 
                        verification is in progress and you can 
                        check the status in the profile section 
                        of the app.
                    </Typography.Paragraph>

                    <View style={styles.brandImg}>
                        <Illustration.Welcome
                            width="100%"
                        />
                    </View>

                    <Grid cols={1}>
                        <Button
                            text="CONTINUE"
                            onPress={onConfirmPressed}
                        />
                    </Grid>
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default withPublicNav(WelcomeScreen);
