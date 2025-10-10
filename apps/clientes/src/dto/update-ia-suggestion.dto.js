"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIaSuggestionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ia_suggestion_dto_1 = require("./create-ia-suggestion.dto");
class UpdateIaSuggestionDto extends (0, mapped_types_1.PartialType)(create_ia_suggestion_dto_1.CreateIaSuggestionDto) {
}
exports.UpdateIaSuggestionDto = UpdateIaSuggestionDto;
