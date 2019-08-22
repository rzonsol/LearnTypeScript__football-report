import fs from 'fs';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader, MatchData } from './MatchReader';

const reader = new MatchReader('football.csv');
reader.read();
const matches = reader.data;

const wins = matches.filter(
	(match: MatchData): boolean =>
		(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
		(match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
).length;

console.log(`Man United won ${wins} games.`);
