{
  backends: ["statsd-influxdb-backend"],

  influxdb: {
    host: process.env.INFLUXDB_PORT_8086_TCP_ADDR,
    port: process.env.INFLUXDB_PORT_8086_TCP_PORT,
    version: 0.9,
    database: process.env.INFLUXDB_DATABASE,
    username: process.env.INFLUXDB_USERNAME,
    password: process.env.INFLUXDB_PASSWORD,
  }
}
