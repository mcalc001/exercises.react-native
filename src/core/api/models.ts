export interface Club {
  name: string;
  logo: string;
}

export interface Competition {
  name: string;
}

export interface Fixture {
  /**
   * The date and time of kick off, in UTC
   */
  dateTime: string;

  /**
   * The home club
   */
  homeClub: Club;

  /**
   * The away club
   */
  awayClub: Club;

  /**
   * Which competition (aka "league") the game is in.
   */
  competition: Competition;
}
