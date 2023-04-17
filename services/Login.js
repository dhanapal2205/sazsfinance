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

export const newUsers = async (users,password) => {
    sql.connect(config);
    const request = new sql.Request();
    request.input("NewUsers", sql.NVarChar, users);
    request.input("Password", sql.NVarChar, password);
    const result = await request.execute("dbo.login");
    return result.recordset;
}