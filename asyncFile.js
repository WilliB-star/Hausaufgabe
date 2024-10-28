const fs = require('fs').promises;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Gib den Namen der Datei ein: ', (fileName) => {
  rl.question('Gib die Nachricht ein, die in die Datei geschrieben werden soll: ', async (message) => {
    
    try {
      await fs.access(fileName);
      console.log(`Die Datei "${fileName}" existiert bereits.`);
    } catch {
      console.log(`Die Datei "${fileName}" existiert nicht und wird erstellt.`);
    }

    try {
      await fs.appendFile(fileName, `${message}\n`);
      console.log('Nachricht erfolgreich hinzugefügt.');
    } catch (err) {
      console.error('Fehler beim Schreiben in die Datei:', err);
    }

    rl.close();
  });
});
