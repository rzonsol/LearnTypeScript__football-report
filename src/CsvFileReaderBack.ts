import fs from 'fs';
import { dateStringToData } from './utils';
import { MatchResult } from './MatchResult';

export type MatchData = [
	Date,
	string,
	string,
	number,
	number,
	MatchResult,
	string
];

export class CsvFileReaderBack {
	data: MatchData[] = [];

	constructor(public fileName: string) {}

	read(): void {
		this.data = fs
			.readFileSync(this.fileName, {
				encoding: 'utf-8'
			})
			.split('\n')
			.map((row: string): string[] => row.split(','))
			.map(
				(row: string[]): MatchData => [
					dateStringToData(row[0]),
					row[1],
					row[2],
					parseInt(row[3]),
					parseInt(row[4]),
					row[5] as MatchResult,
					row[6]
				]
			);
	}
}
