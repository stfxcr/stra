module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '198.54.116.86'),
      port: env.int('DATABASE_PORT', 21098),
      database: env('DATABASE_NAME', 'mizoitme_kethi'),
      user: env('DATABASE_USERNAME', 'mizoitme_rin'),
      password: env('DATABASE_PASSWORD', 'Keimah&*(987#@!'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
