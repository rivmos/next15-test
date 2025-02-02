import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";
import * as Sentry from "@sentry/nextjs"

export default async function TicketFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {

        const { customerId, ticketId } = await searchParams

        if (!customerId && !ticketId) {
            return (
                <>
                    <h3 className="mb-2">Ticket ID or Customer ID required to load ticket form</h3>
                    <BackButton title="Go Back" variant="default" />
                </>
            )
        }

        // New ticket form 
        if (customerId) {
            const customer = await getCustomer(parseInt(customerId))

            if (!customer) {
                return (
                    <>
                        <h3 className="text-2xl mb-2">Customer ID #{customerId} not found</h3>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }

            if (!customer.active) {
                return (
                    <>
                        <h3 className="text-2xl mb-2">Customer ID #{customerId} is not active.</h3>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }
        }

        // Edit ticket form 
        if (ticketId) {
            const ticket = await getTicket(parseInt(ticketId))

            if (!ticket) {
                return (
                    <>
                        <h3 className="text-2xl mb-2">Ticket ID #{ticketId} not found</h3>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }

            const customer = await getCustomer(ticket.customerId)

            // return ticket form 
            console.log('ticket: ', ticket)
            console.log('customer: ', customer)

        }

    } catch (e) {
        if (e instanceof Error) {
            Sentry.captureException(e)
            throw e
        }
    }
}