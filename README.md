# nodejs-hw

Невеликий навчальний Node.js + Express проєкт із простими API-ендпоїнтами.

## Вимоги

- Node.js (рекомендовано 18+)
- npm

## Встановлення

```bash
npm install
```

## Змінні оточення

Створіть файл `.env` у корені проєкту:

```env
PORT=3000
NODE_ENV=development
```

## Запуск у режимі розробки

```bash
npm run dev
```

Сервер запускається через `nodemon`.

## Доступні маршрути

- `GET /notes` — повертає список нотаток (заглушка)
- `GET /note/:noteId` — повертає нотатку за ID
- `GET /test-error` — повертає помилку `500` для тесту error-handler
- Будь-який інший шлях повертає `404 Route not found`
