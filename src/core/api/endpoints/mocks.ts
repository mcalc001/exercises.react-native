import { Club, Competition, Fixture } from '../models';
var d = new Date();
var now = d.getUTCDate();

const getFutureDateString = (plusDays: number) => {
  return new Date().setDate(now + plusDays).toString();
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
    dateTime: getFutureDateString(7),
    awayClub: stadionFC,
    homeClub: {
      name: 'Olympique Lyonnais',
      logo: 'https://psg-dev.stadion.io/media/2381/olympique_lyonnais.png?format=png8'
    },
    competition: competitionMocks[0]
  },
  {
    dateTime: getFutureDateString(14),
    awayClub: {
      name: 'Montpellier Hérault',
      logo: 'https://psg-dev.stadion.io/media/2377/montpellier.png?format=png8'
    },
    homeClub: stadionFC,
    competition: competitionMocks[0]
  },
  {
    dateTime: getFutureDateString(14),
    awayClub: stadionFC,
    homeClub: {
      name: 'Lille OSC',
      logo: 'https://psg-dev.stadion.io/media/14360/losc.png?format=png8'
    },
    competition: competitionMocks[0]
  }
];
