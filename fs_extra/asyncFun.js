import fs from 'fs-extra'
import path from 'path'

const dir = path.resolve() + '/fs_extra/'

const copy = async (oldFile,newFile) =>{
  await fs.copy(oldFile,newFile)
  console.log('copy is success !');
}
copy(dir + 'myfile',dir + 'mynewfile') // 复制文件
copy(dir + 'old',dir + 'new')          // 复制目录





// copy        
// emptyDir
// ensureFile
// ensureDir
// ensureLink
// ensureSymlink
// mkdirp
// mkdirs
// move
// outputFile
// outputJson
// pathExists
// readJson
// remove
// writeJson