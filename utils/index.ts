import path from 'path'
import fs from 'fs'

export const docsPath = path.resolve(__dirname, '..', 'docs')
export const codePath = path.resolve(__dirname, '..', 'code')

export const getFiles = (filepath, type) => {
  return fs.readdirSync(path.resolve(docsPath, filepath)).filter((filename) => {
    const [_index, codeType] = filename.split('.')
    return type === codeType
  })
}

export const getCodePath = (str: string): string => {
  const [dirKey, fileKey] = str.replace('@@', '').split(' ')
  const files = fs.readdirSync(codePath)
  const filePath = files.find((filename) => filename.includes(dirKey)) ?? ''

  return path.resolve(
    codePath,
    filePath,
    fileKey ? fileKey + '.ts' : 'index.ts',
  )
}
