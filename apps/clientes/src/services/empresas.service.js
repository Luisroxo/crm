"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresasService = void 0;
const common_1 = require("@nestjs/common");
let EmpresasService = class EmpresasService {
    constructor() {
        this.empresas = [];
    }
    create(createEmpresaDto) {
        const empresa = {
            id: (this.empresas.length + 1).toString(),
            ...createEmpresaDto,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.empresas.push(empresa);
        return empresa;
    }
    findAll() {
        return this.empresas;
    }
    findOne(id) {
        return this.empresas.find((e) => e.id === id);
    }
    update(id, updateEmpresaDto) {
        const empresa = this.findOne(id);
        if (!empresa)
            return null;
        Object.assign(empresa, updateEmpresaDto, { updatedAt: new Date() });
        return empresa;
    }
    remove(id) {
        const index = this.empresas.findIndex((e) => e.id === id);
        if (index === -1)
            return null;
        const [removed] = this.empresas.splice(index, 1);
        return removed;
    }
};
exports.EmpresasService = EmpresasService;
exports.EmpresasService = EmpresasService = __decorate([
    (0, common_1.Injectable)()
], EmpresasService);
