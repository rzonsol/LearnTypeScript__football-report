import fs from 'fs';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const reader = new MatchReader('football.csv');
reader.read();

const summary = new Summary(new WinAnalysis('Everton'), new ConsoleReport());
summary.buildAndPrintReport(reader.data);
