"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefasService = void 0;
const common_1 = require("@nestjs/common");
const create_tarefa_dto_1 = require("../dto/create-tarefa.dto");
let TarefasService = class TarefasService {
    constructor() {
        this.tarefas = [];
    }
    create(createTarefaDto) {
        const tarefa = {
            id: (this.tarefas.length + 1).toString(),
            ...createTarefaDto,
            status: createTarefaDto.status || create_tarefa_dto_1.StatusTarefa.PENDENTE,
            dataCriacao: new Date(),
            dataLimite: createTarefaDto.dataLimite ? new Date(createTarefaDto.dataLimite) : undefined,
            dataConclusao: undefined,
        };
        this.tarefas.push(tarefa);
        return tarefa;
    }
    findAll() {
        return this.tarefas;
    }
    findOne(id) {
        return this.tarefas.find((t) => t.id === id);
    }
    update(id, updateTarefaDto) {
        const tarefa = this.findOne(id);
        if (!tarefa)
            return null;
        Object.assign(tarefa, updateTarefaDto);
        if (updateTarefaDto.dataLimite)
            tarefa.dataLimite = new Date(updateTarefaDto.dataLimite);
        if (updateTarefaDto.dataConclusao)
            tarefa.dataConclusao = new Date(updateTarefaDto.dataConclusao);
        return tarefa;
    }
    remove(id) {
        const index = this.tarefas.findIndex((t) => t.id === id);
        if (index === -1)
            return null;
        const [removed] = this.tarefas.splice(index, 1);
        return removed;
    }
};
exports.TarefasService = TarefasService;
exports.TarefasService = TarefasService = __decorate([
    (0, common_1.Injectable)()
], TarefasService);
