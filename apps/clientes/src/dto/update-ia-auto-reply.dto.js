"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIaAutoReplyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ia_auto_reply_dto_1 = require("./create-ia-auto-reply.dto");
class UpdateIaAutoReplyDto extends (0, mapped_types_1.PartialType)(create_ia_auto_reply_dto_1.CreateIaAutoReplyDto) {
}
exports.UpdateIaAutoReplyDto = UpdateIaAutoReplyDto;
