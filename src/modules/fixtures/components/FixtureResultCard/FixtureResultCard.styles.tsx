import { StyleSheet } from 'react-native';
import { BASE_SIZE, GBR, Colors } from '../../../../config';

export const FIXTURE_RESULT_HEIGHT = 156; // fixed height of item component

export const styles = StyleSheet.create({
  container: {
    height: FIXTURE_RESULT_HEIGHT,
    flexDirection: 'row',
    padding: BASE_SIZE * 2,
    backgroundColor: Colors.generic.grey,
    marginBottom: BASE_SIZE * 2,
    justifyContent: 'center',
    borderRadius: GBR
  },
  centerContainer: {
    marginHorizontal: BASE_SIZE
  },
  competitionName: {
    textAlign: 'center',
    paddingBottom: BASE_SIZE * 4,
    fontSize: 13
  },
  date: {
    paddingBottom: BASE_SIZE * 1.5,
    fontWeight: '500',
    fontSize: 13
  },
  timeContainer: {
    padding: BASE_SIZE,
    backgroundColor: Colors.generic.charcoal,
    alignSelf: 'center',
    borderRadius: BASE_SIZE
  },
  time: {
    color: 'white',
    fontSize: 21
  }
});
