const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";

const writeFile = async (fileName, fileContent) => {
  try {
    await fs.access(fileName); 
    console.log(`${fileName} already exists. Skipping write operation`);
  } catch (error) {
    try {
      await fs.writeFile(fileName, fileContent);
      console.log(`File ${fileName} created and data written successfully!`);
    } catch (writeError) {
      console.error(`Error writing file: ${writeError}`);
    }
  }
};
module.exports = writeFile;
