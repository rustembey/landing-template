const fs = require("fs");

const filePath = "index.html";

// Регулярное выражение для замены dist/index.css на styles/index.css
const regex = /dist\/index\.css/g;
const newPath = "styles/index.css";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("❌ Ошибка при чтении index.html:", err);
    return;
  }

  if (!regex.test(data)) {
    console.log("⚠️ Путь к стилям уже обновлён, ничего менять не нужно.");
    return;
  }

  const updatedData = data.replace(regex, newPath);

  fs.writeFile(filePath, updatedData, "utf8", (err) => {
    if (err) {
      console.error("❌ Ошибка при записи index.html:", err);
      return;
    }
    console.log("✅ Путь к стилям успешно обновлён для деплоя!");
  });
});
