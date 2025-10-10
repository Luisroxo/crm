"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutomationTriggerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_automation_trigger_dto_1 = require("./create-automation-trigger.dto");
class UpdateAutomationTriggerDto extends (0, mapped_types_1.PartialType)(create_automation_trigger_dto_1.CreateAutomationTriggerDto) {
}
exports.UpdateAutomationTriggerDto = UpdateAutomationTriggerDto;
