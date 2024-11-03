const fs = require('fs')
const path = require('path')

// Путь к директории, где находятся ваши компоненты
const componentDir = path.resolve(__dirname, './src/core/assets/svgComponents')

// Путь к index.ts, который будет сгенерирован
const outputFile = path.resolve(__dirname, './src/core/assets/svgComponents/index.ts')

// Получаем все файлы в папке componentDir
const componentFiles = fs.readdirSync(componentDir).filter(file => file.endsWith('.tsx')) // Предполагается, что компоненты имеют расширение .tsx

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
componentFiles.forEach((file) => {
  const componentName = path.basename(file, '.tsx') // Название файла без расширения

  // Добавляем строку импорта
  if (!existingContent.includes(`import ${componentName}`)) {
    importStatements.push(`import ${componentName} from './${componentName}'`)
  }

  // Обновляем строку экспорта
  exportStatements = addToExport(exportStatements, componentName)
})

// Объединяем импорты и обновленные экспорты
const fileContent = `${importStatements.join('\n')}\n\n${exportStatements}`

// Записываем все в файл index.ts
fs.writeFileSync(outputFile, fileContent.trim())

console.log(`Successfully generated/updated exports for ${componentFiles.length} components.`)
