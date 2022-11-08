import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../../../../../src/modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "../../../../../src/shared/errors/AppError";

export async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { id } = request.user;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(id);

    if (!user.isAdmin) {
        throw new AppError("User is not an administrator!"); 
    }

    return next();
}
