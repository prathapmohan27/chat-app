import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { statusCode } from '../utils/statusCode';

export const userValidationRules = () => {
  return [
    body('name').isString().isLength({ min: 3 }),
    body('username').isEmail(),
    body('password').isLength({ min: 5 }),
  ];
};

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(statusCode.BAD_REQUEST).json({ errors: errors.array() });
    return;
  }
  next();
};
