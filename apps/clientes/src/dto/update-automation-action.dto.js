"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutomationActionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_automation_action_dto_1 = require("./create-automation-action.dto");
class UpdateAutomationActionDto extends (0, mapped_types_1.PartialType)(create_automation_action_dto_1.CreateAutomationActionDto) {
}
exports.UpdateAutomationActionDto = UpdateAutomationActionDto;
