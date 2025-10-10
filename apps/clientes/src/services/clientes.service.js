"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
/**
 * Service de Clientes - pronto para integração com banco de dados.
 *
 * ATENÇÃO: Implemente os métodos usando ORM (ex: Prisma) ou outro acesso a dados.
 */
let ClientesService = class ClientesService {
    constructor() {
        this.clientes = [];
        this.idSeq = 1;
    }
    create(createClienteDto) {
        const cliente = { id: this.idSeq++, ...createClienteDto };
        this.clientes.push(cliente);
        return cliente;
    }
    findAll() {
        return this.clientes;
    }
    findOne(id) {
        return this.clientes.find(c => c.id === Number(id));
    }
    update(id, updateClienteDto) {
        const cliente = this.findOne(id);
        if (!cliente)
            return null;
        Object.assign(cliente, updateClienteDto);
        return cliente;
    }
    remove(id) {
        const idx = this.clientes.findIndex(c => c.id === Number(id));
        if (idx === -1)
            return null;
        const [removido] = this.clientes.splice(idx, 1);
        return removido;
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)()
], ClientesService);
