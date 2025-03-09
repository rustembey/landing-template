const fs = require("fs");

const filePath = "index.html";
const oldPath = "./dist/index.css";
const newPath = "./styles/index.css";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("❌ Ошибка при чтении index.html:", err);
    return;
  }

  // Проверяем, содержит ли файл старый путь
  if (!data.includes(oldPath)) {
    console.log(`⚠️ Путь "${oldPath}" не найден в index.html. Текущее содержимое:`, data);
    return;
  }

  // Заменяем все вхождения старого пути на новый
  const updatedData = data.replace(new RegExp(oldPath.replace(/\./g, '\\.'), 'g'), newPath);

  fs.writeFile(filePath, updatedData, "utf8", (err) => {
    if (err) {
      console.error("❌ Ошибка при записи index.html:", err);
      return;
    }
    console.log(`✅ Путь к стилям успешно обновлён с "${oldPath}" на "${newPath}"!`);
  });
});