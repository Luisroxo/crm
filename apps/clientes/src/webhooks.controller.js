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
exports.WebhooksController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
// Simulação de armazenamento em memória para webhooks
const webhooks = [];
let WebhooksController = class WebhooksController {
    register(body) {
        if (!body.url || !body.eventos?.length) {
            throw new common_1.HttpException('URL e eventos são obrigatórios', common_1.HttpStatus.BAD_REQUEST);
        }
        const id = Math.random().toString(36).substring(2, 10);
        webhooks.push({ id, url: body.url, eventos: body.eventos });
        return { id, url: body.url, eventos: body.eventos };
    }
    list() {
        return webhooks;
    }
    remove(id) {
        const idx = webhooks.findIndex(w => w.id === id);
        if (idx === -1)
            throw new common_1.HttpException('Webhook não encontrado', common_1.HttpStatus.NOT_FOUND);
        webhooks.splice(idx, 1);
        return { message: 'Webhook removido', id };
    }
    test(id) {
        const webhook = webhooks.find(w => w.id === id);
        if (!webhook)
            throw new common_1.HttpException('Webhook não encontrado', common_1.HttpStatus.NOT_FOUND);
        // Aqui seria feito o envio real (simulado)
        return { message: 'Teste enviado para ' + webhook.url, eventos: webhook.eventos };
    }
};
exports.WebhooksController = WebhooksController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebhooksController.prototype, "register", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WebhooksController.prototype, "list", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WebhooksController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('testar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WebhooksController.prototype, "test", null);
exports.WebhooksController = WebhooksController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('webhooks')
], WebhooksController);
