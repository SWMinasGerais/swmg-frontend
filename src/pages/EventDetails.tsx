import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { events } from '@/modules/events/data';

export default function EventDetails() {
    const { slug, id } = useParams();
    const param = slug ?? id;

    // Find event by slug, id, or by url
    const event = events.find(
        (e) => e.slug === param || e.id.toString() === param || e.url?.endsWith(`/${param}`)
    );

    if (!event) {
        return <Navigate to="/#eventos" replace />;
    }

    return (
        <div className="min-h-screen flex flex-col pt-20 bg-slate-50">
            <Navbar />

            <main className="flex-grow">
                {/* Header Cover */}
                <div className="w-full h-80 md:h-[450px] relative bg-slate-950 overflow-hidden">
                    {event.image ? (
                        <>
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
                        </>
                    ) : (
                        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900 via-slate-900 to-black opacity-90" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-4 max-w-4xl mx-auto transform translate-y-4">
                            <Badge className="mb-6 bg-red-600/90 hover:bg-red-600 text-white border-none py-1.5 px-4 text-sm font-medium tracking-wide shadow-lg shadow-red-900/50 backdrop-blur-md">STARTUP WEEKEND</Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-sm">{event.title}</h1>
                            <p className="text-xl md:text-2xl text-slate-300 font-medium">{event.city}</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-0 max-w-5xl">
                    <div className="glass-card rounded-3xl p-8 md:p-12 -mt-24 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="bg-slate-100 p-3 rounded-full text-slate-600">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Data</p>
                                    <p className="font-semibold">{event.date}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-slate-100 p-3 rounded-full text-slate-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Local</p>
                                    <p className="font-semibold">{event.location}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-slate-100 p-3 rounded-full text-slate-600">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Vagas</p>
                                    {event.status === 'past' ? (
                                        <p className="font-semibold">Concluído</p>
                                    ) : (
                                        <p className="font-semibold">
                                            {event.remainingSlots} de {event.totalSlots}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="prose max-w-none mb-8">
                            <h2 className="text-2xl font-bold mb-4">Sobre o Evento</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">{event.description}</p>
                        </div>

                        {/* Historico / Winners */}
                        {(event.winners || event.participants || event.organizers) && (
                            <div className="bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl p-8 mb-8 border border-slate-100 dark:border-slate-800">
                                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Histórico da Edição</h3>
                                <div className="space-y-5">
                                    {event.winners && (
                                        <div className="flex gap-4 items-center bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                            <div className="bg-amber-100 dark:bg-amber-900/30 p-2.5 rounded-full">
                                                <Trophy className="w-6 h-6 text-amber-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">Startup Vencedora</p>
                                                <p className="text-lg font-bold text-slate-900 dark:text-white">{event.winners}</p>
                                            </div>
                                        </div>
                                    )}
                                    {event.organizers && (
                                        <div className="flex gap-4 items-center bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-full">
                                                <Users className="w-6 h-6 text-blue-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">Mentores e Facilitadores</p>
                                                <p className="text-lg font-medium text-slate-800 dark:text-slate-200">{event.organizers}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {event.status !== 'past' && (
                            <div className="text-center pt-8 border-t border-slate-100">
                                <Button size="lg" className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-12">
                                    Garantir meu ingresso
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
