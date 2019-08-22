import fs from 'fs';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchData } from './MatchData';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const reader = new MatchReader('football.csv');
reader.read();
const matches = reader.data;

// const wins = matches.filter(
// 	(match: MatchData): boolean =>
// 		(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
// 		(match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
// ).length;

// console.log(`Man United won ${wins} games.`);

const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matches);
