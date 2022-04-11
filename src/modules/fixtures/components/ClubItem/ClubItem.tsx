import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './ClubItem.styles';

export interface IClubItem {
  logo: string;
  name: string;
}

export const ClubItem: React.FC<IClubItem> = ({ logo, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{ uri: logo }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <Text adjustsFontSizeToFit numberOfLines={2} style={styles.clubName}>
        {name}
      </Text>
    </View>
  );
};
