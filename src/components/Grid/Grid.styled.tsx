import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignSelf: 'stretch',
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    paddingHorizontal: 4,
  },
  noPaddingLeft: {
    paddingLeft: 0,
  },
  noPaddingRight: {
    paddingRight: 0,
  },
  col1: {
    flex: 1,
  },
  col2: {
    flex: 0.5,
  },
  col3: {
    flex: 0.33,
  },
  col4: {
    flex: 0.25,
  },
});

export default styles;
