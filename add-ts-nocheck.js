const fs = require('fs');

const ADDED_STR = '// @ts-nocheck\n\n';
const FILES = ['node_modules/@react-navigation*'];

Promise.allSettled(FILES.map(addTsNoCheck)).then(results => {
  let hasErrors = false;

  for (const result of results) {
    if (result.status === 'rejected') {
      hasErrors = true;
      console.error(result.reason);
    }
  }

  if (hasErrors) {
    process.exit(1);
  }
});

async function addTsNoCheck(file) {
  const content = fs.readFileSync(file).toString();

  if (content.includes(ADDED_STR)) {
    console.log(JSON.stringify(ADDED_STR), 'is already in', file);
  } else {
    fs.writeFileSync(file, ADDED_STR + content);
    console.log(JSON.stringify(ADDED_STR), 'added into', file);
  }
}
