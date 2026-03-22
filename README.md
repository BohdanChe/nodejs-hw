# Notes API

REST API для керування нотатками, побудований на Node.js, Express та MongoDB (Mongoose).

## Стек технологій

- **Node.js** (ESM modules)
- **Express 5**
- **MongoDB** + **Mongoose**
- **pino** / **pino-pretty** — логування запитів
- **dotenv** — змінні оточення
- **nodemon** — гаряче перезавантаження при розробці

## Вимоги

- Node.js 18+
- npm
- MongoDB (локальний або Atlas)

## Встановлення

```bash
npm install
```

## Змінні оточення

Створіть файл `.env` у корені проєкту:

```env
PORT=3000
NODE_ENV=development
MONGODB_URL=mongodb://localhost:27017/notes-api
```

## Запуск

```bash
# режим розробки (з nodemon)
npm run dev

# продакшн
npm start
```

## API ендпоїнти

| Метод    | Маршрут          | Опис                   |
| -------- | ---------------- | ---------------------- |
| `GET`    | `/notes`         | Отримати всі нотатки   |
| `GET`    | `/notes/:noteId` | Отримати нотатку за ID |
| `POST`   | `/notes`         | Створити нову нотатку  |
| `PATCH`  | `/notes/:noteId` | Оновити нотатку за ID  |
| `DELETE` | `/notes/:noteId` | Видалити нотатку за ID |

## Модель нотатки

```json
{
  "title": "string (required)",
  "content": "string",
  "tag": "Work | Personal | Meeting | Shopping | Ideas | Travel | Finance | Health | Important | Todo"
}
```

## Структура проєкту

```
src/
├── controllers/
│   └── notesControllers.js   # Логіка обробки запитів
├── db/
│   └── connectMongoDB.js     # Підключення до MongoDB
├── middleware/
│   ├── errorHandler.js       # Глобальний error handler
│   ├── logger.js             # HTTP логер (pino)
│   └── notFoundHandler.js    # 404 handler
├── models/
│   └── note.js               # Mongoose схема нотатки
├── routes/
│   └── notesRoutes.js        # Маршрути Express
└── server.js                 # Точка входу
```
