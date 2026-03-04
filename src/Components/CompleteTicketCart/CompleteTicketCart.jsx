import React from 'react';

const CompleteTicketCart = ({ ticket, handleResolveTicket }) => {
    return (

        <div className="card bg-base-100 shadow-md mb-4">
            <div className="card-body p-4">
                <p className="text-sm mb-3">{ticket.title}</p>
                <button onClick={() => { handleResolveTicket(ticket) }} className="btn btn-success btn-sm w-full">
                    Complete
                </button>
            </div>

        </div>
    );
};

export default CompleteTicketCart;