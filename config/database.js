module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'aiprrmoh_bereka'),
      user: env('DATABASE_USERNAME', 'aiprrmoh_kethi'),
      password: env('DATABASE_PASSWORD', 'Keimah&*(987#@!'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
