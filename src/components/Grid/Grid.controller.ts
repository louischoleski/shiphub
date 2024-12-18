import styles from './Grid.styled';

export const getRows = (childrenArray: React.ReactNode[], cols: number): React.ReactNode[][] => {
  const rows = [];
  for (let i = 0; i < childrenArray.length; i += cols) {
    rows.push(childrenArray.slice(i, i + cols));
  }
  return rows;
};

export const getColumnStyle = (colIdx: number, totalCol: number, cols: number) => {
  return [
    styles.col,
    styles[`col${cols}`],
    // Apply noPaddingRight if totalCol = 1 or not the first column.
    (totalCol === 1 || colIdx > 0) ? styles.noPaddingRight : null,
    // Apply noPaddingLeft if totalCol = 1 or not the last column.
    (totalCol === 1 || colIdx < totalCol - 1) ? styles.noPaddingLeft : null,
  ];
};
