import { AppError } from "../../../../shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase; 
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    })

    it("Should be able to create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: "Name car",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "Category",
        });

        expect(car).toHaveProperty("id");
    });

    it("Should not be able to create a new car with same license plate", async () => {
        expect( async () => {
            await createCarUseCase.execute({
                name: "Name 1 car",
                description: "Description 1 car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "Category",
            });

            await createCarUseCase.execute({
                name: "Name 2 car",
                description: "Description 2 car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "Category",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should not be able to create a new car with available true by default", async () => {
        const car = await createCarUseCase.execute({
            name: "Car avaliable",
            description: "Description 2 car",
            daily_rate: 100,
            license_plate: "ABC-7894",
            fine_amount: 60,
            brand: "Brand",
            category_id: "Category",
        });

        expect(car.avaliable).toBe(true);
    });
});