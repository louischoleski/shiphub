import React from 'react';
import { View } from 'react-native';

import styles from './../../ProfileScreen.styled';
import { Card, Button, Grid, Input } from '../../../../components';

const ProfilePhoneSection = ({ onSectionPress }) => {
    const [data, setData] = React.useState({
        phone: '',
        oldPhone: '',
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
                title="Change Phone Number"
                description="You can change your phone number here to stay updated with alerts and messages."
            >
                <Grid cols={1}>
                    <Input
                        type="PHONE"
                        name="oldPhone"
                        value={data.oldPhone}
                        setValue={onChangeValue}
                        label="Current phone number"
                    />
                </Grid>

                <Grid cols={1}>
                    <Input
                        type="PHONE"
                        name="phone"
                        value={data.phone}
                        setValue={onChangeValue}
                        label="New phone number"
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

export default ProfilePhoneSection;
