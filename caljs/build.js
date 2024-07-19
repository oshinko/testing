const fs = require('node:fs');
const path = require('node:path');
const yaml = require('js-yaml');
const { ICalCalendar } = require('ical-generator');

const DIST = 'dist/calendar.ics';

// YAMLファイルの読み込み
const loadYaml = (filePath) => {
  return yaml.load(fs.readFileSync(filePath, 'utf8'));
};

// iCalファイルの生成
const generateIcal = src => new ICalCalendar(src);
// const generateIcal = src => {
//   const calendar = new ICalCalendar({ name: src.name, timezone: src.timezone });
//   src.events.forEach(eventData => {
//     calendar.createEvent({
//       id: eventData.id, // YAMLからUIDを取得
//       // start: new Date(eventData.start),
//       // end: new Date(eventData.end),
//       start: new Date('2024-07-19'),
//       summary: eventData.summary,
//       description: eventData.description,
//       location: eventData.location,
//       repeating: eventData.repeating
//     });
//   });
// };

// YAMLファイルからiCalを生成する例
const yamlEvents = loadYaml('events.yml');
const calendar = generateIcal(yamlEvents);

fs.mkdirSync(path.dirname(DIST), { recursive: true });
fs.writeFileSync(DIST, calendar.toString(), { encoding: 'utf8' });
