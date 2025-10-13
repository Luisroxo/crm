import { Module } from '@nestjs/common';
import { ClientesController } from '@/clientes.controller';
import { ClientesService } from '@/services/clientes.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { HealthController } from './health.controller';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validationSchema: Joi.object({
				JWT_SECRET: Joi.string().required(),
				DATABASE_URL: Joi.string().required(),
				PORT: Joi.number().default(3002),
			}),
		}),
	],
	controllers: [ClientesController, HealthController],
	providers: [ClientesService],
})
export class AppModule {}
