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

## Посилання

- GitHub репозиторій: https://github.com/BohdanChe/nodejs-hw
- Render деплой: ДОДАЙТЕ*ПОСИЛАННЯ*НА*ВАШ_RENDER*СЕРВІС

## Змінні оточення

Створіть файл `.env` у корені проєкту:

```env
PORT=3000
NODE_ENV=development
MONGO_URL=mongodb://localhost:27017/notes-api

# JWT для auth/reset-password
JWT_SECRET=your_super_secret

# Домен фронтенда для посилання з email
FRONTEND_DOMAIN=http://localhost:3001

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Brevo SMTP
SMTP_PORT=
SMTP_HOST=
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM=
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
