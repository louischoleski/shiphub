import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './NewPasswordScreen.styled';
import { withPublicNav } from '../../utils/hocs';
import { ScreenView, Typography, Grid, Button, Input } from '../../components';

const NewPasswordScreen = () => {
    const navigation = useNavigation();

    const [data, setData] = React.useState({
        code: '',
        password: '',
        passwordRepeat: '',
    });

    const onSubmitPressed = () => {
        navigation.navigate('DeliveryScreen');
    };

    const onLogInPressed = () => {
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
                        Reset
                    </Typography.Heading>
                    <Typography.Heading>
                        Password!
                    </Typography.Heading>
                    <Typography.Paragraph>
                        Enter your password reset code with your new 
                        password and get back to managing deliveries 
                        and tracking progress, and ensuring timely arrivals.
                    </Typography.Paragraph>

                    <Grid cols={1}>
                        <Input
                            name="code"
                            label="Code"
                            value={data.code}
                            setValue={onChangeValue}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Input
                            type="PASSWORD"
                            name="password"
                            label="New Password"
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
                            onPress={onSubmitPressed}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            type="TERTIARY"
                            text="Back to Log In"
                            onPress={onLogInPressed}
                        />
                    </Grid>
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default withPublicNav(NewPasswordScreen);
