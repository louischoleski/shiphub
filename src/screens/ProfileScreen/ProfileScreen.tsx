import React from 'react';

import { ScreenView } from '../../components';
import { withPrivateNav } from '../../utils/hocs';
import { Main, Email, Phone, Password } from './sections';
import { DEFAULT_PROFILE_SECTIONS } from './ProfileScreen.controller';

const ProfileScreen = () => {
    const [activeSection, setActiveSection] = React.useState('');

    React.useEffect(() => {
        setActiveSection(DEFAULT_PROFILE_SECTIONS.MAIN);
    }, []);

    const onSectionPress = (section: string = '') => {
        if (!section || !section?.length) {
            return setActiveSection(DEFAULT_PROFILE_SECTIONS.MAIN);
        }

        if (!section.includes(activeSection)) {
            setActiveSection(section);
        }
    }

    const onLogOutPressed = () => {

    }

    const onBackPress = () => {
        setActiveSection(DEFAULT_PROFILE_SECTIONS.MAIN);
    }

    const hideHeaderNav = React.useMemo(() => !Boolean(
        activeSection === DEFAULT_PROFILE_SECTIONS.MAIN
    ), [activeSection]);

    return (
        <ScreenView 
            withHeader
            withNav={hideHeaderNav}
            onBackPress={onBackPress}
        >
            {activeSection === DEFAULT_PROFILE_SECTIONS.MAIN && (
                <Main onSectionPress={onSectionPress} />
            )}
            {activeSection === DEFAULT_PROFILE_SECTIONS.EMAIL && (
                <Email onSectionPress={onSectionPress} />
            )}
            {activeSection === DEFAULT_PROFILE_SECTIONS.PHONE && (
                <Phone onSectionPress={onSectionPress} />
            )}
            {activeSection === DEFAULT_PROFILE_SECTIONS.PASSWORD && (
                <Password onSectionPress={onSectionPress} />
            )}
        </ScreenView>
    )
}

export default withPrivateNav(ProfileScreen);
