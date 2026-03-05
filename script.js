// Configuração do Tailwind (Injetada via JS para manter o HTML limpo)
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#d3785a",
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
// MÓDULO: CONTROLLER DO FLUXOGRAMA CRIATIVO
// =========================================================
const FluxogramaSystem = (() => {
    // Banco de Dados Local baseado no Manual da Norte Digital
    const stepsData = [
        {
            id: '01',
            icon: 'travel_explore',
            title: 'Briefing e Descoberta',
            desc: 'Envio do questionário para captar identidade, objetivos e funcionalidades. Finalizado com uma reunião tática de alinhamento.',
            code: 'STATUS: Iniciando coleta de dados... [OK]\nTARGET: Validar rumo do projeto.'
        },
        {
            id: '02',
            icon: 'account_tree',
            title: 'Planejamento Lógico',
            desc: 'Definição do Sitemap e arquitetura da informação. Criamos o esqueleto da conversão antes de aplicar o design.',
            code: 'BUILD_SITEMAP();\nASSERT(UserFlow === "Optimized");'
        },
        {
            id: '03',
            icon: 'wireframe',
            title: 'Prototipagem UI/UX',
            desc: 'Criação de wireframes e moodboards para estabelecer a visão e a estrutura básica da interface.',
            code: 'LOAD module "UX_Heuristics";\nRENDER_WIREFRAMES().await;'
        },
        {
            id: '04',
            icon: 'brush',
            title: 'Design Visual',
            desc: 'Aplicação do branding e criação dos layouts finais. É neste momento que o cliente aprova o design.',
            code: 'APPLY(colors: ["#2A6369", "#D3795C"]);\nAWAIT_CLIENT_APPROVAL();'
        },
        {
            id: '05',
            icon: 'code_blocks',
            title: 'Desenvolvimento Técnico',
            desc: 'Codificação do site, otimização para motores de busca (SEO) e implementação de layout totalmente responsivo.',
            code: 'COMPILE_FRONTEND();\nINJECT_SEO_TAGS();\nTEST(Responsive === True);'
        },
        {
            id: '06',
            icon: 'bug_report',
            title: 'Homologação e Testes',
            desc: 'Revisão técnica de navegação, usabilidade e velocidade de carregamento em ambiente de staging.',
            code: 'RUN_QA_SUITE();\nCHECK_CORE_WEB_VITALS(); // [PASS]'
        },
        {
            id: '07',
            icon: 'rocket_launch',
            title: 'Go-Live e Lançamento',
            desc: 'Publicação oficial no domínio do cliente. O ambiente é transferido para a infraestrutura de produção.',
            code: 'DEPLOY_TO_PRODUCTION();\nDNS_PROPAGATION: Verificando...'
        },
        {
            id: '08',
            icon: 'monitoring',
            title: 'Suporte e Evolução',
            desc: 'Análise de métricas, suporte contínuo e aplicação de melhorias iterativas focadas em resultados.',
            code: 'INIT_ANALYTICS_TRACKER();\nSYSTEM_STATUS: ONLINE & SCALING;'
        }
    ];

    const init = () => {
        const container = document.getElementById('flowchart-nodes');
        const termIdle = document.querySelector('.terminal-idle');
        const termContent = document.querySelector('.terminal-content');
        
        if (!container) return; // Fail-safe se o elemento não existir

        // Elementos do Terminal
        const termNum = document.getElementById('term-step-number');
        const termTitle = document.getElementById('term-title');
        const termDesc = document.getElementById('term-desc');
        const termCode = document.getElementById('term-code');

        // Renderiza os nós no grid dinamicamente
        stepsData.forEach(step => {
            const node = document.createElement('div');
            node.className = 'flowchart-node retro-shadow flex items-start gap-4';
            node.innerHTML = `
                <div class="font-technical text-petrol font-bold opacity-30 text-xl leading-none pt-1">${step.id}</div>
                <div>
                    <span class="material-symbols-outlined node-icon text-slate-custom mb-1 transition-colors">${step.icon}</span>
                    <h4 class="font-display font-bold text-sm uppercase text-slate-custom leading-tight">${step.title}</h4>
                </div>
            `;

            // Delegação de eventos de UX
            node.addEventListener('mouseenter', () => activateTerminal(step, node));
            node.addEventListener('click', () => activateTerminal(step, node));

            container.appendChild(node);
        });

        // Função de ativação do painel lateral (Terminal)
        function activateTerminal(stepData, activeNodeElement) {
            // Remove estado ativo de todos e adiciona no atual
            document.querySelectorAll('.flowchart-node').forEach(n => n.classList.remove('active-node'));
            activeNodeElement.classList.add('active-node');

            // Troca de UI
            termIdle.classList.add('hidden');
            termContent.classList.remove('hidden');

            // Injeção segura de dados
            termNum.textContent = `Etapa // ${stepData.id}`;
            termTitle.textContent = stepData.title;
            termDesc.textContent = stepData.desc;
            
            // Simulação de terminal de código (Efeito Hacker)
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
    };

    return { init };
})();

// Lógica de Inicialização Principal
document.addEventListener('DOMContentLoaded', () => {
    console.log("Norte Digital System: Online");
    
    // Inicia o módulo do Fluxograma
    FluxogramaSystem.init();
    
    // Função existente para o botão 'Iniciar Missão'
    const missionBtn = document.getElementById('btn-iniciar');
    if(missionBtn) {
        missionBtn.addEventListener('click', () => {
            alert("Iniciando sequência de ignição...");
        });
    }
});
