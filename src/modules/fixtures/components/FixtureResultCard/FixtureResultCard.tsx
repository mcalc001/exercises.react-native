import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import { Fixture } from '../../../../core/api/models';
import { ClubItem } from '../ClubItem';
import { styles } from './FixtureResultCard.styles';

export const FixtureResultCard: React.FC<Fixture> = ({
  homeClub,
  awayClub,
  competition,
  dateTime
}: Fixture) => {
  const date = moment(dateTime).format('ddd Do MMMM');
  const time = moment(dateTime).format('hh:mm');

  return (
    <View style={styles.container}>
      {/* homeClub: ClubItem */}
      <ClubItem logo={homeClub.logo} name={homeClub.name} />
      {/* centerContainer */}
      <View style={styles.centerContainer}>
        <Text style={styles.competitionName}>{competition.name}</Text>

        <Text style={styles.date}>{date}</Text>

        <View style={styles.timeContainer}>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      {/* homeClub: ClubItem */}
      <ClubItem logo={awayClub.logo} name={awayClub.name} />
    </View>
  );
};
