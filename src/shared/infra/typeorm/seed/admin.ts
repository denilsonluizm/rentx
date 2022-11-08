import { hash } from "bcrypt";
import { createConnection } from '../index';
import { v4 as uuidV4 } from "uuid";

async function create() {

    const connection = createConnection();

    const id = uuidV4();
    const password = await hash("admin", 8);

    (await connection).query(
        `INSERT INTO USERS(id, name, username, email, driver_license, "isAdmin",password, created_at)
        values('${id}', 'addmfidsn', 'ufsedrasdmin' ,'admsdfdin@admin.com', 'asfsd45', true,'${password}','now()')
        `
    );

}

create().then(() => console.log("User admin created!"));
