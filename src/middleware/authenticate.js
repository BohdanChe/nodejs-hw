//1 перевірити аксес токен якщо не має (401)
//2 якщо є то знайти сесію в базі даних (401 якщо не має)
//3 якщо сесія є то знайти юзера (401 якщо не має)
//4 якщо юзер є то записати юзера в ріквест і викликати наступний мідлвар

import createHttpError from "http-errors";
import { Session } from "../models/session.js";
import { User } from "../models/user.js";

export const authenticate = async (req, res, next) => {
    
    const { accessToken } = req.cookies;

    if (!accessToken) {
        throw createHttpError(401, 'No token provided');
    }

    const session = await Session.findOne({ accessToken });
    if (!session) {
        throw createHttpError(401, 'No session found');
    }

    const isTokenExpired = new Date() > new Date(session.accessTokenValidUntil);
    if (isTokenExpired) {
        throw createHttpError(401, 'Token expired');
    }

    const user = await User.findById(session.userId);
    if (!user) {
        throw createHttpError(401);
    }

    req.user = user;
    next();
};