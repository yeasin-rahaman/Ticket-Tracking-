import CustomerTicketCart from "../CustomerTicketCart/CustomerTicketCart";
import CompleteTicketCart from "../CompleteTicketCart/CompleteTicketCart";

const CustomerTickets = ({ ticketData, handleSelectedTicket, selectedData, handleResolveTicket, resolveTickets }) => {


    return (
        <div className="min-h-screen p-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {ticketData.map((ticket) => (
                            <CustomerTicketCart
                                key={ticket.id}
                                ticket={ticket}
                                handleSelectedTicket={handleSelectedTicket}
                            ></CustomerTicketCart>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Task Status</h2>
                    {
                        selectedData.map((ticket) => (
                            <CompleteTicketCart
                                key={ticket.id}
                                ticket={ticket}
                                handleResolveTicket={handleResolveTicket}
                            >
                            </CompleteTicketCart>
                        ))
                    }
                    <h3 className="font-medium mb-2">Resolved Task</h3>
                    {
                        resolveTickets?.map((resolve) => (
                            <div key={resolve.id} className="card bg-base-100 shadow-md mt-2">

                                <div className="card-body p-4">
                                    <p className="text-xs text-gray-400">
                                        {resolve.title}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>


    );
};

export default CustomerTickets;