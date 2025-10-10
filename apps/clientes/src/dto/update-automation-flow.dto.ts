import { PartialType } from '@nestjs/mapped-types';
import { CreateAutomationFlowDto } from '@/dto/create-automation-flow.dto';

export class UpdateAutomationFlowDto extends PartialType(CreateAutomationFlowDto) {}
