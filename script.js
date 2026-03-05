// =========================================================
// MÓDULO: CATÁLOGO DE SISTEMAS (PORTFÓLIO)
// =========================================================
const PortfolioSystem = (() => {
    // Base de dados simulada (Mockup para o Front-end)
    const projects = [
        {
            id: 1,
            title: 'Módulo E-commerce Alpha',
            category: 'ecommerce',
            client: 'TechGear Solutions',
            image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
            metrics: '+45% Vendas',
            tech: ['React', 'Node.js']
        },
        {
            id: 2,
            title: 'Arquitetura Corporativa',
            category: 'institucional',
            client: 'Apex Investimentos',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
            metrics: 'Load < 1.2s',
            tech: ['Next.js', 'Tailwind']
        },
        {
            id: 3,
            title: 'Landing Page Conversão',
            category: 'landing',
            client: 'SaaS Platform X',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
            metrics: '22% Taxa Conv.',
            tech: ['HTML5', 'JS Vanilla']
        },
        {
            id: 4,
            title: 'Gateway de Pagamentos',
            category: 'ecommerce',
            client: 'PayMobi',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
            metrics: 'Zero Downtime',
            tech: ['Vue.js', 'Python']
        },
        {
            id: 5,
            title: 'Portal de Engenharia',
            category: 'institucional',
            client: 'Structural BR',
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
            metrics: '+200% Leads',
            tech: ['WordPress', 'PHP']
        }
    ];

    const init = () => {
        const grid = document.getElementById('portfolio-grid');
        const filters = document.querySelectorAll('.filter-btn');
        
        if (!grid) return; // Fail-safe se não estiver na página de catálogo

        const renderProjects = (filterType = 'all') => {
            grid.innerHTML = ''; // Limpa o grid
            
            const filtered = filterType === 'all' 
                ? projects 
                : projects.filter(p => p.category === filterType);

            filtered.forEach(proj => {
                const card = document.createElement('div');
                card.className = 'window-frame bg-white flex flex-col retro-shadow hover:-translate-y-2 transition-transform duration-300';
                card.innerHTML = `
                    <div class="bg-slate-custom px-3 py-2 flex items-center justify-between border-b-2 border-slate-custom">
                        <div class="flex gap-1.5">
                            <div class="size-2.5 rounded-full border border-white/30"></div>
                            <div class="size-2.5 rounded-full border border-white/30"></div>
                        </div>
                        <div class="text-[9px] font-technical text-white/50 uppercase tracking-widest">${proj.category}_sys_v1</div>
                    </div>
                    
                    <div class="h-48 w-full border-b-2 border-slate-custom relative overflow-hidden group">
                        <div class="absolute inset-0 bg-petrol/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity"></div>
                        <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500">
                        <div class="absolute bottom-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-20 border border-slate-custom">
                            ${proj.metrics}
                        </div>
                    </div>
                    
                    <div class="p-6 flex-1 flex flex-col">
                        <p class="text-[10px] font-technical text-petrol font-bold uppercase tracking-[0.2em] mb-1">Missão: ${proj.client}</p>
                        <h3 class="font-display font-black text-xl text-slate-custom leading-tight mb-4 uppercase">${proj.title}</h3>
                        
                        <div class="mt-auto pt-4 border-t border-slate-custom/20 flex items-center justify-between">
                            <div class="flex gap-2">
                                ${proj.tech.map(t => `<span class="bg-background-light border border-slate-custom/20 text-slate-custom px-2 py-1 text-[9px] font-technical uppercase font-bold">${t}</span>`).join('')}
                            </div>
                            <button class="text-primary hover:text-petrol transition-colors">
                                <span class="material-symbols-outlined text-xl">arrow_circle_right</span>
                            </button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        };

        // Lógica de Ativação dos Filtros
        filters.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Reset de estilos
                filters.forEach(f => {
                    f.classList.remove('bg-slate-custom', 'text-white');
                    f.classList.add('bg-white', 'text-slate-custom', 'retro-shadow');
                });
                
                // Estilo ativo
                const currentBtn = e.target;
                currentBtn.classList.remove('bg-white', 'text-slate-custom', 'retro-shadow');
                currentBtn.classList.add('bg-slate-custom', 'text-white');

                // Renderiza
                renderProjects(currentBtn.dataset.filter);
            });
        });

        // Inicializa com todos os projetos
        renderProjects('all');
    };

    return { init };
})();

// =========================================================
// INICIALIZAÇÃO DO SISTEMA
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log("Norte Digital Architecture: Deployed successfully.");
    
    // Inicia Módulos
    FluxogramaSystem.init();
    PortfolioSystem.init(); // <--- Adicione esta linha aqui
    
    // Botões de Interação Genérica
    const missionBtn = document.getElementById('btn-iniciar');
    if(missionBtn) {
        missionBtn.addEventListener('click', () => {
            alert("SISTEMA ONLINE: Iniciando sequência de ignição...");
        });
    }
});
