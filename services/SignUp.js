import sql from "mssql";

const config = {
    user: "SazsApps_Quarry",
    password: "6^S1jf4q",
    database: "Sazs_Quarry2.0_demo",
    server: "SG2NWPLS19SQL-v04.mssql.shr.prod.sin2.secureserver.net",
    options: {
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

export const createNewUser = async (firstname, lastname, email, password) => {
    sql.connect(config);
    const request = new sql.Request();
    request.input("FirstName", sql.NVarChar, firstname);
    request.input("LastName", sql.NVarChar, lastname);
    request.input("Email", sql.NVarChar, email);
    request.input("Password", sql.NVarChar, password);
    const result = await request.execute("dbo.signup");
    return result.recordset;
}