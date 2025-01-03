import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
    imports: [

      UsuarioModule,
      ConfigModule,
      
      PassportModule.register({ defaultStrategy: 'jwt' }),

      JwtModule.registerAsync({
        imports: [ ConfigModule ],
        inject: [ ConfigService ],
        useFactory: ( configService: ConfigService ) => {
  
          return {
            secret: configService.get('JWT_SECRET'),
            signOptions: { expiresIn: '4h' }
          }
  
        }
      })

    ],
    providers: [AuthService, AuthResolver, JwtStrategy],
    exports: [ JwtStrategy, PassportModule, JwtModule ]
})
export class AuthModule {}
