import { StyleSheet } from 'react-native';
import { Colors } from '../../../config/Colors';
import { BASE_SIZE, GBR } from '../../../config/Styles';

export const NEWS_ARTICLE_HEIGHT = 308;

export const styles = StyleSheet.create({
  container: {
    height: NEWS_ARTICLE_HEIGHT,
    flex: 1,
    justifyContent: 'center',
    marginBottom: BASE_SIZE * 2,
    backgroundColor: Colors.generic.grey,
    borderRadius: GBR
  },
  imageContainer: {
    height: 156
  },
  textContainer: {
    flex: 1,
    padding: BASE_SIZE * 2
  },
  title: {
    paddingBottom: BASE_SIZE * 2,
    fontSize: 15,
    fontWeight: '500'
  },
  image: {
    borderTopRightRadius: GBR,
    borderTopLeftRadius: GBR,
    flex: 1
  },
  description: {
    fontSize: 13,
    paddingBottom: BASE_SIZE * 3
  },
  date: {
    fontSize: 12,
    paddingBottom: BASE_SIZE * 2,
    paddingLeft: BASE_SIZE * 2,
    color: Colors.generic.silver
  }
});
