// =========================================================
// 1. CONFIGURAÇÃO BASE (TAILWIND JIT)
// =========================================================
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#D3795C", 
                "slate-custom": "#3C4F5A", 
                "petrol": "#2A6369", 
                "background-light": "#FFF8ED", 
            },
            fontFamily: {
                "display": ["Montserrat", "sans-serif"],
                "body": ["Open Sans", "sans-serif"],
                "technical": ["Space Grotesk", "sans-serif"]
            },
        },
    },
};

// =========================================================
// 2. MÓDULO HOME: FLUXOGRAMA CRIATIVO (Terminal Lógico)
// =========================================================
const FluxogramaSystem = (() => {
    const stepsData = [
        { id: '01', icon: 'travel_explore', title: 'Briefing', desc: 'Envio do questionário para captar identidade e objetivos.', code: 'STATUS: Iniciando coleta... [OK]\nTARGET: Validar rumo.' },
        { id: '02', icon: 'account_tree', title: 'Estratégia Lógica', desc: 'Definição do Sitemap e arquitetura da informação.', code: 'BUILD_SITEMAP();\nASSERT(Flow === "Optimized");' },
        { id: '03', icon: 'wireframe', title: 'Prototipagem UI/UX', desc: 'Criação de wireframes para estabelecer a estrutura básica.', code: 'LOAD module "UX_Heuristics";\nRENDER_WIREFRAMES().await;' },
        { id: '04', icon: 'brush', title: 'Design Visual', desc: 'Aplicação do branding e criação dos layouts finais para aprovação.', code: 'APPLY(colors: ["#2A6369", "#D3795C"]);\nAWAIT_CLIENT();' },
        { id: '05', icon: 'code_blocks', title: 'Desenvolvimento', desc: 'Codificação do site, otimização SEO e layout responsivo.', code: 'COMPILE_FRONTEND();\nINJECT_SEO();\nTEST(Responsive);' },
        { id: '06', icon: 'bug_report', title: 'Testes de Qualidade', desc: 'Revisão técnica de navegação, usabilidade e carregamento.', code: 'RUN_QA_SUITE();\nCHECK_WEB_VITALS(); // [PASS]' },
        { id: '07', icon: 'rocket_launch', title: 'Go-Live Lançamento', desc: 'Publicação oficial. O ambiente é transferido para produção.', code: 'DEPLOY_TO_PRODUCTION();\nDNS_PROPAGATION: OK...' },
        { id: '08', icon: 'monitoring', title: 'Suporte SLA', desc: 'Análise de métricas e suporte contínuo para escalabilidade.', code: 'INIT_ANALYTICS();\nSYSTEM_STATUS: ONLINE;' }
    ];

    const init = () => {
        const container = document.getElementById('flowchart-nodes');
        if (!container) return;

        const termIdle = document.querySelector('.terminal-idle');
        const termContent = document.querySelector('.terminal-content');
        const termNum = document.getElementById('term-step-number');
        const termTitle = document.getElementById('term-title');
        const termDesc = document.getElementById('term-desc');
        const termCode = document.getElementById('term-code');

        stepsData.forEach(step => {
            const node = document.createElement('div');
            // ATUALIZAÇÃO MOBILE: Adicionado p-4 e cursor-pointer para melhor UX em touch
            node.className = 'flowchart-node retro-shadow flex items-start gap-4 p-4 cursor-pointer transition-colors';
            node.innerHTML = `
                <div class="font-technical text-petrol font-bold opacity-30 text-xl leading-none pt-1">${step.id}</div>
                <div>
                    <span class="material-symbols-outlined node-icon text-slate-custom mb-1 transition-colors">${step.icon}</span>
                    <h4 class="font-display font-bold text-sm uppercase text-slate-custom leading-tight">${step.title}</h4>
                </div>
            `;

            node.addEventListener('mouseenter', () => activateTerminal(step, node));
            
            // ATUALIZAÇÃO MOBILE: Feedback visual imediato ao tocar na tela
            node.addEventListener('click', () => {
                activateTerminal(step, node);
                if(window.innerWidth < 1024) {
                    node.classList.add('bg-primary/10');
                    setTimeout(() => node.classList.remove('bg-primary/10'), 300);
                }
            });
            
            container.appendChild(node);
        });

        function activateTerminal(stepData, activeNodeElement) {
            document.querySelectorAll('.flowchart-node').forEach(n => n.classList.remove('active-node'));
            activeNodeElement.classList.add('active-node');

            if(termIdle) termIdle.classList.add('hidden');
            if(termContent) termContent.classList.remove('hidden');

            if(termNum) termNum.textContent = `Etapa // ${stepData.id}`;
            if(termTitle) termTitle.textContent = stepData.title;
            if(termDesc) termDesc.textContent = stepData.desc;
            
            if(termCode) {
                termCode.textContent = '';
                let charIndex = 0;
                const codeText = stepData.code;
                clearInterval(window.typeInterval);
                
                window.typeInterval = setInterval(() => {
                    if (charIndex < codeText.length) {
                        termCode.textContent += codeText.charAt(charIndex);
                        charIndex++;
                    } else {
                        clearInterval(window.typeInterval);
                    }
                }, 15);
            }
        }
    };

    return { init };
})();

