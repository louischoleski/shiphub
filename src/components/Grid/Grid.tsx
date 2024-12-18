// Grid.tsx
import React from 'react';
import { View } from 'react-native';

import styles from './Grid.styled';
import { getRows, getColumnStyle } from './Grid.controller';

export interface IGridProps {
  cols?: number;
  children: React.ReactNode;
}

const Grid = ({ cols = 1, children }: IGridProps) => {
  const childrenArray = React.Children.toArray(children);
  const rows = getRows(childrenArray, cols);

  return (
    <View style={styles.container}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((child, colIdx) => (
            <View key={colIdx} style={getColumnStyle(colIdx, row.length, cols)}>
              {child}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Grid;
