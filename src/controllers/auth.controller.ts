import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { loginSchema } from '../schemas/auth.schema';

export const login = (req: Request, res: Response) => {
    res.send('ok');
}