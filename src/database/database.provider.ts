import { DataSource } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'thanh',
        password: '123456',
        database: 'serverapi',
        entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
        synchronize: false,
      });
      return dataSource.initialize();
    },
  },
];
