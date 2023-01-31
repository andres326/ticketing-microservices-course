import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from '@pabloctickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
