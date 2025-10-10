import { PartialType } from '@nestjs/mapped-types';
import { CreateIaProfileCompletionDto } from '@/dto/create-ia-profile-completion.dto';

export class UpdateIaProfileCompletionDto extends PartialType(CreateIaProfileCompletionDto) {}
