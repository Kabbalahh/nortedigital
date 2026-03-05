// =========================================================
// CONFIGURAÇÃO TAILWIND JIT
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
// MÓDULO: CONTROLLER DO FLUXOGRAMA CRIATIVO (UX AI)
// =========================================================
const FluxogramaSystem = (() => {
    const stepsData = [
        { id: '01', icon: 'travel_explore', title: 'Briefing e Descoberta', desc: 'Envio do questionário para captar identidade, objetivos e funcionalidades.', code: 'STATUS: Iniciando coleta... [OK]\nTARGET: Validar rumo do projeto.' },
        { id: '02', icon: 'account_tree', title: 'Planejamento Lógico', desc: 'Definição do Sitemap e arquitetura da informação. Criamos o esqueleto da conversão.', code: 'BUILD_SITEMAP();\nASSERT(UserFlow === "Optimized");' },
        { id: '03', icon: 'wireframe', title: 'Prototipagem UI/UX', desc: 'Criação de wireframes e moodboards para estabelecer a estrutura básica.', code: 'LOAD module "UX_Heuristics";\nRENDER_WIREFRAMES().await;' },
        { id: '04', icon: 'brush', title: 'Design Visual', desc: 'Aplicação do branding e criação dos layouts finais para aprovação do cliente.', code: 'APPLY(colors: ["#2A6369", "#D3795C"]);\nAWAIT_CLIENT_APPROVAL();' },
        { id: '05', icon: 'code_blocks', title: 'Desenvolvimento', desc: 'Codificação do site, otimização SEO e implementação de layout responsivo.', code: 'COMPILE_FRONTEND();\nINJECT_SEO_TAGS();\nTEST(Responsive);' },
        { id: '06', icon: 'bug_report', title: 'Homologação e Testes', desc: 'Revisão técnica de navegação, usabilidade e velocidade de carregamento.', code: 'RUN_QA_SUITE();\nCHECK_CORE_WEB_VITALS(); // [PASS]' },
        { id: '07', icon: 'rocket_launch', title: 'Go-Live e Lançamento', desc: 'Publicação oficial no domínio. O ambiente é transferido para produção.', code: 'DEPLOY_TO_PRODUCTION();\nDNS_PROPAGATION: Verificando...' },
        { id: '08', icon: 'monitoring', title: 'Suporte e Evolução', desc: 'Análise de métricas, suporte contínuo e aplicação de melhorias iterativas.', code: 'INIT_ANALYTICS_TRACKER();\nSYSTEM_STATUS: ONLINE;' }
    ];

    const init = () => {
        const container = document.getElementById('flowchart-nodes');
        const termIdle = document.querySelector('.terminal-idle');
        const termContent = document.querySelector('.terminal-content');
        
        if (!container) return;

        const termNum = document.getElementById('term-step-number');
        const termTitle = document.getElementById('term-title');
        const termDesc = document.getElementById('term-desc');
        const termCode = document.getElementById('term-code');

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

            node.addEventListener('mouseenter', () => activateTerminal(step, node));
            node.addEventListener('click', () => activateTerminal(step, node));

            container.appendChild(node);
        });

        function activateTerminal(stepData, activeNodeElement) {
            document.querySelectorAll('.flowchart-node').forEach(n => n.classList.remove('active-node'));
            activeNodeElement.classList.add('active-node');

            termIdle.classList.add('hidden');
            termContent.classList.remove('hidden');

            termNum.textContent = `Etapa // ${stepData.id}`;
            termTitle.textContent = stepData.title;
            termDesc.textContent = stepData.desc;
            
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

// =========================================================
// INICIALIZAÇÃO DO SISTEMA
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log("Norte Digital Architecture: Deployed successfully.");
    
    // Inicia Módulos
    FluxogramaSystem.init();
    
    // Botões de Interação Genérica
    const missionBtn = document.getElementById('btn-iniciar');
    if(missionBtn) {
        missionBtn.addEventListener('click', () => {
            alert("SISTEMA ONLINE: Iniciando sequência de ignição...");
        });
    }
});
