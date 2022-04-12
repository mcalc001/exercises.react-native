import { StyleSheet } from 'react-native';
import { BASE_SIZE } from '../../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  flatList: {
    marginHorizontal: BASE_SIZE * 2
  },
  loadingContainer: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
