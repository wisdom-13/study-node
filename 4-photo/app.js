const path = require('path');
const os = require('os');
const fs = require('fs');

// 계획 
// 1. 사용자가 원하는 폴더의 이름을 받아온다.

const folder = process.argv[2];
const workingDir = path.join(os.homedir(), '02_STUDY/node/4-photo/Pictures', folder);

if (!folder || !fs.existsSync(workingDir)) {
  console.error("정확한 폴더 이름을 입력해주세요.");
}


// 2. 폴더 안에 video, captured, duplicated 폴더를 만든다.
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);



// 3. 폴더 안에 있는 파일들을 확인하면서 해당하는  mp4|mov, png|aae, IMG_1234 (IMG_E1234)
fs.promises
  .readdir(workingDir)
  .then(processFiles)
  .catch(console.log);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCaturedFile(file)) {
      move(file, capturedDir);
    } else if (isDuplicatedFile(files, file)) {
      move(file, duplicatedDir);
    }

  })
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isCaturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isDuplicatedFile(files, file) {
  if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }

  const edited = `IMG_E${file.split('_')[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

function move(file, targetDir) {
  console.log(`move ${file} to ${path.basename(targetDir)}`);

  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);

  fs.promises
    .rename(oldPath, newPath)
    .catch(console.error)
}