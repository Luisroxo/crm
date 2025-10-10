"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IaAutoRepliesController = void 0;
const common_1 = require("@nestjs/common");
const create_ia_auto_reply_dto_1 = require("./dto/create-ia-auto-reply.dto");
const update_ia_auto_reply_dto_1 = require("./dto/update-ia-auto-reply.dto");
let IaAutoRepliesController = class IaAutoRepliesController {
    create(dto) {
        // lógica de criação
        return { message: 'Resposta automática criada', dto };
    }
    findAll() {
        // lógica de listagem
        return { message: 'Listar respostas automáticas' };
    }
    findOne(id) {
        // lógica de busca
        return { message: `Buscar resposta automática ${id}` };
    }
    update(id, dto) {
        // lógica de atualização
        return { message: `Atualizar resposta automática ${id}`, dto };
    }
    remove(id) {
        // lógica de remoção
        return { message: `Remover resposta automática ${id}` };
    }
};
exports.IaAutoRepliesController = IaAutoRepliesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ia_auto_reply_dto_1.CreateIaAutoReplyDto]),
    __metadata("design:returntype", void 0)
], IaAutoRepliesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IaAutoRepliesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IaAutoRepliesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ia_auto_reply_dto_1.UpdateIaAutoReplyDto]),
    __metadata("design:returntype", void 0)
], IaAutoRepliesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IaAutoRepliesController.prototype, "remove", null);
exports.IaAutoRepliesController = IaAutoRepliesController = __decorate([
    (0, common_1.Controller)('ia-auto-replies')
], IaAutoRepliesController);
