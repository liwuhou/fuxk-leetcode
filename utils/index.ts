import path from 'node:path'
import fs from 'node:fs'

export const docsPath = path.resolve(__dirname, '..', 'docs')
export const codePath = path.resolve(__dirname, '..', 'code')

export enum ALIAS_MAP {
  CODE = '@code',
  STRUCTURE = '@structure',
}

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

export const getRealPathFromAlias = (str: string) => {
  const [alias, dirname, filename = 'index.ts'] = str.split(' ')
  switch (alias) {
    case ALIAS_MAP.CODE:
      return path.resolve(
        codePath,
        dirname.replace(ALIAS_MAP.CODE, ''),
        filename,
      )
    case ALIAS_MAP.STRUCTURE:
      return path.resolve(
        codePath,
        'structure',
        dirname.replace(ALIAS_MAP.STRUCTURE, ''),
        filename,
      )
    default:
      return str
  }
}
