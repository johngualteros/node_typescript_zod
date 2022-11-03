import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { schemaValidator } from '../middlewares/schemaValidator.middleware';
import { loginSchema } from '../schemas/auth.schema';

const router = Router();

router.post('/login',schemaValidator(loginSchema), login);

export default router;