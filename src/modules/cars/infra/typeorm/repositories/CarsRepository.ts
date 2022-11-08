import { Repository } from "typeorm";
import { ICreateCarDTO } from "../../../../../../src/modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../../../../src/modules/cars/repositories/ICarsRepository";
import { Car } from "../entities/Car";
import { dataSource } from "../../../../../../src/shared/infra/typeorm/index";

class CarsRepository implements ICarsRepository {

    private repository: Repository<Car>;

    constructor () {
        this.repository = dataSource.getRepository(Car);
    }

    async create({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
        specifications
    }: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
            specifications
        });

        await this.repository.save(car);

        return car;
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({where: {license_plate: license_plate }});

        return car;
    }

    async findAvaliable(category_id?: string, brand?: string, name?: string): Promise<Car[]> {
        const carsQuery = await this.repository
            .createQueryBuilder("c")
            .where("avaliable = :avaliable", {avaliable: true});
        
        if (brand) {
            carsQuery.andWhere("c.brand = :brand", {brand});
        }

        if (category_id) {
            carsQuery.andWhere("c.category_id = :category_id", {category_id});
        }

        if (name) {
            carsQuery.andWhere("c.name = :name", {name});
        }

        const cars = await carsQuery.getMany();

        return cars;
    }

    async findById(id: string): Promise<Car> {
        const car = await this.repository.findOne({ where: { id: id } });

        return car;
    }
    
}

export { CarsRepository }