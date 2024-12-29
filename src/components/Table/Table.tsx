import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './Table.styled';

interface ITableProps {
    maxHeight?: number;
    noDataMessage?: string;
    data: Array<{ [key: string]: any }>;
    header?: Array<{ key: string, label: string }>;
}

const Table: React.FC<ITableProps> = ({
    data = [],
    header = [],
    maxHeight = 330,
    noDataMessage = 'No data has been found',
}) => {
    if (!data || !data.length) {
        return (
            <View style={styles.tableContainer}>
                <Text style={styles.noDataText}>
                    {noDataMessage}
                </Text>
            </View>
        );
    }

    const renderItem = ({ item, index }) => {
        const isEvenRow = index % 2 === 0;
        return (
            <View
                style={[
                    styles.row,
                    isEvenRow ? styles.rowDefault : styles.rowStripped,
                ]}
            >
                {header.map((col, colIndex) => (
                    <Text key={colIndex} style={[styles.cell]}>
                        {item[col.key] || '-'}
                    </Text>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.tableContainer}>
            <View style={styles.headerContainer}>
                {header.map((col, index) => (
                    <Text
                        key={index}
                        style={[
                            styles.headerText,
                            index !== header.length - 1 && styles.headerDivider,
                        ]}
                    >
                        {col.label}
                    </Text>
                ))}
            </View>
            <ScrollView style={[ styles.scrollableContent, { maxHeight }]}>
                {data.map((item, index) => renderItem({ item, index }))}
            </ScrollView>
        </View>
    );
};

export default Table;
