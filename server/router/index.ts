import { Router } from "express";
import Data from './data';

const router = Router();

router.use(Data);

export default router;