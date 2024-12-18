import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { withPublicNav } from '../../utils/hocs';
import { ScreenView, Typography, Button, Input, Link, Grid } from '../../components/';
// import SocialSignInButtons from '../../components/SocialSignInButtons';

import styles from './RegisterScreen.styled';
import Paragraph from '../../components/Typography/Paragraph';

const RegisterScreen = () => {
    const navigation = useNavigation();

    const [data, setData] = React.useState({
        email: '',
        lastName: '',
        password: '',
        firstName: '',
        passwordRepeat: '',
    });

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmailScreen'); 
    };

    const onLogInPressed = () => {
        navigation.navigate('LogInScreen');
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
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
                        Join
                    </Typography.Heading>
                    <Typography.Heading>
                        Our Team!
                    </Typography.Heading>
                    <Typography.Paragraph>
                        Create an account to start managing 
                        your deliveries efficiently. Enjoy 
                        optimized routes, real-time updates, 
                        and seamless delivery management.
                    </Typography.Paragraph>

                    <Grid cols={2}>
                        <Input
                            name="firstName"
                            label="First Name"
                            value={data.firstName}
                            setValue={onChangeValue}
                        />
                        <Input
                            name="lastName"
                            label="Last Name"
                            value={data.lastName}
                            setValue={onChangeValue}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Input
                            type="EMAIL"
                            name="email"
                            label="Email"
                            value={data.email}
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
                        <Input
                            type="PASSWORD"
                            name="passwordRepeat"
                            label="Confirm Password"
                            setValue={onChangeValue}
                            value={data.passwordRepeat}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            text="CONTINUE"
                            onPress={onRegisterPressed}
                        />
                    </Grid>

                    <Paragraph>
                        By registering, you confirm that you accept our
                        <Link onPress={onTermsOfUsePressed}>
                            Terms of Use
                        </Link>
                        and
                        <Link onPress={onPrivacyPressed}>
                            Privacy Policy
                        </Link>
                    </Paragraph>

                    {/* <SocialSignInButtons /> */}

                    <Button
                        type="TERTIARY"
                        onPress={onLogInPressed}
                        text="Have an account? Log In!"
                    />
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default withPublicNav(RegisterScreen);
