import { Platform } from 'react-native';
import { Colors } from './Colors';

export const BASE_SIZE = 6;
export const GBR = 8; // global border radius

export const AppStyles = {
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: Colors.generic.charcoal,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.2
      },
      android: {
        shadowColor: Colors.generic.charcoal,
        elevation: 2
      }
    })
  }
};
