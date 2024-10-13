'use client'
import React from "react";
import TicketGeral from "./componets/gerarTicket/ticketGeral";


export default function Home() {
  return (
    <div>
      <header className="text-center">
        <h1 className="text-teal-700 text-3xl font-bold mb-6">
          Sistema de Gerenciamento de Tickets
        </h1>
      </header>
      <div>
        <div className="coluna bg-white shadow-md p-4 rounded-lg text-center border border-teal-200">

          <div>
            <TicketGeral />
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto flex justify-around my-8">
        <div className="coluna bg-white shadow-md p-4 rounded-lg text-center border border-teal-200">
          <h2 className="text-teal-700 text-xl mb-4">Guichê 1:</h2>
          
        </div>
        <div className="coluna bg-white shadow-md p-4 rounded-lg text-center border border-teal-200">
          <h2 className="text-teal-700 text-xl mb-4">Guichê 2:</h2>
        </div>
        <div className="coluna bg-white shadow-md p-4 rounded-lg text-center border border-teal-200">
          <h2 className="text-teal-700 text-xl mb-4">Guichê 3:</h2>
        </div>
      </div> */}

      {/* <div className="container mx-auto my-8">
        <h2 className="text-teal-700 text-2xl text-center mb-4">Clientes Atendidos</h2>
        <ul className="space-y-2 bg-white p-4 rounded-lg shadow-md">
        </ul>
      </div> */}

      {/* <div className="container mx-auto flex justify-center space-x-4 my-8">
        <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition">
          Logar
        </button>
        <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition">
          Deslogar
        </button>
      </div>

      <footer className="bg-teal-900 text-white text-center py-4 mt-8 shadow-lg">
        <p>Sistema de Gerenciamento de Tickets &copy; 2024</p>
      </footer> */}
    </div>
    
  );
}


