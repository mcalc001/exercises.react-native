export interface Club {
  name: string;
  logo: string;
}

export interface Competition {
  name: string;
}

export interface Fixture {
  dateTime: string;
  homeClub: Club;
  awayClub: Club;
  competition: Competition;
}
