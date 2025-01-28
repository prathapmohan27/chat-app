import express, { Router } from 'express';
import passport from 'passport';
import { register } from '../controller/auth.controller';
import { userValidationRules, validate } from '../middleware/authMiddleware';

const authRoute: Router = express.Router();

authRoute.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/profile',
  }),
);
authRoute.post('/register', userValidationRules(), validate, register);

export default authRoute;
