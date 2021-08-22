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
      name: 'Manchester City',
      logo: 'https://logodownload.org/wp-content/uploads/2017/02/manchester-city-fc-logo-escudo-badge.png'
    },
    competition: competitionMocks[0]
  },
  {
    dateTime: getFutureDateString(14),
    awayClub: {
      name: 'Paris Saint-Germain',
      logo: 'https://image.pngaaa.com/245/4759245-middle.png'
    },
    homeClub: stadionFC,
    competition: competitionMocks[0]
  },
  {
    dateTime: getFutureDateString(14),
    awayClub: stadionFC,
    homeClub: {
      name: 'Rangers',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Rangers_FC_Logo.png'
    },
    competition: competitionMocks[0]
  }
];
