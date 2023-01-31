import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from '@pabloctickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
