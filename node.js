require('dotenv').config();
const fs = require('fs');

const setClaspJsonFile = (claspProjectId) => {
  const claspObject = {
    scriptId: claspProjectId,
    rootDir: './dist',
  };

  const claspJSON = JSON.stringify(claspObject);

  fs.writeFile('./.clasp.json', claspJSON, (error) => {
    if (error) {
      console.log(error);
    }
  });
};

setClaspJsonFile(process.env.CLASP_SCRIPT_ID);

// fs.readFile('./.clasp.json', 'utf-8', (error, jsonString) => {
//   if (error) {
//     console.log(error)
//     return
//   }

//   try {
//     const data = JSON.parse(jsonString)
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// })
