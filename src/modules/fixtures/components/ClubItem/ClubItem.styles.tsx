import { StyleSheet } from 'react-native';
import { BASE_SIZE } from '../../../../config/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  image: {
    borderRadius: 100,
    height: 56,
    width: 56,
    alignSelf: 'center'
  },
  imageContainer: {
    marginBottom: BASE_SIZE
  },
  clubName: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
    height: 36
  }
});
