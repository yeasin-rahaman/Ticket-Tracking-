import { Suspense, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import CustomerTickets from './Components/CustomerTickets/CustomerTickets';

const fetchTicket = async () => {
  const res = await fetch("/Ticket.json");
  return res.json()
}

const ticketPromise = fetchTicket()
const App = () => {
  const [availableBalance, setAvailableBalance] = useState(10000000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(ply => ply.player_name !== p.player_name)
    setPurchasedPlayers(filteredData)
    const PlayerPrice = parseInt(p.price.split("USD").join("").split(",").join(""))
    setAvailableBalance(availableBalance + PlayerPrice)

  }
  return (
    <div >
      <div className='max-w-[1600px] mx-auto'>
        <Navbar ></Navbar>
        <Banner></Banner>
        <Suspense fallback={<h1>Loading</h1>}>
          <CustomerTickets ticketPromise={ticketPromise}></CustomerTickets>
        </Suspense>

      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;