'use client'
import GerarTicket from "./gerarTickets";
import { useState } from "react";
import React from "react";

const TicketGeral = () => {
    const [tickets, setTickets] = useState<string[]>([]);
    const [guiche1, setGuiche1] = useState<string>('');
    const [guiche2, setGuiche2] = useState<string>('');
    const [guiche3, setGuiche3] = useState<string>('');
    const [atendimentosFinalizados, setAtendimentosFinalizados] = useState<string[]>([]);
 

    const ticketGeral = () => {
        const atendimentoGeral = tickets.filter(ticket => ticket[0] === "G");    
        const atendidosGeral = atendimentosFinalizados.filter(ticket => ticket[0] === "G");
        const guiches = [guiche1, guiche2, guiche3].filter(ticket => ticket[0] === "G");
        const todosOsTicketsGeral = atendimentoGeral.concat(atendidosGeral, guiches);

        const novoTicket = `GR00${todosOsTicketsGeral.length + 1}`;
        setTickets([...tickets, novoTicket]);
    };
    const ticketPreferencia = () => {
        const atendimentoPreferencial = tickets.filter(ticket => ticket[0] === "P");
        const atendidosPreferencial = atendimentosFinalizados.filter(ticket => ticket[0] === "P");
        const guiches = [guiche1, guiche2, guiche3].filter(ticket => ticket[0] === "P");
        const todosOsTicketsPrefencial = atendimentoPreferencial.concat(atendidosPreferencial, guiches);
    
        const novoTicket = `PR00${todosOsTicketsPrefencial.length + 1}`;
        setTickets([...tickets, novoTicket]);        
    };
    const ticketIdoso = () => {
        const atendimentoIdoso = tickets.filter(ticket => ticket[0] === "I");
        const atendidosIdoso = atendimentosFinalizados.filter(ticket => ticket[0] === "I");
        const guiches = [guiche1, guiche2, guiche3].filter(ticket => ticket[0] === "I");
        const todosOsTicketsIdoso = atendimentoIdoso.concat(atendidosIdoso, guiches)

        const novoTicket = `ID00${todosOsTicketsIdoso.length + 1}`;
        setTickets([...tickets, novoTicket]);
    };

    const preference = () => {
        const filteredId = tickets.find(ticket => ticket.includes("ID"));
        const filteredPr = tickets.find(ticket => ticket.includes("PR"));
        const filteredGr = tickets.find(ticket => ticket.includes("GR"));
        if (filteredId) {
            return filteredId;
        } else if (filteredPr) {
            return filteredPr;
        } else if (filteredGr) {
            return filteredGr;
        }
    };   
     
    const atenderGuiche = (guicheNumber: number) => {
        const proximoTicket = preference();
        if (proximoTicket) {
          if(guicheNumber === 1) {
            setGuiche1(proximoTicket)
          } else if (guicheNumber === 2) {
            setGuiche2(proximoTicket)
          } else {
            setGuiche3(proximoTicket)
          }
          setTickets(tickets.filter(ticket => ticket !== proximoTicket));
        }
    };

    const finalizarGuiche = (guicheNumber: number) => {
        if (guicheNumber === 1) {
            setAtendimentosFinalizados((prev) => [...prev, guiche1]);
            setGuiche1('');
        } else if (guicheNumber === 2) {
            setAtendimentosFinalizados((prev) => [...prev, guiche2]);
            setGuiche2(''); 
        } else {
            setAtendimentosFinalizados((prev) => [...prev, guiche3]);
            setGuiche3(''); 
        }
    };

    return (
        <>
            <div className="min-h-24 bg-cyan-100 font-sans flex">
                <div className="bg-white rounded-lg border border-teal-200">
                    <h3 className="text-teal-700 text-xl mb-4 text-center">Aguardando atendimento</h3>
                    <div className=" flex space-x-12 rounded-lg text-center p-4">
                        <div className="bg-green-600 text-white py-2 px-8 rounded hover:bg-green-700 transition">
                            <button onClick={ticketGeral}>Geral</button>
                        </div>
                        <div className="bg-green-600 text-white py-2 px-8 rounded hover:bg-green-700 transition">
                            <button onClick={ticketIdoso}>Idoso</button>
                        </div>
                        <div className="bg-green-600 text-white py-2 px-8 rounded hover:bg-green-700 transition">
                            <button onClick={ticketPreferencia}>Preferência</button>
                        </div>
                    </div>
                    <GerarTicket ticketArray={tickets} />
                </div>

                <div className="w-2/3 flex space-x-4 p-4">

                    <div className="bg-white shadow-md p-4 rounded-lg text-center border border-teal-200">
                        <h2 className="text-teal-700 text-xl mb-4">Guichê 1:</h2>
                        <div className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                            <button onClick={() => guiche1 
                                ? finalizarGuiche(1) 
                                : atenderGuiche(1)}
                                disabled={tickets.length === 0 && !guiche1}
                                className={tickets.length === 0  && !guiche1 ? "opacity-50 cursor-not-allowed" : "active" }
                                >
                                {guiche1 ? "Finalizar" : "Atender"}
                            </button>
                        </div>
                        <div>{guiche1 ? <p className="text-teal-600 relative bg-yellow-100 text-center py-2 px-4 text-md font-semibold text-gray-900 
                            border border-yellow-300 rounded-lg shadow-md">{guiche1}</p> : <p>Aguardando...</p>}
                        </div>
                    </div>

                    <div className="bg-white shadow-md p-4 rounded-lg text-center border border-teal-200">
                        <h2 className="text-teal-700 text-xl mb-4">Guichê 2:</h2>
                        <div className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                            <button onClick={() => guiche2 
                                ? finalizarGuiche(2) 
                                : atenderGuiche(2)}
                                disabled={tickets.length === 0 && !guiche2}
                                className={tickets.length === 0  && !guiche2 ? "opacity-50 cursor-not-allowed" : "active" }
                                >
                                {guiche2 ? "Finalizar" : "Atender"}
                            </button>
                        </div>
                        <div>{guiche2 ? <p className="text-teal-600 relative bg-yellow-100 text-center py-2 px-4 text-md font-semibold text-gray-900 
                            border border-yellow-300 rounded-lg shadow-md">{guiche2}</p> : <p>Aguardando...</p>}
                        </div>
                    </div>

                    <div className="bg-white shadow-md p-4 rounded-lg text-center border border-teal-200">
                        <h2 className="text-teal-700 text-xl mb-4">Guichê 3:</h2>
                        <div className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                            <button onClick={() => guiche3 
                                ? finalizarGuiche(3) 
                                : atenderGuiche(3)}
                                disabled={tickets.length === 0 && !guiche3}
                                className={tickets.length === 0  && !guiche3 ? "opacity-50 cursor-not-allowed" : "active" }
                                >
                                {guiche3 ? "Finalizar" : "Atender"}
                            </button>
                        </div>
                        <div>{guiche3 ? <p className="text-teal-600 relative bg-yellow-100 text-center py-2 px-4 text-md font-semibold text-gray-900 
                            border border-yellow-300 rounded-lg shadow-md">{guiche3}</p> : <p>Aguardando...</p>}
                        </div>
                    </div>

                </div>

                <div className="w-full p-4">
                    <h3 className="text-teal-700 text-xl mb-4">Atendimentos Finalizados</h3>
                    {atendimentosFinalizados.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {atendimentosFinalizados.map((ticket, index) => (
                                <li className="text-teal-600 relative bg-yellow-100 text-center py-2 px-4 text-md font-semibold text-gray-900 
                                border border-yellow-300 rounded-lg shadow-md" key={index}>{ticket}</li>
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
