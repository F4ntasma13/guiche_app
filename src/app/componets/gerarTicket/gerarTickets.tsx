interface Tickets {
  ticketArray: string[] | number[];
}

const GerarTicket = ({ticketArray}: Tickets) => {
  return (
    <ul>
      {ticketArray.map((ticket, index) => (
        <li key={index}>{ticket}</li>
      ))}
    </ul>
  );
};

export default GerarTicket