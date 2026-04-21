import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const applicationSchema = z.object({
    name: z.string().min(2, 'Nome muito curto'),
    email: z.string().email('E-mail inválido'),
    linkedin: z.string().url('URL inválida').optional().or(z.literal('')),
    role: z.enum(['facilitator', 'mentor', 'judge']),
    event: z.string().min(1, 'Selecione um evento'),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

export default function Apply() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<ApplicationForm>({
        resolver: zodResolver(applicationSchema),
    });

    const onSubmit = async (data: ApplicationForm) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar inscrição');
            }

            toast.success('Inscrição enviada com sucesso!');
        } catch (error) {
            toast.error('Ocorreu um erro ao enviar sua inscrição. Tente novamente.');
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center rounded-full bg-red-50 dark:bg-red-500/10 px-3 py-1 text-sm font-medium text-red-600 dark:text-red-400 mb-4 ring-1 ring-inset ring-red-500/20">
                        Faça Parte
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Inscrição de Voluntários</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
                        Junte-se ao Startup Weekend como Facilitador, Mentor ou Jurado e ajude a transformar o ecossistema mineiro.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden">
                    {/* Decorative subtle background blob */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-red-400/5 blur-3xl pointer-events-none"></div>

                    <div className="space-y-2 relative z-10">
                        <label className="text-sm font-medium">Nome Completo</label>
                        <Input {...register('name')} placeholder="Seu nome" />
                        {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">E-mail</label>
                        <Input {...register('email')} type="email" placeholder="seu@email.com" />
                        {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">LinkedIn (Opcional)</label>
                        <Input {...register('linkedin')} placeholder="https://linkedin.com/in/seu-perfil" />
                        {errors.linkedin && <p className="text-destructive text-sm">{errors.linkedin.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Papel Desejado</label>
                        <Select onValueChange={(val: 'facilitator' | 'mentor' | 'judge') => setValue('role', val)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione um papel" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="facilitator">Facilitador</SelectItem>
                                <SelectItem value="mentor">Mentor</SelectItem>
                                <SelectItem value="judge">Jurado</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.role && <p className="text-destructive text-sm">{errors.role.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Evento</label>
                        {/* TODO: Fetch events from Payload API */}
                        <Select onValueChange={(val) => setValue('event', val)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione um evento" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Startup Weekend BH</SelectItem>
                                <SelectItem value="2">Startup Weekend Uberlândia</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.event && <p className="text-destructive text-sm">{errors.event.message}</p>}
                    </div>

                    <Button
                        type="submit"
                        className="w-full mt-4 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-xl py-6 text-lg font-medium shadow-md shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando sua inscrição...' : 'Enviar Inscrição'}
                    </Button>
                </form>
            </main>
            <Footer />
        </div>
    );
}