// =========================================================
// 3. MÓDULO CATÁLOGO: PORTFÓLIO DE SISTEMAS (Bento Grid)
// =========================================================
const PortfolioSystem = (() => {
    const projects = [
    { id: 1, title: 'Hamburgueria Criativa', category: 'ecommerce', client: 'Hamburgueria', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800', metrics: '+45% Vendas', tech: ['HTML3', 'CSS3'], url: 'sites_portifolio/hamburgueria_criativa.html'},
    //{ id: 2, title: 'Calculadora para Marcenaria', category: 'institucional', client: 'Apex Investimentos', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800', metrics: 'Load < 1.2s', tech: ['Python', 'Tailwind'], url: '#' },
    //{ id: 3, title: 'Landing Page Conversão', category: 'landing', client: 'SaaS Platform X', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', metrics: '22% Taxa Conv.', tech: ['HTML5', 'JS Vanilla'], url: '#' },
    //{ id: 4, title: 'Gateway de Pagamentos', category: 'ecommerce', client: 'PayMobi', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800', metrics: 'Zero Downtime', tech: ['Vue.js', 'Python'], url: '#' },
    //{ id: 5, title: 'Portal de Engenharia', category: 'institucional', client: 'Structural BR', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800', metrics: '+200% Leads', tech: ['WordPress', 'PHP'], url: '#' }
];

    const init = () => {
        const grid = document.getElementById('portfolio-grid');
        const filters = document.querySelectorAll('#portfolio-filters .filter-btn');
        if (!grid) return;

        const renderProjects = (filterType = 'all') => {
            grid.innerHTML = ''; 
            const filtered = filterType === 'all' ? projects : projects.filter(p => p.category === filterType);

            filtered.forEach(proj => {
                const card = document.createElement('div');
                card.className = 'window-frame bg-white flex flex-col retro-shadow hover:-translate-y-2 transition-transform duration-300';
                card.innerHTML = `
                    <div class="bg-slate-custom px-3 py-2 flex items-center justify-between border-b-2 border-slate-custom">
                        <div class="flex gap-1.5"><div class="size-2.5 rounded-full border border-white/30"></div><div class="size-2.5 rounded-full border border-white/30"></div></div>
                        <div class="text-[9px] font-technical text-white/50 uppercase tracking-widest">${proj.category}_sys_v1</div>
                    </div>
                    <div class="h-48 w-full border-b-2 border-slate-custom relative overflow-hidden group">
                        <div class="absolute inset-0 bg-petrol/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity"></div>
                        <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500">
                        <div class="absolute bottom-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-20 border border-slate-custom">${proj.metrics}</div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col">
                        <p class="text-[10px] font-technical text-petrol font-bold uppercase tracking-[0.2em] mb-1">Missão: ${proj.client}</p>
                        <h3 class="font-display font-black text-xl text-slate-custom leading-tight mb-4 uppercase">${proj.title}</h3>
                        <div class="mt-auto pt-4 border-t border-slate-custom/20 flex items-center justify-between">
                            <div class="flex gap-2">${proj.tech.map(t => `<span class="bg-background-light border border-slate-custom/20 text-slate-custom px-2 py-1 text-[9px] font-technical uppercase font-bold">${t}</span>`).join('')}</div>
                            <a href="${proj.url}" class="text-primary hover:text-petrol transition-colors inline-block"><span class="material-symbols-outlined text-xl">arrow_circle_right</span></a>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        };

        filters.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filters.forEach(f => f.classList.remove('bg-slate-custom', 'text-white'));
                filters.forEach(f => f.classList.add('bg-white', 'text-slate-custom', 'retro-shadow'));
                
                const currentBtn = e.target;
                currentBtn.classList.remove('bg-white', 'text-slate-custom', 'retro-shadow');
                currentBtn.classList.add('bg-slate-custom', 'text-white');
                renderProjects(currentBtn.dataset.filter);
            });
        });

        renderProjects('all');
    };

    return { init };
})();

// =========================================================
// 4. MÓDULO DESIGN: LABORATÓRIO VISUAL (Masonry & Lightbox)
// =========================================================
const DesignSystem = (() => {
    const designAssets = [
        { id: 1, title: 'Norte Digital - Identidade', category: 'branding', image: 'images/IMG_3048.png', colors: ['#2A6369', '#D3795C', '#FFF8ED'] },
        { id: 2, title: 'Campanha de Orçamento', category: 'social', image: 'images/IMG_3050.png', colors: ['#3C4F5A', '#D3795C'] },
        { id: 3, title: 'Tipografia N Modular', category: 'branding', image: 'images/IMG_3024.png', colors: ['#2A6369', '#FFF8ED'] },
        { id: 4, title: 'Engenharia de Conversão', category: 'social', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800', colors: ['#D3795C', '#3C4F5A'] },
        { id: 5, title: 'Mockup Plataforma UX', category: 'branding', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800', colors: ['#2A6369', '#3C4F5A', '#FFF8ED'] }
    ];

    const init = () => {
        const grid = document.getElementById('design-grid');
        const filters = document.querySelectorAll('#design-filters .filter-btn');
        const modal = document.getElementById('image-modal');
        if (!grid) return; 

        const renderAssets = (filterType = 'all') => {
            grid.innerHTML = ''; 
            const filtered = filterType === 'all' ? designAssets : designAssets.filter(p => p.category === filterType);

            filtered.forEach(asset => {
                const item = document.createElement('div');
                item.className = 'relative group cursor-pointer window-frame retro-shadow bg-white overflow-hidden';
                item.innerHTML = `
                    <img src="${asset.image}" alt="${asset.title}" class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-slate-custom/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div class="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div class="inline-block px-2 py-1 bg-petrol text-white font-technical text-[10px] font-bold uppercase tracking-widest mb-2 border border-petrol/50">${asset.category}</div>
                            <h3 class="font-display font-black text-lg text-white leading-tight uppercase mb-2">${asset.title}</h3>
                            <div class="flex gap-2">${asset.colors.map(color => `<div class="size-4 rounded-sm border border-white/20" style="background-color: ${color};"></div>`).join('')}</div>
                        </div>
                    </div>
                `;
                item.addEventListener('click', () => openModal(asset));
                grid.appendChild(item);
            });
        };

        const openModal = (asset) => {
            document.getElementById('modal-image').src = asset.image;
            document.getElementById('modal-title').textContent = asset.title;
            document.getElementById('modal-category').textContent = `[ ${asset.category} ]`;
            document.getElementById('modal-colors').innerHTML = asset.colors.map(color => `<div class="flex items-center gap-1"><div class="size-3 border border-slate-custom/50" style="background-color: ${color};"></div> <span class="text-[9px]">${color}</span></div>`).join('');
            
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                document.getElementById('modal-content').classList.remove('scale-95');
            }, 10);
        };

        const closeModal = () => {
            modal.classList.add('opacity-0');
            document.getElementById('modal-content').classList.add('scale-95');
            setTimeout(() => { modal.classList.add('hidden'); document.getElementById('modal-image').src = ''; }, 300);
        };

        document.getElementById('close-modal').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });

        filters.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filters.forEach(f => f.classList.remove('bg-slate-custom', 'text-white'));
                filters.forEach(f => f.classList.add('bg-white', 'text-slate-custom', 'retro-shadow'));
                const currentBtn = e.target;
                currentBtn.classList.remove('bg-white', 'text-slate-custom', 'retro-shadow');
                currentBtn.classList.add('bg-slate-custom', 'text-white');
                renderAssets(currentBtn.dataset.filter);
            });
        });

        renderAssets('all');
    };

    return { init };
})();

// =========================================================
// 5. MÓDULO MANUAL: ESPECIFICAÇÕES DE SERVIÇOS (Acordeão)
// =========================================================
const ManualSystem = (() => {
    const servicesData = [
        { id: 'S01', title: 'Arquitetura de Conversão & UX', icon: 'view_quilt', summary: 'Prototipagem lógica focada em guiar o usuário.', details: 'Analisamos o fluxo do seu cliente ideal e estruturamos uma hierarquia visual que direciona o olhar para a conversão.', tags: ['Wireframing', 'User Flow', 'Figma'] },
        { id: 'S02', title: 'Desenvolvimento Web de Alta Performance', icon: 'integration_instructions', summary: 'Engenharia de software com código limpo e escalável.', details: 'Sites ultrarrápidos, responsivos e integrados com as principais APIs do mercado.', tags: ['Front-End', 'Back-End', 'APIs'] },
        { id: 'S03', title: 'Engenharia de SEO & Ranqueamento', icon: 'travel_explore', summary: 'Otimização estrutural para dominar os motores de busca.', details: 'Implementamos marcações semânticas avançadas e otimização de tempo de resposta para que o Google indexe sua plataforma.', tags: ['SEO Técnico', 'Lighthouse'] },
        { id: 'S04', title: 'Manutenção e Evolução Sistêmica', icon: 'security', summary: 'Suporte blindado e análises métricas contínuas.', details: 'Monitoramento ativo de tráfego, relatórios de mapa de calor e atualizações de segurança constantes.', tags: ['Analytics', 'Cyber-Security'] }
    ];

    const init = () => {
        const accordionContainer = document.getElementById('services-accordion');
        if (!accordionContainer) return; 

        servicesData.forEach((service, index) => {
            const item = document.createElement('div');
            item.className = 'border-2 border-slate-custom bg-white transition-all duration-300';
            const isOpen = index === 0;
            if(isOpen) item.classList.add('retro-shadow', 'translate-x-1', '-translate-y-1');

            item.innerHTML = `
                <button class="accordion-header w-full px-6 py-5 flex items-center justify-between text-left group hover:bg-background-light transition-colors focus:outline-none">
                    <div class="flex items-center gap-4">
                        <div class="size-10 bg-slate-custom/5 border border-slate-custom/20 flex items-center justify-center text-petrol group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"><span class="material-symbols-outlined">${service.icon}</span></div>
                        <div>
                            <div class="font-technical text-[10px] text-primary font-bold uppercase tracking-widest mb-1">CÓDIGO: ${service.id}</div>
                            <h3 class="font-display font-black text-lg text-slate-custom uppercase group-hover:text-primary transition-colors">${service.title}</h3>
                        </div>
                    </div>
                    <span class="material-symbols-outlined text-slate-custom/50 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} icon-chevron">expand_more</span>
                </button>
                <div class="accordion-body overflow-hidden transition-all duration-500 max-h-0 ${isOpen ? 'max-h-[500px] border-t-2 border-slate-custom/10' : ''}">
                    <div class="p-6 bg-white">
                        <p class="font-body text-sm font-bold text-slate-custom mb-3">${service.summary}</p>
                        <p class="font-body text-sm text-slate-custom/70 leading-relaxed mb-6 border-l-2 border-primary pl-4">${service.details}</p>
                        <div class="flex flex-wrap gap-2">${service.tags.map(tag => `<span class="bg-background-light border border-slate-custom/20 text-slate-custom px-2 py-1 text-[10px] font-technical uppercase font-bold">${tag}</span>`).join('')}</div>
                    </div>
                </div>
            `;

            const btn = item.querySelector('.accordion-header');
            const body = item.querySelector('.accordion-body');
            const chevron = item.querySelector('.icon-chevron');

            btn.addEventListener('click', () => {
                const isCurrentlyOpen = body.style.maxHeight || body.classList.contains('max-h-[500px]');
                
                document.querySelectorAll('.accordion-body').forEach(b => { b.style.maxHeight = null; b.classList.remove('max-h-[500px]', 'border-t-2', 'border-slate-custom/10'); });
                document.querySelectorAll('.icon-chevron').forEach(c => c.classList.remove('rotate-180'));
                document.querySelectorAll('#services-accordion > div').forEach(p => p.classList.remove('retro-shadow', 'translate-x-1', '-translate-y-1'));

                if (!isCurrentlyOpen) {
                    body.style.maxHeight = body.scrollHeight + "px";
                    body.classList.add('border-t-2', 'border-slate-custom/10');
                    chevron.classList.add('rotate-180');
                    item.classList.add('retro-shadow', 'translate-x-1', '-translate-y-1');
                }
            });
            accordionContainer.appendChild(item);
        });
    };

    return { init };
})();

// =========================================================
// 6. MÓDULO CONTATO: TERMINAL DE BRIEFING LÓGICO
// =========================================================
const ContactSystem = (() => {
    const init = () => {
        const form = document.getElementById('briefing-form');
        const terminalResponse = document.getElementById('form-terminal-response');
        if (!form) return; 

        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const btn = form.querySelector('button[type="submit"]');
            btn.innerHTML = '<span class="material-symbols-outlined animate-spin-slow">sync</span> PROCESSANDO...';
            btn.classList.add('opacity-70', 'cursor-not-allowed');
            btn.disabled = true;

            setTimeout(() => {
                form.classList.add('hidden');
                terminalResponse.classList.remove('hidden');
                terminalResponse.innerHTML = '> ESTABELECENDO CONEXÃO SEGURA...<br>> TRANSMITINDO DADOS CRIPTOGRAFADOS... [OK]<br>> <span class="text-white">Relatório recebido. O Consultor Especializado analisará suas coordenadas e iniciará contato via WhatsApp em breve.</span>';
            }, 1500); 
        });
    };

    return { init };
})();

// =========================================================
// 7. INICIALIZAÇÃO MASTER DO SISTEMA
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log("Norte Digital Architecture: All Systems Go.");
    
    // Inicia os Módulos de forma modular e segura
    if(typeof FluxogramaSystem !== 'undefined') FluxogramaSystem.init();
    if(typeof PortfolioSystem !== 'undefined') PortfolioSystem.init();
    if(typeof DesignSystem !== 'undefined') DesignSystem.init();
    if(typeof ManualSystem !== 'undefined') ManualSystem.init();
    if(typeof ContactSystem !== 'undefined') ContactSystem.init(); 

    // Botões Universais (Tratamento limpo)
    const missionBtn = document.getElementById('btn-iniciar');

    if(missionBtn) {
        missionBtn.addEventListener('click', () => {
            alert("SISTEMA ONLINE: Nosso consultor ira lhe atender!");
            const numeroWhatsApp = "5551992531760"; 
            const linkWhatsApp = `https://wa.me/${numeroWhatsApp}`;
            window.open(linkWhatsApp, "_blank");
        });
    }
});
