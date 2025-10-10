"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagensService = void 0;
const common_1 = require("@nestjs/common");
let MensagensService = class MensagensService {
    constructor() {
        this.mensagens = [];
    }
    create(createMensagemDto) {
        const mensagem = {
            id: (this.mensagens.length + 1).toString(),
            ...createMensagemDto,
            dataEnvio: new Date(),
        };
        this.mensagens.push(mensagem);
        return mensagem;
    }
    findAll() {
        return this.mensagens;
    }
    findOne(id) {
        return this.mensagens.find((m) => m.id === id);
    }
    update(id, updateMensagemDto) {
        const mensagem = this.findOne(id);
        if (!mensagem)
            return null;
        Object.assign(mensagem, updateMensagemDto);
        return mensagem;
    }
    remove(id) {
        const index = this.mensagens.findIndex((m) => m.id === id);
        if (index === -1)
            return null;
        const [removed] = this.mensagens.splice(index, 1);
        return removed;
    }
};
exports.MensagensService = MensagensService;
exports.MensagensService = MensagensService = __decorate([
    (0, common_1.Injectable)()
], MensagensService);
