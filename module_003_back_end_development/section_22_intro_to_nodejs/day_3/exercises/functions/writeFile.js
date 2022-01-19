const fs = require('fs/promises');

module.exports = async function writeFile(file, content) {
  try {
    await fs.writeFile(file, content);
    return 'ok';
  } catch (error) {
    throw new Error(error);
  }
}
