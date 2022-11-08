import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase"

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
    })

    it("Should be able to list all available cars", async () => {

        const car = await carsRepositoryInMemory.create({
            name: "carro 1",
            description: "descricao do carro 1",
            daily_rate: 1100,
            license_plate: "f2ds-4568",
            fine_amount: 13,
            brand: "marca carro 1",
            category_id: "id categoria",
        })

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("Should be able to list all available cars by brand", async () => {

        const car = await carsRepositoryInMemory.create({
            name: "carro 1",
            description: "descricao do carro 1",
            daily_rate: 1100,
            license_plate: "f2ds-4568",
            fine_amount: 13,
            brand: "marca carro 1",
            category_id: "id categoria",
        })

        const cars = await listAvailableCarsUseCase.execute({
            brand: "marca carro 1",
        });

        expect(cars).toEqual([car]);
    });

    it("Should be able to list all available cars by name", async () => {

        const car = await carsRepositoryInMemory.create({
            name: "carro 1",
            description: "descricao do carro 1",
            daily_rate: 1100,
            license_plate: "f2ds-4568",
            fine_amount: 13,
            brand: "marca carro 1",
            category_id: "id categoria",
        })

        const cars = await listAvailableCarsUseCase.execute({
            name: "carro 1",
        });

        expect(cars).toEqual([car]);
    });

})