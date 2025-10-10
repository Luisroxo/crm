"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutomationFlowDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_automation_flow_dto_1 = require("./create-automation-flow.dto");
class UpdateAutomationFlowDto extends (0, mapped_types_1.PartialType)(create_automation_flow_dto_1.CreateAutomationFlowDto) {
}
exports.UpdateAutomationFlowDto = UpdateAutomationFlowDto;
