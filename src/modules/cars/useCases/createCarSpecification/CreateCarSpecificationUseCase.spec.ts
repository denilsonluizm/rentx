import { CarsRepositoryInMemory } from "../../../../../src/modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "../../../../../src/shared/errors/AppError";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car Specification", () => {

    beforeEach(() => {
        // instanciar classes antes dos testes
        // instancias poderão ser usadas em todos os 'it'
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory);

    });

    it("should not be able to add a new specification to a not-existent car", async () => {
        expect( async () => {
            const car_id = "1234";
            const specifications_id = ["54321"];
            
            await createCarSpecificationUseCase.execute({ car_id, specifications_id });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be able to add a new specification to the car", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Name car",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "Category",
        });
        
        const car_id = "1234";
        const specifications_id = ["54321"];
        
        await createCarSpecificationUseCase.execute({ car_id: car.id, specifications_id });
    });

})