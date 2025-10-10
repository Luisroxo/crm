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
exports.MensagensController = void 0;
const common_1 = require("@nestjs/common");
const mensagens_service_1 = require("./services/mensagens.service");
const create_mensagem_dto_1 = require("./dto/create-mensagem.dto");
const update_mensagem_dto_1 = require("./dto/update-mensagem.dto");
let MensagensController = class MensagensController {
    constructor(mensagensService) {
        this.mensagensService = mensagensService;
    }
    create(createMensagemDto) {
        return this.mensagensService.create(createMensagemDto);
    }
    findAll() {
        return this.mensagensService.findAll();
    }
    findOne(id) {
        return this.mensagensService.findOne(id);
    }
    update(id, updateMensagemDto) {
        return this.mensagensService.update(id, updateMensagemDto);
    }
    remove(id) {
        return this.mensagensService.remove(id);
    }
};
exports.MensagensController = MensagensController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mensagem_dto_1.CreateMensagemDto]),
    __metadata("design:returntype", void 0)
], MensagensController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MensagensController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MensagensController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mensagem_dto_1.UpdateMensagemDto]),
    __metadata("design:returntype", void 0)
], MensagensController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MensagensController.prototype, "remove", null);
exports.MensagensController = MensagensController = __decorate([
    (0, common_1.Controller)('mensagens'),
    __metadata("design:paramtypes", [mensagens_service_1.MensagensService])
], MensagensController);
