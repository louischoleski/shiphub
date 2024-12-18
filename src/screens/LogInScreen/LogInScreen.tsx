import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, useWindowDimensions, ScrollView } from 'react-native';

// import Logo from '../../../assets/images/Logo_1.png';

import styles from './LogInScreen.styled';
import { withPublicNav } from '../../utils/hocs';
import { ScreenView, Typography, Grid, Button, Input } from '../../components';

const LogInScreen = () => {
    const navigation = useNavigation();

    const [data, setData] = React.useState({
        email: '',
        password: '',
    });

    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        navigation.navigate('DeliveryScreen');
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPasswordScreen");
    };

    const onSignInFacebook = () => {
        console.warn('onSignInFacebook');
    };
    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    };
    const onSignInApple = () => {
        console.warn('onSignInApple');
    };

    const onRegisterPressed = () => {
        navigation.navigate('RegisterScreen');
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
                        Welcome
                    </Typography.Heading>
                    <Typography.Heading>
                        Back!
                    </Typography.Heading>
                    <Typography.Paragraph>
                        Log in to manage your deliveries, 
                        track progress, and ensure timely 
                        arrivals. Your efficient delivery 
                        experience starts here.
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
                        <Input
                            type="PASSWORD"
                            name="password"
                            label="Password"
                            value={data.password}
                            setValue={onChangeValue}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            text="LOG IN"
                            onPress={onSignInPressed}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            type="TERTIARY"
                            text="Forgot Password"
                            onPress={onForgotPasswordPressed}
                        />
                    </Grid>


                    {/* <Button
                        bgColor="#E7EAF4"
                        fgColor="#4765A9"
                        onPress={onSignInFacebook}
                        text="Sign In with Facebook"
                    />

                    <Button
                        bgColor="#FAE9EA"
                        fgColor="#DD4D44"
                        onPress={onSignInGoogle}
                        text="Sign In with Google"
                    />

                    <Button
                        bgColor="#e3e3e3"
                        fgColor="#363636"
                        onPress={onSignInApple}
                        text="Sign In with Apple"
                    /> */}

                    <Grid cols={1}>
                        <Button
                            type="TERTIARY"
                            onPress={onRegisterPressed}
                            text="Don't have an account? Create one!"
                        />
                    </Grid>
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default withPublicNav(LogInScreen);
