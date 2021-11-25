import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SyncModule } from './sync/sync.module';
import { CoreModule } from './core/core.module';

@Module({
    imports: [
        CoreModule,
        SyncModule
    ],
    controllers: [
        AppController
    ]
})
export class AppModule { }
