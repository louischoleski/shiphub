import React from 'react';
import { View, Text } from 'react-native';

import { sortByKey } from '../../../../utils';
import styles from './../../ReportScreen.styled';
import { DEFAULT_HEADER, DUMMY_DATA } from './Logs.controller';
import { useDateFormatter, useScreenSize } from '../../../../utils/hooks';
import { Grid, Input, Card, Button, Table, NavPill } from '../../../../components';
import { DEFAULT_FILTERS, SupportedFilters } from './../../ReportScreen.controller';
import { DEFUALT_DAILY_DATE } from '../../../../components/DeliveryCard/DeliveryCard.controller';

interface IReportLogSectionProps {
    onSectionPress: (section?: string) => void;
    dateRange?: { startDate: any; endDate: any; };
}

const ReportLogSection: React.FC<IReportLogSectionProps> = ({
    dateRange,
    onSectionPress,
}) => {
    const screenSize = useScreenSize();
    const dateFormatter = useDateFormatter();

    const [options, setOptions] = React.useState([]);
    // const [data, setData] = React.useState({ startDate: '', endDate: '' });
    const [activeFilter, setActiveFilter] = React.useState<string>(SupportedFilters.ALL);

    // const minDate = new Date(); // Today
    // const maxDate = new Date(2024, 12, 3);

    React.useEffect(() => {
        setOptions(DUMMY_DATA);
    }, []);

    const onChangeValue = (value: string, key?: string) => {
        if (!key || !key.length) return;

        // setData({ ...data, [key]: value });
    }

    const onExportPressed = () => null;

    const filteredOptions = React.useMemo(() => {
        const sortedData = sortByKey(options, 'timestamp', 'desc');

        if (activeFilter === SupportedFilters.ALL) {
            return sortedData;
        }

        return sortedData.filter(({ status }) => status === activeFilter);
    }, [options, activeFilter]);

    const parseOptions = (elts = []) => elts.map((data) => ({
        id: data?.id,
        name: data?.name,
        status: data?.status,
        receiverName: data?.receiverName,
        timestamp: dateFormatter(data?.timestamp, 'DD/MM/YYYY'),
    }));

    return (
        <>
            <Card title="Enter date range">
                <Grid cols={2}>
                    <Input
                        disabled
                        type="DATE"
                        name="startDate"
                        label="Start Date"
                        placeholder="DD/MM/YYYY"
                        value={dateFormatter(dateRange?.startDate, 'DD/MM/YYYY')}
                    />
                    <Input
                        disabled
                        type="DATE"
                        name="endDate"
                        label="End Date"
                        placeholder="DD/MM/YYYY"
                        value={dateFormatter(dateRange?.endDate, 'DD/MM/YYYY')}
                    />
                </Grid>
            </Card>
            <View style={styles.searchFilters}>
                <Grid cols={1}>
                    <View style={styles.marginTop}>
                        <NavPill
                            options={DEFAULT_FILTERS}
                            currentItem={activeFilter}
                            onChange={setActiveFilter}
                        />
                    </View>
                    <View style={styles.info}>
                        <View style={[styles.infoLeft, styles.marginTop]}>
                            <Text>
                                Reports from {dateFormatter(dateRange?.startDate, DEFUALT_DAILY_DATE)} - {dateFormatter(dateRange?.endDate, DEFUALT_DAILY_DATE)}
                            </Text>
                        </View>
                    </View>
                </Grid>
            </View>

            <View style={styles.marginTop}>
                <Table
                    header={DEFAULT_HEADER}
                    data={parseOptions(filteredOptions)}
                    maxHeight={(screenSize.height / 3) - 40}
                />
            </View>

            <View style={styles.logout}>
                <Button
                    type="PRIMARY"
                    text="EXPORT REPORT"
                    onPress={onExportPressed}
                />
            </View>
        </>
    )
}

export default ReportLogSection;
