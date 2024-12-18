import React from 'react';

import { ScreenView } from '../../components';
import { withPrivateNav } from '../../utils/hocs';
import { Main, Calendar, Log } from './sections';
import { DEFAULT_REPORT_SECTIONS } from './ReportScreen.controller';

const ReportScreen = () => {
    const [activeSection, setActiveSection] = React.useState('');

    React.useEffect(() => {
        setActiveSection(DEFAULT_REPORT_SECTIONS.MAIN);
    }, []);

    const onSectionPress = (section: string = '') => {
        if (!section || !section?.length) {
            return setActiveSection(DEFAULT_REPORT_SECTIONS.MAIN);
        }

        if (!section.includes(activeSection)) {
            setActiveSection(section);
        }
    }

    return (
        <ScreenView withHeader>
            {activeSection === DEFAULT_REPORT_SECTIONS.MAIN && (
                <Main onSectionPress={onSectionPress} />
            )}
            {activeSection === DEFAULT_REPORT_SECTIONS.DATE && (
                <Calendar onSectionPress={onSectionPress} />
            )}
            {activeSection === DEFAULT_REPORT_SECTIONS.REPORT && (
                <Log onSectionPress={onSectionPress} />
            )}
        </ScreenView>
    )
}

export default withPrivateNav(ReportScreen);
