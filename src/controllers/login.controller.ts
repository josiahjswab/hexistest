// Uncomment these imports to begin using these cool features!

// ---------- ADD IMPORTS -------------
import {TokenService} from '@loopback/authentication';
import {
  MyUserService, TokenServiceBindings, UserRepository, UserServiceBindings
} from '@loopback/authentication-jwt';
import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {SecurityBindings, UserProfile} from '@loopback/security';
import {LoginRequest} from '../models/login-request.dto';


const LoginSchema: LoginRequest = {
  type: 'object'
}

export class LoginController {


  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: MyUserService,
    @inject(SecurityBindings.USER, {optional: true})
    public user: UserProfile,
    @repository(UserRepository) protected userRepository: UserRepository,
  ) {}
  // @post('/auth/login', {
  //   responses: {
  //     [STATUS_CODE.OK]: {
  //       description: 'Auth Code',
  //       content: {
  //         [CONTENT_TYPE.JSON]: Object,
  //       },
  //     },
  //   },
  // })
  // async login(
  //   @requestBody()
  //   req: LoginRequest,
  // ): Promise<{
  //   code: string;
  // }> {
  //   if (!this.client || !this.user) {
  //     throw new HttpErrors.Unauthorized(AuthErrorKeys.ClientInvalid);
  //   } else if (!req.client_secret) {
  //     throw new HttpErrors.BadRequest(AuthErrorKeys.ClientSecretMissing);
  //   }
  //   try {
  //     const codePayload: ClientAuthCode<User> = {
  //       clientId: req.client_id,
  //       userId: this.user.id,
  //     };
  //     const token = jwt.sign(codePayload, this.client.secret, {
  //       expiresIn: this.client.authCodeExpiration,
  //       audience: req.client_id,
  //       subject: req.username,
  //       issuer: process.env.JWT_ISSUER,
  //     });
  //     return {
  //       code: token,
  //     };
  //   } catch (error) {
  //     throw new HttpErrors.InternalServerError(
  //       AuthErrorKeys.InvalidCredentials,
  //     );
  //   }
  // }
}
