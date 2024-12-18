import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { withPublicNav } from '../../utils/hocs';
import styles from './ConfirmEmailScreen.styled';
import { ScreenView, Typography, Grid, Button, Input } from '../../components';

const ConfirmEmailScreen = () => {
    const navigation = useNavigation();

    const [data, setData] = React.useState({
        code: ''
    });

    const onConfirmPressed = () => {
        navigation.navigate('WelcomeScreen');
    };

    const onLogInPress = () => {
        navigation.navigate('LogInScreen');
    };

    const onResendPressed = () => {
        console.warn('onResendPressed');
    };

    const onChangeValue = (value: string, key?: string) => {
        if (!key || !key.length) return;

        setData({ ...data, [key]: value });
    }

    return (
        <ScreenView withWhiteBg>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <Typography.Heading type="PRIMARY">
                        Almost
                    </Typography.Heading>
                    <Typography.Heading>
                        There!
                    </Typography.Heading>
                    <Typography.Paragraph>
                        To ensure the security of our platform, 
                        please provide your phone number and 
                        take a photo of your valid ID to verify 
                        your identity and protect your account.
                    </Typography.Paragraph>

                    <Grid cols={1}>
                        <Input
                            name="code"
                            value={data.code}
                            setValue={onChangeValue}
                            label="Confirmation Code"
                            placeholder="Enter your confirmation code!"
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            text="CONTINUE"
                            onPress={onConfirmPressed}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            type="SECONDARY"
                            text="RESEND CODE"
                            onPress={onResendPressed}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            type="TERTIARY"
                            text="Back to Log In"
                            onPress={onLogInPress}
                        />
                    </Grid>
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default withPublicNav(ConfirmEmailScreen);
