import React, { use } from "react";

const CustomerTickets = ({ ticketPromise }) => {
    const tickets = use(ticketPromise);
    console.log(tickets);
    return (
        <div className="min-h-screen p-8 bg-base-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {tickets.map((ticket) => {

                            const statusColor =
                                ticket.status === "Open"
                                    ? "bg-green-500"
                                    : ticket.status === "In Progress"
                                        ? "bg-yellow-500"
                                        : "bg-gray-400";

                            const priorityColor =
                                ticket.priority === "High"
                                    ? "text-red-500"
                                    : ticket.priority === "Medium"
                                        ? "text-yellow-500"
                                        : "text-green-500";

                            return (
                                <div key={ticket.id} className="card bg-base-100 shadow-md">
                                    <div className="card-body p-4">

                                        <div className="flex justify-between items-start">
                                            <h3 className="font-semibold text-sm">
                                                {ticket.title}
                                            </h3>

                                            <div className="badge badge-outline badge-sm">
                                                <span
                                                    className={`w-2 h-2 rounded-full mr-1 ${statusColor}`}
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
                                                <p className={`${priorityColor} font-medium`}>
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
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Task Status</h2>

                    <div className="card bg-base-100 shadow-md mb-4">
                        <div className="card-body p-4">
                            <p className="text-sm mb-3">Payment Failed - Card Declined</p>
                            <button className="btn btn-success btn-sm w-full">
                                Complete
                            </button>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md mb-4">
                        <div className="card-body p-4">
                            <p className="text-sm mb-3">Incorrect Billing Address</p>
                            <button className="btn btn-success btn-sm w-full">
                                Complete
                            </button>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body p-4">
                            <h3 className="font-medium mb-2">Resolved Task</h3>
                            <p className="text-xs text-gray-400">
                                No resolved tasks yet.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerTickets;