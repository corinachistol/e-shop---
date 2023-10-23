var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Fastify from "fastify";
import { Client, Name } from "./entities.js";
const fastify = Fastify({ logger: true });
export function getAllClients(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get('/clients', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const clients = yield fastify.orm
                .getRepository(Client)
                .createQueryBuilder('clients')
                .getMany();
            reply.code(200).send({ clients });
        }));
    });
}
export function postClient(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.route({
            method: "POST",
            url: "/clients/add",
            handler: (request, reply) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { first_name, last_name, phone, email, address, password } = request.body;
                    const newClient = new Client();
                    newClient.name = new Name();
                    newClient.name.first = first_name,
                        newClient.name.last = last_name,
                        newClient.phone = phone,
                        newClient.email = email,
                        newClient.address = address,
                        newClient.password = password,
                        console.log(newClient);
                    yield fastify.orm.manager.save(newClient);
                    return reply.code(201).send({ newClient });
                }
                catch (error) {
                    reply.code(500).send({ error: 'Error adding a new client!' });
                }
            })
        });
    });
}
//din tutorial
// fastify.get<{Querystring: IQueryInterface, Headers:IHeaders, Reply: IReply}>('/clients', async (request,reply)=>{
//     const { username,password } = request.body
//     return reply.send({
//         code:200,
//         message: "success",
//         body: {
//             username,password
//         }
//     })
// })
