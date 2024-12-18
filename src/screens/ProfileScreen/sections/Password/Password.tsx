import React from 'react';
import { View } from 'react-native';

import styles from './../../ProfileScreen.styled';
import { Card, Button, Grid, Input } from '../../../../components';

const ProfilePasswordSection = ({ onSectionPress }) => {
    const [data, setData] = React.useState({
        password: '',
        oldPassword: '',
    });

    const onChangeValue = (value: string, key?: string) => {
        if (!key || !key.length) return;

        setData({ ...data, [key]: value });
    }

    const onSavePressed = () => {
        onSectionPress();
    }

    const onExitPressed = () => {
        onSectionPress();
    }

    return (
        <>
            <Card
                title="Change Password"
                description="You can change your password here to keep your account secure."
            >
                <Grid cols={1}>
                    <Input
                        type="PASSWORD"
                        name="oldPassword"
                        value={data.oldPassword}
                        setValue={onChangeValue}
                        label="Confirm new password"
                    />
                </Grid>

                <Grid cols={1}>
                    <Input
                        type="PASSWORD"
                        name="password"
                        value={data.password}
                        setValue={onChangeValue}
                        label="New password"
                    />
                </Grid>
            </Card>

            <View style={styles.logout}>
                <Button
                    type="PRIMARY"
                    text="SAVE CHANGES"
                    onPress={onSavePressed}
                />
                <Button
                    type="DANGER"
                    text="DISCARD CHANGES"
                    onPress={onExitPressed}
                />
            </View>
        </>
    )
}

export default ProfilePasswordSection;
