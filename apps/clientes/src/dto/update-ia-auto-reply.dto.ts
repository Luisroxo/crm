import { PartialType } from '@nestjs/mapped-types';
import { CreateIaAutoReplyDto } from './create-ia-auto-reply.dto';

export class UpdateIaAutoReplyDto extends PartialType(CreateIaAutoReplyDto) {}
