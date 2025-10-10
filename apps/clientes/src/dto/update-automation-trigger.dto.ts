import { PartialType } from '@nestjs/mapped-types';
import { CreateAutomationTriggerDto } from '@/dto/create-automation-trigger.dto';

export class UpdateAutomationTriggerDto extends PartialType(CreateAutomationTriggerDto) {}
