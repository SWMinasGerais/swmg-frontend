import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Code, Briefcase, Paintbrush, Search, User } from 'lucide-react';

// Mapeamento de Role para Badge Color e Icon
const roleConfig = {
    hacker: { label: 'Hacker', color: 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-blue-500/20 shadow-sm', icon: Code },
    hustler: { label: 'Hustler', color: 'bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 shadow-green-500/20 shadow-sm', icon: Briefcase },
    hipster: { label: 'Hipster', color: 'bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 shadow-purple-500/20 shadow-sm', icon: Paintbrush },
};

// Dados Mockados Temporários (serão substituídos pela integração com Payload CMS)
const mockParticipants = [
    { id: 1, name: 'Ana Silva', role: 'hipster', skills: ['UI/UX', 'Figma', 'Ilustração'], contact: 'ana@example.com' },
    { id: 2, name: 'Carlos Santos', role: 'hacker', skills: ['React', 'Node.js', 'PostgreSQL'], contact: 'carlos@example.com' },
    { id: 3, name: 'Mariana Costa', role: 'hustler', skills: ['Vendas', 'Marketing', 'Pitch'], contact: 'mariana@example.com' },
    { id: 4, name: 'João Oliveira', role: 'hacker', skills: ['Python', 'AI', 'Data Science'], contact: 'joao@example.com' },
    { id: 5, name: 'Fernanda Lima', role: 'hipster', skills: ['Web Design', 'Branding'], contact: 'fernanda@example.com' },
    { id: 6, name: 'Roberto Almeida', role: 'hustler', skills: ['Business Development', 'Finanças'], contact: 'roberto@example.com' },
];

type RoleType = 'hacker' | 'hustler' | 'hipster' | 'all';

export default function Matchmaking() {
    const [filterRole, setFilterRole] = useState<RoleType>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredParticipants = mockParticipants.filter((p) => {
        const matchesRole = filterRole === 'all' || p.role === filterRole;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesRole && matchesSearch;
    });

    return (
        <div className="min-h-screen flex flex-col pt-20 bg-background">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Matchmaking SW</h1>
                        <p className="text-muted-foreground text-lg">
                            Encontre a equipe perfeita. Filtre talentos por perfis e habilidades.
                        </p>
                    </div>

                    {/* Filters & Search */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="relative flex-grow">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                            <Input
                                placeholder="Buscar por talento ou habilidade (ex: React, Vendas)"
                                className="pl-12 py-6 rounded-full border-slate-200 dark:border-slate-800 bg-white/50 backdrop-blur-sm shadow-sm text-base focus-visible:ring-red-500/50"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex bg-slate-100/50 p-1.5 rounded-full overflow-x-auto border border-slate-200/50">
                            <Button
                                variant={filterRole === 'all' ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => setFilterRole('all')}
                            >
                                Todos
                            </Button>
                            <Button
                                variant={filterRole === 'hacker' ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => setFilterRole('hacker')}
                                className={filterRole === 'hacker' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}
                            >
                                <Code className="h-4 w-4 mr-2" /> Hacker
                            </Button>
                            <Button
                                variant={filterRole === 'hustler' ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => setFilterRole('hustler')}
                                className={filterRole === 'hustler' ? 'bg-green-600 hover:bg-green-700 text-white' : ''}
                            >
                                <Briefcase className="h-4 w-4 mr-2" /> Hustler
                            </Button>
                            <Button
                                variant={filterRole === 'hipster' ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => setFilterRole('hipster')}
                                className={filterRole === 'hipster' ? 'bg-purple-600 hover:bg-purple-700 text-white' : ''}
                            >
                                <Paintbrush className="h-4 w-4 mr-2" /> Hipster
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredParticipants.map((participant) => {
                            const RoleIcon = roleConfig[participant.role as keyof typeof roleConfig].icon;

                            return (
                                <div key={participant.id} className="glass-card rounded-2xl p-6 flex flex-col group">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center border border-white dark:border-slate-600 shadow-sm">
                                                <User className="h-6 w-6 text-slate-400 dark:text-slate-500" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-red-600 transition-colors">{participant.name}</h3>
                                                <Badge
                                                    className={`${roleConfig[participant.role as keyof typeof roleConfig].color} text-white border-none mt-1 uppercase tracking-wider text-[10px]`}
                                                >
                                                    <RoleIcon className="h-3 w-3 mr-1" />
                                                    {roleConfig[participant.role as keyof typeof roleConfig].label}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-grow mt-2">
                                        <p className="text-xs font-semibold mb-3 text-slate-400 uppercase tracking-wider">Habilidades Core:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {participant.skills.map((skill, idx) => (
                                                <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs px-2.5 py-1 rounded-md font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <Button variant="outline" className="w-full rounded-full hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors">
                                            Convidar para Equipe
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filteredParticipants.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">Nenhum participante encontrado com os filtros atuais.</p>
                            <Button variant="link" onClick={() => { setSearchQuery(''); setFilterRole('all'); }}>
                                Limpar filtros
                            </Button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
