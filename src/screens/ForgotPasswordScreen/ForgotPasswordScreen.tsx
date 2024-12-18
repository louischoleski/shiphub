import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { withPublicNav } from '../../utils/hocs';
import styles from './ForgotPasswordScreen.styled';
import { ScreenView, Typography, Grid, Button, Input } from '../../components';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();

    const [data, setData] = React.useState({
        email: '',
    });

    const onSendPressed = () => {
        navigation.navigate('NewPasswordScreen');
    };

    const onLogInPress = () => {
        navigation.navigate('LogInScreen');
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
                        Forgot
                    </Typography.Heading>
                    <Typography.Heading>
                        Password!
                    </Typography.Heading>
                    <Typography.Paragraph>
                        Enter your email below to receive a password 
                        reset code and get back to managing deliveries 
                        and tracking progress, and ensuring timely arrivals.
                    </Typography.Paragraph>

                    <Grid cols={1}>
                        <Input
                            type="EMAIL"
                            name="email"
                            value={data.email}
                            label="Email Address"
                            setValue={onChangeValue}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            text="CONTINUE"
                            onPress={onSendPressed}
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

export default withPublicNav(ForgotPasswordScreen);
