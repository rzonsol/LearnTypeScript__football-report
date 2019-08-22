import fs from 'fs';
import { MatchResult } from './MatchResult';

const matches = fs
	.readFileSync('football.csv', {
		encoding: 'utf-8'
	})
	.split('\n')
	.map((row: string): string[] => row.split(','));

const wins = matches.filter(
	(match: String[]): boolean =>
		(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
		(match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
).length;

console.log(`Man United won ${wins} games.`);
