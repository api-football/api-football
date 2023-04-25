import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class PlayerValidationParams implements PipeTransform {
  transform(value, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException(
        `O valor do parâmetro ${metadata.data} deve estar preenchido`,
      );
    }

    return value;
  }
}
