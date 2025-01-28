import { Request } from 'express';
import passport from 'passport';
import {
  IStrategyOptionsWithRequest,
  IVerifyOptions,
  Strategy as LocalStrategy,
} from 'passport-local';
import { findUserByEmail, findUserById } from '../service/user.service';
import { validatePassword } from '../utils/password';

const customFields: IStrategyOptionsWithRequest = {
  usernameField: 'rick9098@yopmail.com',
  passwordField: 'password',
  passReqToCallback: true,
};

const verifyCallback = (
  req: Request,
  username: string,
  password: string,
  done: (
    error: any,
    user?: Express.User | false,
    options?: IVerifyOptions,
  ) => void,
) => {
  findUserByEmail(username)
    .then((user) => {
      if (!user) {
        return done(null, false);
      }
      const isValid = validatePassword(password, user.hash, user.salt);
      if (isValid) {
        return done(null, false);
      }
      return done(null, user);
    })
    .catch((err) => {
      done(err);
    });
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.serializeUser((user: Express.User, done) => {
  done(null, user);
});

passport.deserializeUser((id: string, done) => {
  findUserById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

export const startPassport = () => {
  passport.use(strategy);
};
