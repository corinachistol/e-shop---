var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Fastify from 'fastify';
import { Product } from './product/entities.js';
import { postProduct } from './product/api.js';
import { Client } from './client/entities.js';
import { getAllClients, postClient } from './client/api.js';
const fastify = Fastify({ logger: true });
fastify.register(import('fastify-typeorm-plugin'), {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'e_shop_ff_orm',
    username: 'postgres',
    password: 'postsql123',
    logging: true,
    synchronize: true,
    entities: [Product, Client],
});
fastify.register(postProduct);
fastify.register(getAllClients);
fastify.register(postClient);
fastify.get('/', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield fastify.orm
        .getRepository(Product)
        .createQueryBuilder('products')
        .getMany();
    const newPayload = products.map(item => {
        return Object.assign(Object.assign({}, item), { _type: 'Products', price: Object.assign(Object.assign({}, item.price), { _type: 'Money' }) });
    });
    reply.code(200).send(newPayload);
}));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fastify.listen({ port: 3000 });
        fastify.log.info(`Server is listening on port:3000`);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
start();
