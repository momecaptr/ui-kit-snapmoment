const fs = require('fs')
const path = require('path')

// Путь к директории, где находятся ваши SVG
const svgDir = path.resolve(__dirname, './src/core/assets/svgs')

// Путь к index.ts, который будет сгенерирован
const outputFile = path.resolve(__dirname, './src/core/assets/svgs/index.ts')

// Получаем все файлы в папке svgDir
const svgFiles = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'))

// Функция для преобразования строки с тире в camelCase
const toCamelCase = (str) => {
  return str
    .split('-')
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join('')
}

// Читаем уже существующий файл index.ts, если он существует
let existingContent = ''
if (fs.existsSync(outputFile)) {
  existingContent = fs.readFileSync(outputFile, 'utf-8')
}

// Функция для добавления компонента в строку экспорта
const addToExport = (existingExports, componentName) => {
  const regex = /export\s+{(.+?)}/
  const match = existingExports.match(regex)

  if (match) {
    const exportNames = match[1].split(',').map(name => name.trim())
    if (!exportNames.includes(componentName)) {
      exportNames.push(componentName)
    }
    return `export { ${exportNames.join(', ')} }`
  } else {
    return `export { ${componentName} }`
  }
}

// Создаем массив строк для импорта и обновляем экспорт
const importStatements = []
let exportStatements = existingContent

// Обрабатываем каждый файл
svgFiles.forEach((file) => {
  const componentName = toCamelCase(path.basename(file, '.svg')) // Название файла без расширения

  // Добавляем строку импорта, если она еще не существует
  if (!existingContent.includes(`import ${componentName}`)) {
    importStatements.push(`import ${componentName} from './${file}'`)
  }

  // Обновляем строку экспорта
  exportStatements = addToExport(exportStatements, componentName)
})

// Объединяем импорты и обновленные экспорты
const fileContent = `${importStatements.join('\n')}\n\n${exportStatements}`

// Записываем все в файл index.ts
fs.writeFileSync(outputFile, fileContent.trim())

console.log(`Successfully generated/updated exports for ${svgFiles.length} SVG files.`)
