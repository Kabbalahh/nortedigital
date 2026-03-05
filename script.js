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
// MÓDULO: LABORATÓRIO DE DESIGN (MASONRY & SOCIAL MEDIA)
// =========================================================
const DesignSystem = (() => {
    // Base de dados de imagens (Simulando imagens reais enviadas por você)
    const designAssets = [
        {
            id: 1,
            title: 'Norte Digital - Identidade Corporativa',
            category: 'branding',
            image: 'images/IMG_3048.png', // O Brand Board
            type: 'landscape', // Proporção
            colors: ['#2A6369', '#D3795C', '#FFF8ED']
        },
        {
            id: 2,
            title: 'Campanha de Orçamento',
            category: 'social',
            image: 'images/IMG_3050.png', // O Story
            type: 'portrait', // Proporção Vertical
            colors: ['#3C4F5A', '#D3795C']
        },
        {
            id: 3,
            title: 'Tipografia N Modular',
            category: 'branding',
            image: 'images/IMG_3024.png', // O "N" Gigante
            type: 'portrait', 
            colors: ['#2A6369', '#FFF8ED']
        },
        {
            id: 4,
            title: 'Engenharia de Conversão Feed',
            category: 'social',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800', // Placeholder Exemplo
            type: 'square', // Feed quadrado
            colors: ['#D3795C', '#3C4F5A']
        },
        {
            id: 5,
            title: 'Mockup Plataforma UX',
            category: 'branding',
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
            type: 'landscape',
            colors: ['#2A6369', '#3C4F5A', '#FFF8ED']
        }
    ];

    const init = () => {
        const grid = document.getElementById('design-grid');
        const filters = document.querySelectorAll('#design-filters .filter-btn');
        
        // Elementos do Modal
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');
        const modalClose = document.getElementById('close-modal');
        const modalContent = document.getElementById('modal-content');
        const mTitle = document.getElementById('modal-title');
        const mCat = document.getElementById('modal-category');
        const mColors = document.getElementById('modal-colors');

        if (!grid) return; 

        // RENDERIZADOR DO GRID MASONRY
        const renderAssets = (filterType = 'all') => {
            grid.innerHTML = ''; 
            
            const filtered = filterType === 'all' 
                ? designAssets 
                : designAssets.filter(p => p.category === filterType);

            filtered.forEach(asset => {
                const item = document.createElement('div');
                item.className = 'relative group cursor-pointer window-frame retro-shadow bg-white overflow-hidden';
                
                // Estrutura HTML do item do Masonry
                item.innerHTML = `
                    <img src="${asset.image}" alt="${asset.title}" class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105">
                    
                    <div class="absolute inset-0 bg-slate-custom/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div class="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div class="inline-block px-2 py-1 bg-petrol text-white font-technical text-[10px] font-bold uppercase tracking-widest mb-2 border border-petrol/50">
                                ${asset.category}
                            </div>
                            <h3 class="font-display font-black text-lg text-white leading-tight uppercase mb-2">${asset.title}</h3>
                            <div class="flex gap-2">
                                ${asset.colors.map(color => `<div class="size-4 rounded-sm border border-white/20" style="background-color: ${color};" title="${color}"></div>`).join('')}
                            </div>
                            <div class="absolute top-4 right-4 text-white/30 group-hover:text-primary transition-colors">
                                <span class="material-symbols-outlined">zoom_in_map</span>
                            </div>
                        </div>
                    </div>
                `;

                // Interação de Abrir Modal (UX AI)
                item.addEventListener('click', () => openModal(asset));
                grid.appendChild(item);
            });
        };

        // LÓGICA DO MODAL
        const openModal = (asset) => {
            modalImg.src = asset.image;
            mTitle.textContent = asset.title;
            mCat.textContent = `[ ${asset.category} ]`;
            
            // Injeta as cores da paleta no rodapé do modal
            mColors.innerHTML = asset.colors.map(color => 
                `<div class="flex items-center gap-1"><div class="size-3 border border-slate-custom/50" style="background-color: ${color};"></div> <span class="text-[9px]">${color}</span></div>`
            ).join('');

            modal.classList.remove('hidden');
            // Pequeno delay para animação de fade-in e scale
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
            }, 10);
        };

        const closeModal = () => {
            modal.classList.add('opacity-0');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                modalImg.src = '';
            }, 300); // Tempo da transição
        };

        modalClose.addEventListener('click', closeModal);
        // Fecha clicando fora da janela
        modal.addEventListener('click', (e) => {
            if(e.target === modal) closeModal();
        });

        // Lógica de Ativação dos Filtros
        filters.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filters.forEach(f => {
                    f.classList.remove('bg-slate-custom', 'text-white');
                    f.classList.add('bg-white', 'text-slate-custom', 'retro-shadow');
                });
                
                const currentBtn = e.target;
                currentBtn.classList.remove('bg-white', 'text-slate-custom', 'retro-shadow');
                currentBtn.classList.add('bg-slate-custom', 'text-white');

                renderAssets(currentBtn.dataset.filter);
            });
        });

        // Renderiza tudo na inicialização
        renderAssets('all');
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
    document.addEventListener('DOMContentLoaded', () => {
    console.log("Norte Digital Architecture: Deployed successfully.");
    
    if(typeof FluxogramaSystem !== 'undefined') FluxogramaSystem.init();
    if(typeof PortfolioSystem !== 'undefined') PortfolioSystem.init();
    if(typeof DesignSystem !== 'undefined') DesignSystem.init(); // <--- NOVO MÓDULO
});
        });
    }
});
