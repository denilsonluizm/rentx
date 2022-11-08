import "reflect-metadata"
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    schema:"public",
    password: "ignite",
    database: "rentx",
    synchronize: false,
    logging: false,
    entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    subscribers: [],
});

export function createConnection(host = "localhost"): Promise<DataSource> {
    return dataSource.setOptions({ host }).initialize();
}