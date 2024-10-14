interface Tickets {
  ticketArray: string[] | number[];
}

const GerarTicket = ({ticketArray}: Tickets) => {
  return (
    <ul className="flex flex-col space-y-4">
      {ticketArray.map((ticket, index) => (
        <li key={index}
        className="relative bg-yellow-100 text-center py-2 px-4 text-md font-semibold text-gray-900 
        border border-yellow-300 rounded-lg shadow-md"
        >
          <span className="text-teal-600">{ticket}</span></li>
      ))}
    </ul>
  );
};

export default GerarTicket