import fs from 'fs-extra'
import path from 'path'


const oleFileName = path.resolve() + '/fs_extra/myfile'
const newFileName = path.resolve() +'/fs_extra/mynewfile'
async function copyFiles () {
  try {
    await fs.copy(oleFileName,newFileName )
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

// await copyFiles()
console.log('-------------------------------------------------');
fs.copy(oleFileName,newFileName, err => {
  if (err) return console.error(err)
  console.log('success!')
})