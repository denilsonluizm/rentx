import { ICarsRepository } from "../../../../../src/modules/cars/repositories/ICarsRepository";
import { AppError } from "../../../../../src/shared/errors/AppError";
import { inject } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    car_id: string;
    specifications_id: string[];
}

class CreateCarSpecificationUseCase {

    constructor(
        // @inject("CarsRepository")
        private carsRepository: ICarsRepository,

        private specificationsRepository: ISpecificationsRepository
    ) {}

    async execute({ car_id, specifications_id}: IRequest): Promise<void> {

        const carExists = await this.carsRepository.findById(car_id);

        if(!carExists) {
            throw new AppError("Car Does Not Exists!");
        }

        const specifications = await this.specificationsRepository.findByIds(
            specifications_id
        );

        carExists.specifications = specifications;

        await this.carsRepository.create(carExists);

    }
}

export { CreateCarSpecificationUseCase }