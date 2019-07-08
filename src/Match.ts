import { MatchResult } from "./MatchResult";

export class Match {
  constructor(
    public date: Date, 
    public homeTeam: {
      name: string;
      score: number;
    }, 
    public awayTeam: {
      name: string;
      score: number;
    }, 
    public matchResult: MatchResult) {
  }
}
