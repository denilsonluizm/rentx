import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepository } from "../../infra/typeorm/repositories/UsersRepository";
import { hash } from "bcrypt";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository) {};

    async execute({name, username, email, driver_license, password}: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("User Already Exists");
        }
        
        const passwordHash = await hash(password, 8);
        
        await this.usersRepository.create({
            name,
            username,
            email,
            driver_license,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase }