module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'ls-0960b3d63ce3dff9561899490952b04e317332dd.chhdowwo4yea.ap-south-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'dbbereka'),
      user: env('DATABASE_USERNAME', 'kethi'),
      password: env('DATABASE_PASSWORD', 'Keimah(*&321'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
