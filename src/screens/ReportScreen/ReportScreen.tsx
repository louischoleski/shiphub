import React from 'react';

import { ScreenView } from '../../components';
import { withPrivateNav } from '../../utils/hocs';
import { Main, Calendar, Logs } from './sections';
import { DEFAULT_REPORT_SECTIONS } from './ReportScreen.controller';

const ReportScreen = () => {
    const [activeSection, setActiveSection] = React.useState('');
    const [dateRange, setDateRange] = React.useState({ startDate: '', endDate: '' });

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

    const onBackPress = () => {
        setActiveSection(DEFAULT_REPORT_SECTIONS.MAIN);
    }

    const handleCTAPress = () => {

    }

    const onCTAPress = React.useMemo(() => {
        let res = null;

        if (activeSection === DEFAULT_REPORT_SECTIONS.LOGS) {
            res = handleCTAPress;
        }

        return res;
    }, [activeSection]);

    const hideHeaderNav = React.useMemo(() => !Boolean(
        activeSection === DEFAULT_REPORT_SECTIONS.MAIN
    ), [activeSection]);

    return (
        <ScreenView
            withHeader
            ctaIcon="csv"
            withNav={hideHeaderNav}
            onCTAPress={onCTAPress}
            onBackPress={onBackPress}
        >
            {activeSection === DEFAULT_REPORT_SECTIONS.MAIN && (
                <Main 
                    onSectionPress={onSectionPress}
                />
            )}
            {activeSection === DEFAULT_REPORT_SECTIONS.LOGS && (
                <Logs 
                    dateRange={dateRange}
                    onSectionPress={onSectionPress}
                />
            )}
            {activeSection === DEFAULT_REPORT_SECTIONS.DATE && (
                <Calendar 
                    dateRange={dateRange}
                    setDateRange={setDateRange}
                    onSectionPress={onSectionPress}
                />
            )}
        </ScreenView>
    )
}

export default withPrivateNav(ReportScreen);
