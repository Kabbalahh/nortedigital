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

// Lógica de Interação
document.addEventListener('DOMContentLoaded', () => {
    console.log("Norte Digital System: Online");
    
    // Exemplo de micro-função para o botão 'Iniciar Missão'
    const missionBtn = document.querySelector('button');
    if(missionBtn) {
        missionBtn.addEventListener('click', () => {
            alert("Iniciando sequência de ignição...");
        });
    }
});
