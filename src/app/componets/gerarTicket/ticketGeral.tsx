'use client'
import GerarTicket from "./gerarTickets";
import { useState } from "react";
import React from "react";

const TicketGeral = () => {
    const [contadorG, setContadorG] = useState(0)
    const [contadorP, setContadorP] = useState(0)
    const [contadorI, setContadorI] = useState(0)
    const [tickets, setTickets] = useState<string[]>([]);
    const [guiche1, setGuiche1] = useState<string | null>(null);
    const [guiche2, setGuiche2] = useState<string | null>(null);
    const [guiche3, setGuiche3] = useState<string | null>(null);
    const [atendimentosFinalizados, setAtendimentosFinalizados] = useState<string[]>([]);
    const [emAtendimento1, setEmAtendimento1] = useState(false);
    const [emAtendimento2, setEmAtendimento2] = useState(false);
    const [emAtendimento3, setEmAtendimento3] = useState(false);

    const ticketGeral = () => {
        const novoTicket = `GR00${contadorG + 1}`;
        setTickets((prevTickets) => [...prevTickets, novoTicket]);
        setContadorG(contadorG + 1);
      };

    const ticketPreferencia = () => {
        const novoTicket = `PR00${contadorP + 1}`;
        setTickets((prevTickets) => [...prevTickets, novoTicket]);
        setContadorP(contadorP + 1);
    };

    const ticketIdoso = () => {
        const novoTicket = `ID00${contadorI + 1}`;
        setTickets((prevTickets) => [...prevTickets, novoTicket]);
        setContadorI(contadorI + 1);
    };

    const atenderGuiche = (guicheSetter: React.Dispatch<React.SetStateAction<string | null>>, setAtendimento: React.Dispatch<React.SetStateAction<boolean>>) => {
        if (tickets.length > 0) {
          const proximoTicket = tickets[0];
          guicheSetter(proximoTicket);
          setTickets((prevTickets) => prevTickets.slice(1));
          setAtendimento(true);
        }
    };

    const finalizarGuiche = (guiche: string | null, guicheSetter: React.Dispatch<React.SetStateAction<string | null>>, setAtendimento: React.Dispatch<React.SetStateAction<boolean>>) => {
        if (guiche) {
            setAtendimentosFinalizados((prev) => [...prev, guiche]);
            guicheSetter(null);
            setAtendimento(false);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-cyan-100 font-sans flex">
                <div className="w-1/3 p-4">
                    <h3 className="text-teal-700 text-xl mb-4">Tickets</h3>
                    <div className="space-y-4">
                        <div className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                            <button onClick={ticketGeral}>Geral</button>
                        </div>
                        <div className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                            <button onClick={ticketIdoso}>Idoso</button>
                        </div>
                        <div className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                            <button onClick={ticketPreferencia}>Preferência</button>
                        </div>
                    </div>
                    <GerarTicket ticketArray={tickets} />
                </div>

                <div className="w-2/3 flex space-x-8 p-4">

                    <div className="bg-white shadow-md p-4 rounded-lg text-center border border-teal-200">
                        <h2 className="text-teal-700 text-xl mb-4">Guichê 1:</h2>
                        <div className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                            <button onClick={() => emAtendimento1 
                                ? finalizarGuiche(guiche1, setGuiche1, setEmAtendimento1) 
                                : atenderGuiche(setGuiche1, setEmAtendimento1)}>
                                {emAtendimento1 ? "Finalizar" : "Atender"}
                            </button>
                        </div>
                        <div>{guiche1 ? <p>{guiche1}</p> : <p>Aguardando...</p>}</div>
                    </div>

                    <div className="bg-white shadow-md p-4 rounded-lg text-center border border-teal-200">
                        <h2 className="text-teal-700 text-xl mb-4">Guichê 2:</h2>
                        <div className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                            <button onClick={() => emAtendimento2 
                                ? finalizarGuiche(guiche2, setGuiche2, setEmAtendimento2) 
                                : atenderGuiche(setGuiche2, setEmAtendimento2)}>
                                {emAtendimento2 ? "Finalizar" : "Atender"}
                            </button>
                        </div>
                        <div>{guiche2 ? <p>{guiche2}</p> : <p>Aguardando...</p>}</div>
                    </div>

                    <div className="bg-white shadow-md p-4 rounded-lg text-center border border-teal-200">
                        <h2 className="text-teal-700 text-xl mb-4">Guichê 3:</h2>
                        <div className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                            <button onClick={() => emAtendimento3 
                                ? finalizarGuiche(guiche3, setGuiche3, setEmAtendimento3) 
                                : atenderGuiche(setGuiche3, setEmAtendimento3)}>
                                {emAtendimento3 ? "Finalizar" : "Atender"}
                            </button>
                        </div>
                        <div>{guiche3 ? <p>{guiche3}</p> : <p>Aguardando...</p>}</div>
                    </div>

                </div>

                <div className="w-full p-4">
                    <h3 className="text-teal-700 text-xl mb-4">Atendimentos Finalizados</h3>
                    {atendimentosFinalizados.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {atendimentosFinalizados.map((ticket, index) => (
                                <li key={index}>{ticket}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nenhum atendimento finalizado.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default TicketGeral;
