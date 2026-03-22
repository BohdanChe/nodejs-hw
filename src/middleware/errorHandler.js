import {HttpError} from 'http-errors';

   
export const errorHandler = (err, req, res, _next) => {
    console.error(err);
    const isProduction = process.env.NODE_ENV === 'production';
    res.status(500).json({
        message: isProduction
            ? 'Нічого не працює ,ідіть до дому спати і не парте мозги'
            : err.stack,
    });
}