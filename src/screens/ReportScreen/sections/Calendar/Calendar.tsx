import React from 'react';
import { Text } from 'react-native';

import styles from './../../ReportScreen.styled';
import { Grid, Input, Card } from '../../../../components';
import { DEFAULT_REPORT_SECTIONS } from './../../ReportScreen.controller';

const ReportCalendarSection = ({ onSectionPress }) => {
    const [data, setData] = React.useState({ startDate: 0, endDate: 0 });

    const onChangeValue = (value: string, key?: string) => {
        if (!key || !key.length) return;

        setData({ ...data, [key]: value });
    }

    const onSelectDatePressed = () => {
        onSectionPress(DEFAULT_REPORT_SECTIONS.DATE);
    }

    return (
        <>
            <Card title="Enter date range">
                <Grid cols={2}>
                    <Input
                        type="DATE"
                        name="startDate"
                        label="Start Date"
                        value={data.startDate}
                        placeholder="DD/MM/YYYY"
                        setValue={onChangeValue}
                    />
                    <Input
                        type="DATE"
                        name="endDate"
                        label="End Date"
                        value={data.endDate}
                        placeholder="DD/MM/YYYY"
                        setValue={onChangeValue}
                    />
                </Grid>
            </Card>
            <Card>
                <Text>
                    Todo Calendar
                </Text>
            </Card>
        </>
    )
}

export default ReportCalendarSection;
