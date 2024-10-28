const fs = require('fs');
const readlineSync = require('readline-sync');

const fileName = readlineSync.question('Gib den Namen der Datei ein: ');
const message = readlineSync.question('Gib die Nachricht ein, die in die Datei geschrieben werden soll: ');

if (!fs.existsSync(fileName)) {
  console.log(`Die Datei "${fileName}" existiert nicht. Sie wird jetzt erstellt.`);
} else {
  console.log(`Die Datei "${fileName}" existiert bereits.`);
}

try {
  fs.appendFileSync(fileName, `${message}\n`);
  console.log('Nachricht erfolgreich hinzugefügt.');
} catch (err) {
  console.error('Fehler beim Schreiben in die Datei:', err);
}
