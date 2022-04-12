import moment from 'moment';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { NewsArticle } from '../../../core/api/models';
import { styles } from './NewsArticleCard.styles';

export interface INewsArticleCardProps {
  article: NewsArticle;
  onPress: (id: string) => void;
}

export const NewsArticleCard: React.FC<INewsArticleCardProps> = ({
  onPress,
  article: { id, dateTime, image, title, description }
}) => {
  const date = moment(dateTime).fromNow();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onPress(id)}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <FastImage
          source={{ uri: image }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
      </View>
      <Text style={styles.date} numberOfLines={3}>
        {date}
      </Text>
    </TouchableOpacity>
  );
};
