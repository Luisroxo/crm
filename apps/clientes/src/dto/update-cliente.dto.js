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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClienteDto = void 0;
/**
 * DTO para atualização dos dados de um cliente.
 * Todos os campos são opcionais e validados.
 */
const class_validator_1 = require("class-validator");
class UpdateClienteDto {
}
exports.UpdateClienteDto = UpdateClienteDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O nome deve ser uma string.' }),
    (0, class_validator_1.Length)(3, 100, { message: 'O nome deve ter entre 3 e 100 caracteres.' }),
    __metadata("design:type", String)
], UpdateClienteDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: 'E-mail inválido.' }),
    __metadata("design:type", String)
], UpdateClienteDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O telefone deve ser uma string.' }),
    __metadata("design:type", String)
], UpdateClienteDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O endereço deve ser uma string.' }),
    __metadata("design:type", String)
], UpdateClienteDto.prototype, "endereco", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O ID da empresa deve ser uma string.' }),
    __metadata("design:type", String)
], UpdateClienteDto.prototype, "empresaId", void 0);
