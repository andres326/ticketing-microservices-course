import { NotFoundError, requireAuth } from '@pabloctickets/common';
import express, { Request, Response } from 'express';
import { Order } from '../models/order';

const router = express.Router();

router.get('/api/orders', requireAuth, async (req: Request, res: Response) => {
  const userId = req.currentUser!.id;

  const orders = await Order.find({ userId }).populate('ticket');

  if (orders.length === 0) {
    throw new NotFoundError();
  }

  res.send(orders);
});

export { router as indexOrderRouter };
