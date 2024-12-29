import React from 'react';
import { View, Text } from 'react-native';

import { sortByKey } from '../../../../utils';
import styles from './../../ReportScreen.styled';
import { useDateFormatter, useScreenSize } from '../../../../utils/hooks';
import { Grid, Input, Card, Button, Table, NavPill } from '../../../../components';
import { DEFAULT_FILTERS, SupportedFilters } from './../../ReportScreen.controller';
import { DEFUALT_WEEK_DATE } from '../../../../components/DeliveryCard/DeliveryCard.controller';

const DEFAULT_HEADER = [
    { key: 'name', label: 'Shipping No.' },
    { key: 'receiverName', label: 'Receiver’s Name' },
    { key: 'timestamp', label: 'Date Delivered' },
    { key: 'status', label: 'Delivery Status' },
];

const DUMMY_DATA = [
    {
        id: 'hb6x3xlg5',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: 'morj776qa',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'a92fla4lt',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: 's8xdhwijv',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: 'z3eg1lssp',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'l3jgkma6p',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: 'nzite0wn2',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: '4tsbnig5q',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'sgptwse7d',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: 'uehch0nno',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: 'p935d5ivc',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'nzk21buqd',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: 'i039nhaq4',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: 'pvc8w0mpv',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: '5hfk071eu',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: 'utm70kmfg',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: '4ejlxceln',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'bvo08twy8',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: 'sz25ko6tr',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: 'ibayjjp96',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'cd9ka1rm6',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: 'hjcv7e9uo',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: 'u1f3qo24z',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'ryb6n1vei',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: '4pbkqoqvh',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: 'qqez9e95e',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'xzartfuyv',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: 'q3jgcfden',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: 'sd8vvx607',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: 'qhkp86pri',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'lvfytc13w',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: 'fzj0xmc60',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: '20wt5kua2',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'k30l8pk71',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: '4ntjmubzb',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: '38jqi887p',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'q6e2f1iwi',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: 'ba0vvc3sf',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: 'lm3tgx8lf',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'f9k418ntz',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: '5npjjgokt',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: 'sxby9219j',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'f9ub85uuc',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    },
    {
        id: 'l8fgfjgz8',
        name: '12345',
        receiverName: 'John Doe',
        timestamp: 1733011200000,
        status: 'DELIVERED'
    },
    {
        id: '9d3hadlyu',
        name: '67890',
        receiverName: 'Jane Smith',
        timestamp: 1733356800000,
        status: 'PENDING'
    },
    {
        id: 'n9vxg9xio',
        name: '11223',
        receiverName: 'Jack Black',
        timestamp: 1733529600000,
        status: 'IN_TRANSIT'
    }
];

const ReportLogSection = ({ onSectionPress }) => {
    const screenSize = useScreenSize();
    const dateFormatter = useDateFormatter();

    const [options, setOptions] = React.useState([]);
    const [data, setData] = React.useState({ startDate: '', endDate: '' });
    const [activeFilter, setActiveFilter] = React.useState<string>(SupportedFilters.ALL);

    // const minDate = new Date(); // Today
    // const maxDate = new Date(2024, 12, 3);

    React.useEffect(() => {
        setOptions(DUMMY_DATA);
    }, []);

    const onChangeValue = (value: string, key?: string) => {
        if (!key || !key.length) return;

        setData({ ...data, [key]: value });
    }

    // const onDateChange = (date, type) => {
    //     console.log(date, type)
    //     if (type === 'END_DATE') {
    //         setData({
    //             ...data,
    //             endDate: date,
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             startDate: date,
    //         });
    //     }
    // };

    // const onDateConfirmPressed = () => null;

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
                        setValue={onChangeValue}
                        value={dateFormatter(data?.startDate, 'DD/MM/YYYY')}
                    />
                    <Input
                        disabled
                        type="DATE"
                        name="endDate"
                        label="End Date"
                        placeholder="DD/MM/YYYY"
                        setValue={onChangeValue}
                        value={dateFormatter(data?.endDate, 'DD/MM/YYYY')}
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
                                Reports from July 6, 2024 - December 14, 2024
                            </Text>
                        </View>
                    </View>
                </Grid>
            </View>

            <View style={styles.marginTop}>
                <Table
                    maxHeight={screenSize.height / 3}
                    header={DEFAULT_HEADER}
                    data={parseOptions(filteredOptions)}
                />
            </View>

            <View style={styles.logout}>
                <Button
                    type="PRIMARY"
                    text="EXPORT REPORT"
                    // onPress={onLogOutPressed}
                />
            </View>
        </>
    )
}

export default ReportLogSection;
