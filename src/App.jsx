import { Suspense, use, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import CustomerTickets from './Components/CustomerTickets/CustomerTickets';

const fetchTicket = async () => {
  const res = await fetch("/Ticket.json");
  return res.json()
}

const ticketPromise = fetchTicket()
const App = () => {
  const tickets = use(ticketPromise);
  const [ticketData, setTicketData] = useState(tickets)
  const [selectedData, setSelectedData] = useState([])
  const [resolveTickets, setResolveTickets] = useState([])


  const handleResolveTicket = (ResolveTicket) => {
    const newData = [...resolveTickets, ResolveTicket]
    setResolveTickets(newData)
    const filteredData = selectedData.filter(resolve => resolve.id !== ResolveTicket.id)
    setSelectedData(filteredData)
    toast("Task Resolve")
  }


  const handleSelectedTicket = (ticket) => {
    const newData = [...selectedData, ticket]
    setSelectedData(newData)
    const filteredData = ticketData.filter(restTicket => restTicket.id !== ticket.id)
    setTicketData(filteredData)
    toast("Task Added")
  };

  return (
    <div >
      <div className='max-w-[1600px] mx-auto'>
        <Navbar ></Navbar>
        <Banner inProgress={selectedData.length} resolved={resolveTickets.length}></Banner>
        <Suspense fallback={<h1>Loading</h1>}>
          <CustomerTickets
            ticketData={ticketData}
            handleSelectedTicket={handleSelectedTicket}
            selectedData={selectedData}
            handleResolveTicket={handleResolveTicket}
            resolveTickets={resolveTickets}
          ></CustomerTickets>
        </Suspense>

      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;