import React from 'react';
import { View } from 'react-native';

import styles from './../../ProfileScreen.styled';
import { Card, Button, Grid, Input } from '../../../../components';

const ProfileEmailSection = ({ onSectionPress }) => {
    const [data, setData] = React.useState({
        email: '',
        oldEmail: '',
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
                title="Email Address"
                description="You can change your email address here to ensure you receive all important notifications."
            >
                <Grid cols={1}>
                    <Input
                        type="EMAIL"
                        name="oldEmail"
                        value={data.oldEmail}
                        setValue={onChangeValue}
                        label="Current email address"
                    />
                </Grid>

                <Grid cols={1}>
                    <Input
                        type="EMAIL"
                        name="email"
                        value={data.email}
                        setValue={onChangeValue}
                        label="New email address"
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

export default ProfileEmailSection;
