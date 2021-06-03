import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CandidatesModule } from './candidates/candidates.module';
import { AdminsModule } from './admins/admins.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CandidatesModule,
    AdminsModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      typePaths: ['./src/candidates/graphql/candidates.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql-candidates.ts'),
        outputAs: 'class',
      },
      include: [CandidatesModule],
      path: '/candidates',
    }),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      typePaths: ['./src/admins/graphql/admins.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql-admins.ts'),
        outputAs: 'class',
      },
      include: [AdminsModule],
      path: '/admins',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
