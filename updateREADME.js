const fs = require('fs');
const tree = require('tree-node-cli');

const treeText = tree('./', {
  exclude: [/node_modules/],
});

const introduceText = `## coding-test\nUpload how to solve algorithms at Programmers, Baekjoon, ... using JavaScript.\n`;
const openFolderStructureText = `### Folder Structure\n\`\`\``;
const folderStructureText = treeText;
const closeFolderStructureText = `\`\`\``;
const READMEText = [introduceText, openFolderStructureText, folderStructureText, closeFolderStructureText].join('\n');

console.log(READMEText);
fs.unlinkSync('./README.md');
fs.writeFileSync('./README.md', READMEText);

process.exit();