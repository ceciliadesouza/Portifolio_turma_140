/* =====================================================
   MURAL DA TURMA — DADOS E COMPORTAMENTO

   ⚠️ IMPORTANTE:
   A lista abaixo está com dados de EXEMPLO (baseados na
   referência enviada). Substitua "nome", "papel", "bio",
   "tags" e principalmente "linkedin" pelos dados reais de
   cada estudante da Turma 140 antes de publicar.

   Para adicionar/remover uma pessoa, basta copiar um objeto
   do array e editar os campos.

   FOTO DO CRACHÁ:
   Em cada aluno existe o campo  foto: ""
   Basta colocar o caminho (ou URL) da imagem, por exemplo:
       foto: "./assets/images/mural/antonio-cezar.jpg"
   Se ficar vazio (ou a imagem não carregar), o crachá mostra
   automaticamente as iniciais do aluno no lugar da foto.
   Dica: use fotos de rosto, de preferência na vertical ou
   quadradas (o site já recorta e centraliza sozinho).
===================================================== */

const estudantes = [
    {
        nome: "Antonio Cézar",
        foto: "./assets/images/cracha/antonio_cezar.png",
        papel: "Design UX",
        bio: "Alinhando expectativa de stakeholders em minutos com protótipos navegáveis e testes rápidos. Focado em validar ideias com usuários reais antes de escrever a primeira linha de código.",
        tags: ["Miro", "Word", "Figma"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Arthur Henrique",
        foto: "./assets/images/cracha/arthur_henrrique.png",
        papel: "Design UX",
        bio: "Eliminando o 'achismo' das reuniões através de pesquisas qualitativas e dados comportamentais. Entusiasta em conectar necessidades humanas com os objetivos reais do negócio.",
        tags: ["Docs", "Miro"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Carlos Eduardo",
        foto: "./assets/images/cracha/carlos.png",
        papel: "Back-end",
        bio: "Reduzindo a latência de APIs críticas com estratégias eficientes de caching em Redis. Apaixonado por transformar consultas pesadas no banco em respostas na casa dos milissegundos.",
        tags: ["nodeJS", "Nextjs", "Java"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Calebe de Araujo",
        foto: "./assets/images/cracha/calebe_araujo.png",
        papel: "Back-end",
        bio: "Garantindo resiliência em ecossistemas de microsserviços através de mensageria assíncrona com RabbitMQ. Focado em manter sistemas estáveis e desacoplados mesmo sob picos massivos de tráfego.",
        tags: ["Java", "Nodejs"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Cecília Souza",
        foto: "./assets/images/cracha/cecilia_souza.png",
        papel: "Design / UI/UX",
        bio: "Descobriu que criar um Design System resolve 90% dos problemas que o 'layout livre' criou. Ainda ama a liberdade de rabiscar.",
        tags: ["Figma", "Ilustrator", "Canva"],
        linkedin: "https://www.linkedin.com/in/cecília-de-souza-32b457369/",
    },
    {
        nome: "Clistian Jose",
        foto: "./assets/images/cracha/clistian_jose.png",
        papel: "Q.A. (Quality Assurance)",
        bio: "Descobriu que automatizar os testes resolve 90% dos problemas que o teste manual não dava conta. Ainda ama achar bug em produção.",
        tags: ["Cypress / Playwright", "Postman"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Daniel Pereira",
        foto: "./assets/images/cracha/daniel_pereira.png",
        papel: "Q.A. (Quality Assurance)",
        bio: "Garantindo a entrega de código sem bugs críticos automatizando cenários de teste com Cypress e Selenium. Apaixonado por transformar rotinas manuais de verificação em suítes de testes rápidas e confiáveis.",
        tags: ["Cypress / Playwright", "Postman"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Dayseane Karla",
        foto: "./assets/images/cracha/dayseane_karla.png",
        papel: "Front-end",
        bio: "Eliminando layout shifts e engasgos de renderização com otimizações de Core Web Vitals e lazy loading. Apaixonado por transformar interfaces pesadas em páginas que carregam instantaneamente.",
        tags: ["React", "TypeScript", "Vue.js"],
        linkedin: "https://www.linkedin.com/in/dayseane-prazeres-26539a302/",
    },





    {
        nome: "DÉBORA VITÓRIA",
        foto: "./assets/images/cracha/debora.png",
        papel: "Design UX",
        bio: "Facilitando a vida dos times de dev com Design Systems organizados e handoff sem surpresas. Adoro transformar componentes soltos em ecossistemas de interface escaláveis e intuitivos.",
        tags: ["Miro", "Figma", "FigJam"],
        linkedin: "https://www.linkedin.com/in/victoria-barros-453116428/",
    },
    {
        nome: "EFRAIM FLAVIO",
        foto: "./assets/images/cracha/efraim_flavio.png",
        papel: "Q.A. (Quality Assurance)",
        bio: "Evitando regressões em produção integrando testes automatizados diretamente nas pipelines de CI/CD. Focado em dar feedback imediato aos desenvolvedores e acelerar o ciclo de deploy.",
        tags: ["Cypress / Playwright", "Postman"],
        linkedin: "https://www.linkedin.com/in/efraim-flavio-6271a8409/",
    },
    {
        nome: "EMMANUEL HENRIQUE",
        foto: "./assets/images/cracha/emanuel_henrrique.png",
        papel: "Design / UI/UX",
        bio: "Descobriu que regras de usabilidade estruturam o produto. Ainda ama a tela em branco e o caos controlado de um bom rascunho.",
        tags: ["Figma", "Canva", "CSS"],
        linkedin: "https://www.linkedin.com/in/emmanuel-henrique-a6440b399/",
    },
    {
        nome: "FÁBIO ARAÚJO",
        foto: "./assets/images/cracha/fabio_araujo.png",
        papel: "Front-end",
        bio: "Garantindo a consistência visual do produto criando componentes reutilizáveis e acessíveis no Design System. Focado em escrever código limpo que simplifica a vida de outros desenvolvedores.",
        tags: ["CSS", "React", "Angular"],
        linkedin: "https://www.linkedin.com/in/fabiuaraujo/",
    },
    {
        nome: "JOÃO ARTHUR",
        foto: "./assets/images/cracha/joao_arthur.png",
        papel: "Front-end",
        bio: "Descobriu que aprender JavaScript puro resolve 90% dos problemas que os frameworks criaram. Ainda ama o React.",
        tags: ["JavaScript", "React", "CSS / Tailwind"],
        linkedin: "https://www.linkedin.com/in/arthur-albuquerque-60066b333/",
    },
    {
        nome: "JOSUÉ LUIZ",
        foto: "./assets/images/cracha/josue_luiz.png",
        papel: "Front-end",
        bio: "Traduzindo layouts do Figma em interfaces pixel-perfect, responsivas e ricas em microinterações. Entusiasta em dar vida ao design sem comprometer a performance ou a experiência do usuário.",
        tags: ["CSS", "JS", "HTML"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "JOYCE KELLY",
        foto: "./assets/images/cracha/joyce_kelly.png",
        papel: "Design UI",
        bio: "Criando interfaces elegantes e intuitivas com Design Systems modulares e componentes com auto-layout no Figma. Apaixonado por garantir consistência visual e eficiência em cada tela do produto.",
        tags: ["Figma", "Canva"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "LETÍCIA ROSA",
        foto: "./assets/images/cracha/leticia_rosa.png",
        papel: "Front-end",
        bio: "Gerenciando estados complexos na aplicação de forma previsível e escalável com Redux e React Query. Viciado em manter o fluxo de dados fluido e livre de re-renders desnecessários.",
        tags: ["JS", "API", "Angular"],
        linkedin: "https://www.linkedin.com/in/leticia-rosa2003/",
    },




    {
        nome: "LUIZ FELIPE",
        foto: "./assets/images/cracha/luiz_felipe.png",
        papel: "Q.A. (Quality Assurance)",
        bio: "Desenvolveu e automatizou a suíte de testes do sistema de Login e Cadastro do projeto YTU através de uma pipeline de CI",
        tags: ["AWS", "Playwright", "GitHub actions"],
        linkedin: "https://www.linkedin.com/in/luiz-felipe-ti/",
    },
    {
        nome: "MARIA EDUARDA",
        foto: "./assets/images/cracha/maria_eduarda.png",
        papel: "Design UI",
        bio: "Elevando o valor percebido da marca através de tipografia precisa, hierarquia visual e paletas de cores acessíveis. Focado em transformar telas comuns em experiências esteticamente memoráveis.",
        tags: ["Figma", "Canva",],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "MATHEUS BEZERRA ",
        foto: "./assets/images/cracha/matheus_bezerra.png",
        papel: "Frpmt-End",
        bio: "Descobriu que tipar tudo com TypeScript resolve 90% dos problemas que os erros em tempo de execução e undefined criaram. Aindaama ver a interface ganhando vida na tela.",
        tags: ["React_native", "TypeScript", "Tailwind CSS"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "MATHEUS GUILHERME",
        foto: "./assets/images/cracha/matheus_guilherme.png",
        papel: "Back-End",
        bio: "Descobriu que otimizar as queries do banco resolve 90% dos problemas que a arquitetura de microserviços criou. Ainda ama criar APIs.",
        tags: ["Node.js", "postegreSQL", "Java"],
        linkedin: "https://www.linkedin.com/in/matheus-guilherme4/",
    },
    {
        nome: "NICOLAS KLAYVERT",
        foto: "./assets/images/cracha/nicolas_klayvert.png",
        papel: "Back-end",
        bio: "Otimizando queries complexas em bancos relacionais para eliminar gargalos de I/O. Entusiasta de modelagem de dados inteligente e indexação precisa para escalar aplicações sem estourar o orçamento.",
        tags: ["Java", "GitHub"],
        linkedin: "https://www.linkedin.com/in/nicolas-klayvert/",
    },
    {
        nome: "PEDRO FELIPE",
        foto: "./assets/images/cracha/pedro_felipe.png",
        papel: "Full-stack",
        bio: "Descobriu que tratar o estado no frontend resolve 90% dos problemas de re-renderização que o React criou. Ainda ama subir APIs e ver a tela renderizar sem bug.",
        tags: ["Node.js", "Mongodb", "React"],
        linkedin: "https://www.linkedin.com/in/pedrofelipemoreira/",
    },
    {
        nome: "RAFFAELA GALDINO",
        foto: "./assets/images/cracha/raffaela_galdinho.png",
        papel: "Docuemntação",
        bio: "Resolvendo 90% dos ruídos de produto com jornadas visuais no Miro e UX Docs bem estruturados. Apaixonado por transformar processos complexos em fluxos simples.",
        tags: ["Miro", "Docs"],
        linkedin: "https://www.linkedin.com/in/raffaela-galdino-thorpe-b461522a9/",
    },
    {
        nome: "RAY ENIO",
        foto: "./assets/images/cracha/ray_enio.png",
        papel: "Q.A. (Quality Assurance)",
        bio: "Gosta de encontrar problemas antes que eles cheguem ao usuário. Curioso, atento aos detalhes e sempre buscando aprender novas formas de testar, identificar bugs e melhorar a qualidade dos sistemas.",
        tags: ["Vitest", "Postman", "Jest / Cypress"],
        linkedin: "https://www.linkedin.com/in/ray-enio-528282412/",
    },



    {
        nome: "THIAGO FILIPE",
        foto: "./assets/images/cracha/thiago_felipe.png",
        papel: "Documentação",
        bio: "Redigiu junto a outros membros a documentação original do projeto, que culminou para a versão final do documento.",
        tags: ["Word", "Excel", "Canvas"],
        linkedin: "https://www.linkedin.com/in/thiago-filipe-barbosa-a583351a5/",
    },
    {
        nome: "VITOR GABRIEL",
        foto: "./assets/images/cracha/vitor_gabriel.png",
        papel: "Front-end",
        bio: "Aproximando frontend e backend através da integração eficiente de APIs REST e GraphQL com validações rigorosas. Adoro garantir que a camada de visualização responda com precisão a qualquer retorno do servidor.",
        tags: ["JS", "Git", "VS Code"],
        linkedin: "https://www.linkedin.com/in/vitor-gabriel-b71b6633b/",
    },
    {
        nome: "WILTON GABRIEL",
        foto: "./assets/images/cracha/wilton_gabriel.png",
        papel: "Front-end",
        bio: "Tornando a web acessível para todas as pessoas aplicando diretrizes WCAG e navegação por teclado. Focado em construir interfaces inclusivas, sem barreiras e preparadas para leitores de tela.",
        tags: ["React", "Angular"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "YAN MATHEUS (shoyu)",
        foto: "./assets/images/cracha/yan.png",
        papel: "Design UX",
        bio: "Mapeando service blueprints para unir a experiência do cliente aos processos internos da operação. Apaixonado por enxergar o produto além da tela e otimizar todo o ecossistema",
        tags: ["Miro", "FigmaAJam", "Docs"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "YANA CLARA",
        foto: "./assets/images/cracha/yana_clara.png",
        papel: "Design / Cybersecurity",
        bio: "Gosta de transformar ideias em algo visual , ao mesmo tempo, explorar o universo da segurança digital e entender como proteger a tecnologia por trás de tudo.",
        tags: ["Canva", "Figma", "NMAP"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "YANCO VINICIUS",
        foto: "./assets/images/cracha/yanco_vinicius.png",
        papel: "Design UI",
        bio: "Garantindo que a beleza não anule a inclusão com testes de contraste e diretrizes WCAG aplicadas ao design visual. Motivado por criar interfaces bonitas, modernas e 100% acessíveis para todas as pessoas.",
        tags: ["Figma", "Canva", "Ilustrator"],
        linkedin: "https://www.linkedin.com/",
    },



];

/* Cores oficiais do portfólio, usadas em rodízio nos post-its */
const coresPostit = ["postit-color-1", "postit-color-2", "postit-color-3", "postit-color-4"];

function iniciais(nome) {
    return nome
        .trim()
        .split(/\s+/)
        .map((palavra) => palavra[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

/* Monta o espaço da foto: usa <img> se houver url, senão as iniciais */
function montarFoto(pessoa, classe) {
    const ini = iniciais(pessoa.nome);

    if (!pessoa.foto) {
        return `<div class="${classe} is-empty"><span class="badge-initials">${ini}</span></div>`;
    }

    return `
        <div class="${classe}">
            <img src="${pessoa.foto}" alt="Foto de ${pessoa.nome.trim()}" loading="lazy">
            <span class="badge-initials">${ini}</span>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("postitGrid");

    if (!grid) return;

    estudantes.forEach((pessoa, index) => {

        const postit = document.createElement("div");
        postit.className = "postit " + coresPostit[index % coresPostit.length];

        postit.innerHTML = `
            <div class="postit-inner">

                <span class="postit-pin"></span>

                <!-- FRENTE: crachá -->
                <div class="postit-face postit-front">

                    <div class="badge-head">
                        <span>Turma 140</span>
                        <span>Front-end</span>
                    </div>

                    ${montarFoto(pessoa, "badge-photo")}

                    <div class="badge-info">
                        <h3>${pessoa.nome.trim()}</h3>
                        <span class="role">${pessoa.papel}</span>
                    </div>

                    <div class="badge-foot">
                        <span class="badge-barcode" aria-hidden="true"></span>
                        <span class="tap">virar &rarr;</span>
                    </div>

                </div>

                <!-- VERSO: sobre + LinkedIn -->
                <div class="postit-face postit-back">

                    <div class="badge-mini">
                        ${montarFoto(pessoa, "badge-mini-photo")}
                        <div>
                            <strong>${pessoa.nome.trim()}</strong>
                            <span>${pessoa.papel}</span>
                        </div>
                    </div>

                    <div>
                        <span class="label">Sobre</span>
                        <p class="bio">${pessoa.bio}</p>
                        <div class="tags">
                            ${pessoa.tags.map((tag) => `<span>${tag}</span>`).join("")}
                        </div>
                    </div>

                    <a class="postit-linkedin" href="${pessoa.linkedin}" target="_blank"
                        rel="noopener noreferrer" aria-label="LinkedIn de ${pessoa.nome.trim()}">
                        <i class="fa-brands fa-linkedin"></i>
                        LinkedIn
                    </a>

                </div>

            </div>
        `;

        /* Se a foto não carregar, remove o <img> e sobram as iniciais */
        postit.querySelectorAll(".badge-photo img, .badge-mini-photo img").forEach((img) => {
            img.addEventListener("error", () => {
                img.parentElement.classList.add("is-empty");
                img.remove();
            });
        });

        /* Clique no post-it vira o cartão, exceto se o clique for no botão do LinkedIn */
        postit.addEventListener("click", (event) => {
            if (event.target.closest(".postit-linkedin")) return;
            postit.classList.toggle("flipped");
        });

        grid.appendChild(postit);

    });

});