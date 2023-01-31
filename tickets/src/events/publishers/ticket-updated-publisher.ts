import { Publisher, Subjects, TicketUpdatedEvent } from '@pabloctickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
