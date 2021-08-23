import { Club, Competition, Fixture } from '../models';

const getFutureDateString = (plusDays: number) => {
  var now = new Date();
  now.setDate(now.getDate() + plusDays);
  return now.toUTCString();
};

export const competitionMocks: Competition[] = [
  {
    name: 'Friendly'
  }
];

const stadionFC: Club = {
  name: 'Stadion',
  logo: 'https://pbs.twimg.com/profile_images/1267732189808152580/uVi11N-__400x400.jpg'
};

export const fixtureMocks: Fixture[] = [
  {
    id: '1',
    dateTime: getFutureDateString(7),
    awayClub: stadionFC,
    homeClub: {
      name: 'Olympique Lyonnais',
      logo: 'https://psg-dev.stadion.io/media/2381/olympique_lyonnais.png?format=png8'
    },
    competition: competitionMocks[0]
  },
  {
    id: '2',
    dateTime: getFutureDateString(14),
    awayClub: {
      name: 'Montpellier Hérault',
      logo: 'https://psg-dev.stadion.io/media/2377/montpellier.png?format=png8'
    },
    homeClub: stadionFC,
    competition: competitionMocks[0]
  },
  {
    id: '3',
    dateTime: getFutureDateString(21),
    awayClub: stadionFC,
    homeClub: {
      name: 'Lille OSC',
      logo: 'https://psg-dev.stadion.io/media/14360/losc.png?format=png8'
    },
    competition: competitionMocks[0]
  }
];
