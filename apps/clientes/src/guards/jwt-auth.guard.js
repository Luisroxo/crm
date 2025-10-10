"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
// Exemplo simples de verificação de JWT no header Authorization
let JwtAuthGuard = class JwtAuthGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const auth = request.headers['authorization'];
        if (!auth || !auth.startsWith('Bearer ')) {
            throw new common_1.UnauthorizedException('Token JWT ausente');
        }
        // Aqui você faria a validação real do JWT (ex: usando jsonwebtoken)
        // Exemplo: jwt.verify(token, secret)
        // Por enquanto, apenas simula aceitação
        return true;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
