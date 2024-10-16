'use client'
import React from "react";
import TicketGeral from "./componets/gerarTicket/ticketGeral";


export default function Home() {
  return (
    <div>
      <header className="text-center">
        <h1 className="text-teal-700 text-3xl font-bold mb-6">
          Atendimento Geral
        </h1>
      </header>
      <div>
        <div className="coluna bg-white shadow-md p-4 rounded-lg text-center border border-teal-200">
          <div>
            <TicketGeral />
          </div>
        </div>
      </div>
    </div>
    
  );
}


