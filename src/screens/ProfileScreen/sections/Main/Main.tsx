import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './../../ProfileScreen.styled';
import { Card, Illustration, Button } from '../../../../components';
import { DEFAULT_PROFILE_OPTIONS } from './../../ProfileScreen.controller';

const ProfileMainSection = ({ onSectionPress }) => {

    React.useEffect(() => {
        onSectionPress();
    }, []);

    const onLogOutPressed = () => {

    }

    const onVerificationPressed = () => {}

    return (
        <>
            <Card
                title="Settings"
                description="Update your personal information and credentials."
            >
                {DEFAULT_PROFILE_OPTIONS.map((item) => (
                    <TouchableOpacity
                        id={item.id}
                        key={item.id}
                        style={styles.iconWrapper}
                        onPress={() => onSectionPress(item.id)}
                    >
                        <View style={styles.icon}>
                            <Illustration.Icon
                                color="#007BFF"
                                name={item.icon}
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.description}>
                                {item.description}
                            </Text>
                        </View>
                        <Illustration.Icon
                            name="arrow_forward"
                        />
                    </TouchableOpacity>
                ))}
            </Card>
            <Card
                title="Verification Status"
                description="You can view the current status of your ID verification here."
            >
                <Button
                    type="DISABLED"
                    text="Under Review"
                    onPress={onVerificationPressed}
                />
            </Card>

            <View style={styles.logout}>
                <Button
                    type="DANGER"
                    text="LOG OUT"
                    onPress={onLogOutPressed}
                />
            </View>
        </>
    )
}

export default ProfileMainSection;
