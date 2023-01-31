import { Publisher, Subjects, TicketCreatedEvent } from '@pabloctickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
