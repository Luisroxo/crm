import { PartialType } from '@nestjs/mapped-types';
import { CreateIaAutoReplyDto } from '@/dto/create-ia-auto-reply.dto';

export class UpdateIaAutoReplyDto extends PartialType(CreateIaAutoReplyDto) {}
