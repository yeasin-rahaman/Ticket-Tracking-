const CustomerTicketCart = ({ handleSelectedTicket, ticket }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-md">
                <div className="card-body p-4" onClick={() => handleSelectedTicket(ticket)}>

                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-sm">
                            {ticket.title}
                        </h3>

                        <div
                            className={`flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap
    ${ticket.status === "Open"
                                    ? "bg-green-500/10 text-green-500 border border-green-500/30"
                                    : ticket.status === "In Progress"
                                        ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/30"
                                        : "bg-gray-500/10 text-gray-500 border border-gray-500/30"
                                }`}
                        >
                            <span
                                className={`w-2 h-2 rounded-full 
      ${ticket.status === "Open"
                                        ? "bg-green-500"
                                        : ticket.status === "In Progress"
                                            ? "bg-yellow-500"
                                            : "bg-gray-400"
                                    }`}
                            ></span>

                            {ticket.status}
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                        {ticket.description}
                    </p>

                    <div className="flex justify-between items-center mt-4 text-xs">
                        <div className="flex">
                            <p className="text-gray-400 me-2">{ticket.id}</p>
                            <p
                                className={`font-medium ${ticket.priority === "High"
                                    ? "text-red-500"
                                    : ticket.priority === "Medium"
                                        ? "text-yellow-500"
                                        : "text-green-500"
                                    }`}
                            >
                                {ticket.priority} Priority
                            </p>
                        </div>

                        <div className="text-right text-gray-400 flex">
                            <p className="me-2">{ticket.customer}</p>
                            <p>{ticket.createdAt}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CustomerTicketCart;