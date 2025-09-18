import { PartialType } from '@nestjs/mapped-types';
import { CreateIaSuggestionDto } from './create-ia-suggestion.dto';

export class UpdateIaSuggestionDto extends PartialType(CreateIaSuggestionDto) {}
