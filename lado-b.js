/* =====================================================
   LADO B — MÍDIAS E COMPORTAMENTO

   ⚠️ COMO COLOCAR / ACRESCENTAR MÍDIAS

   Todas as mídias ficam em ./assets/images/lado-B/ :

        fotos/fotos verticais/        → lista "fotosVerticais"
        fotos/fotos_horizontal/       → lista "fotosHorizontais"  (inclui as "ambos")
        videos/Videos_vertical/       → lista "videosVerticais"
        videos/videos_horizontal/     → lista "videosHorizontais"

   Em cada lista, UMA LINHA POR ARQUIVO, só o nome com a extensão:

        "nome_da_foto_vert.jpg",

   Quer uma legenda (aparece escrita "a caneta" no polaroid, ou embaixo da fita)?
   Use colchetes com a legenda no segundo lugar:

        ["nome_da_foto_vert.jpg", "Minha legenda"],

   Para ACRESCENTAR: copie uma linha, cole embaixo e troque o nome.
   A ordem das listas é a ordem na tela.

   O QUE O SITE FAZ SOZINHO
   • Fotos: mistura verticais e horizontais de forma uniforme no mural.
     Clicou na foto → abre grande (setas ◀ ▶, teclado ← → e Esc).
   • Vídeos: espalha os horizontais no meio dos verticais, em linhas
     completas de 3. Passou o mouse = prévia sem áudio. Clicou = abre
     grande (pausa, ±10s, som, tela cheia).
   • Se um arquivo não for encontrado, o erro aparece no Console do
     navegador (F12): "[Lado B] não achei ..."

   Dica: tente deixar cada vídeo abaixo de ~15 MB e cada foto abaixo de
   ~1 MB, senão o site fica pesado.
===================================================== */

/* ---------- Pastas (respeite maiúsculas/minúsculas e o espaço em "fotos verticais") ---------- */

const PASTA_LADO_B = "./assets/images/lado-B/";

const PASTAS = {
    fotoVertical: PASTA_LADO_B + "fotos/fotos verticais/",
    fotoHorizontal: PASTA_LADO_B + "fotos/fotos_horizontal/",
    videoVertical: PASTA_LADO_B + "videos/Videos_vertical/",
    videoHorizontal: PASTA_LADO_B + "videos/videos_horizontal/",
};

/* ---------- VÍDEOS ---------- */

const videosVerticais = [
    ["joyce_vert.mp4", "ai que vergonha"],
    ["cecilia_girando_vert.mp4", "bayblade"],
    ["carrasco_pentada_vert.mp4", "carrasco??"],
    "carrasco_pentada_2_vert.mp4",
    "ceci_espirro_vert.mp4",
    "ceci_sarrada_vert.mp4",
    "remocao_cravo_vert.mp4",
    "cadu_festa_vert.mp4",
    "deb_boliche_2_vert.mp4",
    "deb_boliche_vert.mp4",
    "360_vert.mp4",
    "so_doido_vert.mp4",
    "cecilia_pos_shot_vert.mp4",
    "galera_concentrada_vert.mp4",
    "clistian_mateus_corda_vert.mp4",
    "joao_php_vert.mp4",
    "deb_cagando_vert.mp4",
    "fatia_pizza_vert.mp4",
    "rafa_porco_vert.mp4",
    "cecilia_surtando_vert.mp4",
    "cecilia_futebol_vert.mp4",
];

const videosHorizontais = [
    "caos_hori.mp4",
    "ceci_sarrada_hori.mp4",
];

/* ---------- FOTOS VERTICAIS ---------- */

const fotosVerticais = [
    "artur_juliana_1_vert.jpg",
    "artur_juliana_2_vert.jpg",
    "bicepes_ceci_vert.jpeg",
    "cadu_foco_vert.jpg",
    "cadu_porco_vert.jpg",
    "cadu_veio_vert.jpg",
    "carrasco_bico_vert.jpeg",
    "carrasco_fabio_vert.jpeg",
    "carrasco_oii_vert.jpeg",
    "carrasco_taca_vert.jpeg",
    "ceci_acai_vert.jpg",
    "ceci_boca_cehia_vert.jpg",
    "ceci_cesar_vert.jpg",
    "ceci_chegando_1_vert.jpg",
    "ceci_chegando_2_vert.jpg",
    "ceci_clistian_abraco_vert.jpg",
    "ceci_esquisita_vert.jpg",
    "ceci_hippe_2_vert.jpg",
    "ceci_hippe_3_vert.jpg",
    "ceci_hippe_vert.jpg",
    "ceci_monga_vert.jpg",
    "ceci_oxe_vert.jpeg",
    "ceci_pitoca_vert.jpg",
    "ceci_porco_vert.jpg",
    "ceci_propaganda_vert.jpeg",
    "ceci_sera_vert.jpg",
    "ceci_yanco_cubo_vert.jpg",
    "ceci_zezin_2_vert.jpg",
    "ceci_zezin_3_vert.jpg",
    "ceci_zezin_4_vert.jpg",
    "ceci_zezin_5_vert.jpg",
    "ceci_zezin_lado_vert.jpg",
    "ceci_zezin_vert.jpg",
    "cecilia_largada_vert.jpeg",
    "clistian_dev_vert.jpeg",
    "clistian_dormindo_vert.jpeg",
    "clistian_parou_vert.jpeg",
    "clistian_zezin_vert.jpg",
    "deb_brasil_vert.jpg",
    "deb_etcha_vert.jpeg",
    "deb_fabio_deitado_vert.jpeg",
    "deb_lingua_vert.jpg",
    "deb_noiada_vert.jpg",
    "deb_pedro_mascara_vert.jpg",
    "deb_rum_vert.jpeg",
    "deb_vert.jpeg",
    "debi_tatuada_verti.jpeg",
    "debs_seila_vert.jpg",
    "debs_zezin_vert.jpg",
    "dedo_cu_pedro_vert.jpg",
    "duda_dormindo_vert.jpg",
    "duda_metro_vert.jpg",
    "emanuel_vert.jpeg",
    "fabio_assustado_vert.jpeg",
    "fabio_peixe_vert.jpeg",
    "fabio_posudo_vert.jpeg",
    "fabio_sorriso_vert.jpeg",
    "fabio_uh_vert.jpeg",
    "fabio_zezin_2_vert.jpg",
    "fabio_zezin_3_vert.jpg",
    "fabio_zezin_vert.jpg",
    "fofoca_vert.jpeg",
    "interessante_vert.jpeg",
    "joao_amen_vert.jpeg",
    "joao_pensador_vert.jpg",
    "joao_sorriso_vert.jpg",
    "joyce_metro_vert.jpg",
    "joyce_zezin_vert.jpg",
    "lucas_vert.jpg",
    "mateus_aranha_vert.jpg",
    "mateus_gravacao_vert.jpeg",
    "mateus_inchado_vert.jpeg",
    "pedro_foco_vert.jpg",
    "pedro_hmm_vert.jpeg",
    "pedro_lucas_vert.jpg",
    "pedro_mascara_vert.jpg",
    "pedro_peito_vert.jpg",
    "pedro_rafa_vert.jpg",
    "remocao_cravo_vert.jpeg",
    "rosa_mascara_vert.jpg",
    "rosa_pensativa_vert.jpg",
    "shoyu_jogado_vert.jpg",
    "shoyu_safado_vert.jpg",
];

/* ---------- FOTOS HORIZONTAIS (e "ambos" = serve nos dois, quadradas ou quase) ---------- */

const fotosHorizontais = [
    "carrasco_oi_ambos.jpeg",
    "calebe_ambos.jpeg",
    "shoyu_sono_ambos.jpeg",
    "ceci_jureg_ambos.jpeg",
    "pedro_jureg_ambos.jpeg",
    "dedada_pedro_hori.jpeg",
    "nem_sei_ambos.jpeg",
    "clistian_assustador_hori.jpeg",
    "ceci_clistian_ambos.jpeg",
    "geral_hori.jpeg",
    "artur_baixo_hori.jpeg",
    "joao_sol_hori.jpeg",
    "pedro_que_hori.jpeg",
    "carrasco_baixo_hori.jpeg",
    "almoco_geral_hori.jpeg",
    "rafa_sorrindo_ambos.jpeg",
    "cadu_arrebatado_ambos.png",
    "cadu_energia_hori.jpg",
    "carrasco_zaroi_hori.jpg",
    "ceci_balao_hori.jpg",
    "ceci_yanco_cubo_hori.jpg",
    "clistian_apontando_hori.jpg",
    "deb_zaroia_hori.jpg",
    "fabio_bico_hori.jpg",
    "grupo_mascara_hori.jpg",
    "lucas_hori.jpg",
    "pedro_debs_hori.jpg",
    "pedro_demonio_hori.jpg",
    "pedro_sorrindo_hori.jpg",
    "pedro_sorrindo_longe_hori.jpg",
    "rafa_hori.jpg",
    "rafa_zezin_hori.jpg",
    "trio_cecilia_hori.png",
    "trio_polo_hori.jpg",
    "yanco_ceci_seudcao_hori.jpg",
    "yanco_energia_hori.jpg",
];


/* =====================================================
   MONTAGEM DAS LISTAS (não precisa mexer daqui pra baixo)
===================================================== */

/* Quantas fitas verticais cabem por linha no computador */
const COLUNAS_FITAS = 3;

/* "ceci_zezin_2_vert.jpg" -> "ceci zezin 2" (usado como texto alternativo) */
const nomeLegivel = (arquivo) =>
    arquivo
        .replace(/\.[^.]+$/, "")
        .replace(/_(vert|verti|hori|ambos)$/, "")
        .replace(/_/g, " ");

/* Aceita "arquivo.ext" ou ["arquivo.ext", "legenda"] e devolve um objeto pronto */
const criarMidia = (pasta, formato) => (entrada) => {
    const [arquivo, legenda = ""] = Array.isArray(entrada) ? entrada : [entrada];

    return {
        arquivo,
        legenda,
        alt: legenda || nomeLegivel(arquivo),
        formato: /_ambos\./i.test(arquivo) ? "ambos" : formato,
        pasta,
        src: encodeURI(pasta + arquivo),   /* encodeURI troca o espaço de "fotos verticais" por %20 */
        poster: "",
    };
};

/* Espalha os "extras" no meio dos "principais" de forma uniforme */
const intercalar = (principais, extras) => {
    const total = principais.length + extras.length;
    const resultado = [];
    let p = 0;
    let e = 0;

    for (let i = 0; i < total; i++) {
        const horaDoExtra = e < extras.length &&
            ((e + 0.5) / extras.length <= (i + 0.5) / total || p >= principais.length);

        resultado.push(horaDoExtra ? extras[e++] : principais[p++]);
    }

    return resultado;
};

/* Vídeos: linhas completas de verticais, com cada horizontal ocupando uma linha inteira,
   distribuídos em intervalos iguais (ex.: 21 verticais + 2 horizontais = 6 + H + 9 + H + 6) */
const distribuirFitas = (verticais, horizontais) => {
    const linhas = Math.ceil(verticais.length / COLUNAS_FITAS);
    const resultado = [];
    let usados = 0;

    for (let k = 0; k <= horizontais.length; k++) {
        const fim = k === horizontais.length
            ? verticais.length
            : Math.min(verticais.length, Math.round(linhas * (k + 1) / (horizontais.length + 1)) * COLUNAS_FITAS);

        resultado.push(...verticais.slice(usados, fim));
        usados = fim;

        if (k < horizontais.length) resultado.push(horizontais[k]);
    }

    return resultado;
};

const videos = distribuirFitas(
    videosVerticais.map(criarMidia(PASTAS.videoVertical, "vertical")),
    videosHorizontais.map(criarMidia(PASTAS.videoHorizontal, "horizontal"))
);

const fotos = intercalar(
    fotosVerticais.map(criarMidia(PASTAS.fotoVertical, "vertical")),
    fotosHorizontais.map(criarMidia(PASTAS.fotoHorizontal, "horizontal"))
);

/* Se um arquivo não abrir, tenta de novo com a extensão em MAIÚSCULAS (.jpg -> .JPG).
   No Windows tanto faz, mas no GitHub Pages maiúscula/minúscula importa. */
const tentarOutraCaixa = (midia) => {
    if (midia.tentouMaiuscula) return false;

    const maiuscula = midia.src.replace(/\.([A-Za-z0-9]+)$/, (_, ext) => "." + ext.toUpperCase());
    if (maiuscula === midia.src) return false;

    midia.tentouMaiuscula = true;
    midia.src = maiuscula;
    return true;
};

const avisarFalha = (midia) =>
    console.warn("[Lado B] não achei o arquivo \"" + midia.arquivo + "\" na pasta " + midia.pasta +
        " — confira o nome (e a extensão) no lado-b.js e se o arquivo está nessa pasta.");

/* Frases que rolam na faixa amarela */
const frases = [
    "SEM ROTEIRO",
    "SEM FILTRO",
    "CANTAMOS FORA DO TOM",
    "DANÇAMOS SEM SABER",
    "FANTASIA NÃO É OPCIONAL",
    "OFF THE RECORD",
    "404: SERIEDADE NÃO ENCONTRADA",
];

/* Frases do botão "Não clique" */
const avisos = [
    "Eu avisei.",
    "Você lê os termos de uso também, né?",
    "404: seriedade não encontrada.",
    "git push --force na alegria.",
    "Isso aqui não entra no TCC.",
    "Parabéns, você é dev mesmo: clicou no que não devia.",
    "Aqui ninguém é profissional. Bem-vindo.",
    "Tá vendo? Nada aconteceu. (mentira)",
];


document.addEventListener("DOMContentLoaded", () => {

    const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- Faixa animada ---------- */

    const marquee = document.getElementById("marqueeContent");

    if (marquee) {
        const conjunto = frases
            .map((f) => `<span>${f}</span><i class="fa-solid fa-star"></i>`)
            .join("");

        /* O conteúdo é repetido duas vezes para o loop ficar contínuo */
        marquee.innerHTML = conjunto + conjunto;
    }

    /* ---------- Fitas (vídeos) ---------- */

    const tapeGrid = document.getElementById("tapeGrid");

    /* Frame mostrado na miniatura parada (0.1s evita o primeiro quadro preto) */
    const FRAME_INICIAL = 0.1;

    /* Celular não tem "hover": lá a prévia toca no card que está visível na tela */
    const temHover = window.matchMedia("(hover: hover)").matches;

    const tocarPrevia = (previa) => {
        if (reduzirMovimento) return;
        const promessa = previa.play();
        if (promessa) promessa.catch(() => { });
    };

    const pararPrevia = (previa) => {
        previa.pause();
        try { previa.currentTime = FRAME_INICIAL; } catch (e) { }
    };

    /* ----- Player grande ----- */

    const modal = document.getElementById("videoModal");
    const vVideo = document.getElementById("vmVideo");
    const vFrame = document.getElementById("vmFrame");
    const vSeek = document.getElementById("vmSeek");
    const vPlay = document.getElementById("vmPlay");
    const vBack = document.getElementById("vmBack");
    const vFwd = document.getElementById("vmFwd");
    const vMute = document.getElementById("vmMute");
    const vFull = document.getElementById("vmFull");
    const vTime = document.getElementById("vmTime");
    const vNumero = document.getElementById("vmNumero");
    const vCaption = document.getElementById("vmCaption");
    const vClose = document.getElementById("vmClose");

    const SALTO = 10;           /* segundos dos botões ⟲ e ⟳ */
    let focoAntesDoVideo = null;
    let arrastandoBarra = false;
    let semSom = false;         /* lembra a escolha de som entre os vídeos */

    const formatarTempo = (seg) => {
        if (!isFinite(seg)) return "0:00";
        const m = Math.floor(seg / 60);
        const s = String(Math.floor(seg % 60)).padStart(2, "0");
        return m + ":" + s;
    };

    const atualizarTempo = () => {
        vTime.textContent = formatarTempo(vVideo.currentTime) + " / " + formatarTempo(vVideo.duration);

        if (!arrastandoBarra && vVideo.duration) {
            vSeek.value = (vVideo.currentTime / vVideo.duration) * 1000;
        }
    };

    const atualizarBotaoPlay = () => {
        const tocando = !vVideo.paused && !vVideo.ended;
        vPlay.innerHTML = `<i class="fa-solid ${tocando ? "fa-pause" : "fa-play"}"></i>`;
        vPlay.setAttribute("aria-label", tocando ? "Pausar" : "Tocar");
    };

    const atualizarBotaoSom = () => {
        vMute.innerHTML = `<i class="fa-solid ${vVideo.muted ? "fa-volume-xmark" : "fa-volume-high"}"></i>`;
        vMute.setAttribute("aria-label", vVideo.muted ? "Ligar o som" : "Desligar o som");
    };

    const alternarPlay = () => {
        if (vVideo.paused || vVideo.ended) {
            const promessa = vVideo.play();
            if (promessa) promessa.catch(() => { });
        } else {
            vVideo.pause();
        }
    };

    const pular = (segundos) => {
        const limite = vVideo.duration || 0;
        vVideo.currentTime = Math.min(Math.max(vVideo.currentTime + segundos, 0), limite);
    };

    const alternarSom = () => {
        vVideo.muted = !vVideo.muted;
        semSom = vVideo.muted;
    };

    const alternarTelaCheia = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (vFrame.requestFullscreen) {
            vFrame.requestFullscreen();
        } else if (vVideo.webkitEnterFullscreen) {   /* iPhone */
            vVideo.webkitEnterFullscreen();
        }
    };

    const abrirVideo = (video, numero, gatilho) => {
        focoAntesDoVideo = gatilho;

        vNumero.textContent = "FITA " + numero;
        vCaption.textContent = video.legenda;
        modal.classList.toggle("is-horizontal", video.formato === "horizontal");

        vVideo.poster = video.poster || "";
        vVideo.src = video.src;
        vVideo.muted = semSom;

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        alternarPlay();
        atualizarBotaoSom();
        vClose.focus();
    };

    const fecharVideo = () => {
        vVideo.pause();
        vVideo.removeAttribute("src");   /* libera o arquivo da memória */
        vVideo.load();

        if (document.fullscreenElement) document.exitFullscreen();

        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        vSeek.value = 0;

        if (focoAntesDoVideo) focoAntesDoVideo.focus();
    };

    if (modal) {
        vPlay.addEventListener("click", alternarPlay);
        vVideo.addEventListener("click", alternarPlay);
        vBack.addEventListener("click", () => pular(-SALTO));
        vFwd.addEventListener("click", () => pular(SALTO));
        vMute.addEventListener("click", alternarSom);
        vFull.addEventListener("click", alternarTelaCheia);
        vClose.addEventListener("click", fecharVideo);

        modal.addEventListener("click", (event) => {
            if (event.target === modal) fecharVideo();
        });

        vVideo.addEventListener("play", atualizarBotaoPlay);
        vVideo.addEventListener("pause", atualizarBotaoPlay);
        vVideo.addEventListener("ended", atualizarBotaoPlay);
        vVideo.addEventListener("volumechange", atualizarBotaoSom);
        vVideo.addEventListener("timeupdate", atualizarTempo);
        vVideo.addEventListener("loadedmetadata", atualizarTempo);

        vSeek.addEventListener("pointerdown", () => { arrastandoBarra = true; });
        vSeek.addEventListener("input", () => {
            if (vVideo.duration) vVideo.currentTime = (vSeek.value / 1000) * vVideo.duration;
        });
        vSeek.addEventListener("change", () => { arrastandoBarra = false; });
        window.addEventListener("pointerup", () => { arrastandoBarra = false; });

        document.addEventListener("keydown", (event) => {
            if (!modal.classList.contains("active")) return;

            const tag = event.target.tagName;
            const emControle = tag === "BUTTON" || tag === "INPUT";   /* esses já tratam Espaço/setas sozinhos */
            const tecla = event.key.toLowerCase();

            if (tecla === "escape") fecharVideo();
            if (tecla === " " && !emControle) { event.preventDefault(); alternarPlay(); }
            if (tecla === "k") alternarPlay();
            if (tecla === "arrowleft" && tag !== "INPUT") { event.preventDefault(); pular(-SALTO); }
            if (tecla === "arrowright" && tag !== "INPUT") { event.preventDefault(); pular(SALTO); }
            if (tecla === "m") alternarSom();
            if (tecla === "f") alternarTelaCheia();
        });
    }

    /* ----- Cards das fitas ----- */

    if (tapeGrid) {

        const semSinalHTML = `<div class="no-signal">
                        <strong>SEM SINAL</strong>
                        <span>a fita ainda está rebobinando</span>
                   </div>`;

        /* Celular: não existe hover, então toca a prévia de UM card por vez
           (o que está mais perto do meio da tela). Evita vários vídeos tocando juntos. */
        const visiveis = new Set();
        let previaAtual = null;
        let esperandoFrame = false;

        const trocarPrevia = (botao) => {
            if (previaAtual === botao) return;

            if (previaAtual) {
                previaAtual.closest(".tape-card").classList.remove("is-previewing");
                pararPrevia(previaAtual.querySelector(".tape-preview"));
            }

            previaAtual = botao;

            if (botao) {
                botao.closest(".tape-card").classList.add("is-previewing");
                tocarPrevia(botao.querySelector(".tape-preview"));
            }
        };

        const escolherPreviaDoCelular = () => {
            esperandoFrame = false;

            if (modal.classList.contains("active")) {
                trocarPrevia(null);
                return;
            }

            const meio = window.innerHeight / 2;
            let melhor = null;
            let menorDistancia = Infinity;

            visiveis.forEach((botao) => {
                const r = botao.getBoundingClientRect();
                const distancia = Math.abs(r.top + r.height / 2 - meio);

                if (distancia < menorDistancia) {
                    menorDistancia = distancia;
                    melhor = botao;
                }
            });

            trocarPrevia(melhor);
        };

        const pedirEscolha = () => {
            if (esperandoFrame) return;
            esperandoFrame = true;
            requestAnimationFrame(escolherPreviaDoCelular);
        };

        const observadorPrevia = (!temHover && "IntersectionObserver" in window)
            ? new IntersectionObserver((entradas) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) visiveis.add(entrada.target);
                    else visiveis.delete(entrada.target);
                });
                pedirEscolha();
            }, { threshold: 0.6 })
            : null;

        if (observadorPrevia) window.addEventListener("scroll", pedirEscolha, { passive: true });

        videos.forEach((video, i) => {

            const horizontal = video.formato === "horizontal";
            const numero = String(i + 1).padStart(2, "0");

            const card = document.createElement("figure");
            card.className = "tape-card" + (horizontal ? " is-horizontal" : "");
            card.innerHTML = `
                <div class="tape-label">
                    <b>FITA ${numero}</b>
                    <em>gravado sem permissão</em>
                </div>
                <div class="tape-screen"></div>
                <figcaption></figcaption>
            `;

            card.querySelector("figcaption").textContent = video.legenda;

            const tela = card.querySelector(".tape-screen");

            if (!video.src) {
                tela.innerHTML = semSinalHTML;
                tapeGrid.appendChild(card);
                return;
            }

            tela.innerHTML = `
                <button type="button" class="tape-open">
                    <video class="tape-preview" muted loop playsinline preload="metadata"></video>
                    <span class="tape-play" aria-hidden="true"><i class="fa-solid fa-play"></i></span>
                    <span class="tape-hint" aria-hidden="true"><i class="fa-solid fa-expand"></i> ampliar</span>
                </button>
            `;

            const botao = tela.querySelector(".tape-open");
            const previa = botao.querySelector(".tape-preview");

            botao.setAttribute("aria-label", "Abrir em tela grande: " + video.alt);
            if (video.poster) previa.poster = video.poster;

            /* Arquivo não achado: tenta .MP4 maiúsculo; se ainda falhar, mostra "SEM SINAL" */
            previa.addEventListener("error", () => {
                if (tentarOutraCaixa(video)) {
                    previa.src = video.src + "#t=" + FRAME_INICIAL;
                    return;
                }

                avisarFalha(video);
                visiveis.delete(botao);
                tela.innerHTML = semSinalHTML;
            });

            previa.src = video.src + "#t=" + FRAME_INICIAL;

            /* Prévia por hover (computador) */
            if (temHover) {
                botao.addEventListener("mouseenter", () => {
                    card.classList.add("is-previewing");
                    tocarPrevia(previa);
                });

                botao.addEventListener("mouseleave", () => {
                    card.classList.remove("is-previewing");
                    pararPrevia(previa);
                });
            }

            botao.addEventListener("click", () => {
                card.classList.remove("is-previewing");
                pararPrevia(previa);
                previaAtual = null;
                abrirVideo(video, numero, botao);
            });

            if (observadorPrevia) observadorPrevia.observe(botao);

            tapeGrid.appendChild(card);
        });
    }

    /* ---------- Fotos (polaroids) + lightbox ---------- */

    const wall = document.getElementById("polaroidWall");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxCount = document.getElementById("lightboxCount");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");

    let fotoAtual = 0;
    let ultimoFoco = null;

    const mostrarFoto = (indice) => {
        fotoAtual = (indice + fotos.length) % fotos.length;

        const foto = fotos[fotoAtual];

        lightboxImage.src = foto.src;
        lightboxImage.alt = foto.alt;
        lightboxCaption.textContent = foto.legenda;
        lightboxCount.textContent = (fotoAtual + 1) + " / " + fotos.length;
    };

    const abrirLightbox = (indice) => {
        ultimoFoco = document.activeElement;
        mostrarFoto(indice);
        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        lightboxClose.focus();
    };

    const fecharLightbox = () => {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        if (ultimoFoco) ultimoFoco.focus();
    };

    /* Faz a foto ocupar o máximo da tela, mantendo a proporção.
       Também aumenta fotos pequenas (o CSS sozinho só sabe diminuir). */
    const ajustarTamanhoDaFoto = () => {
        const largura = lightboxImage.naturalWidth;
        const altura = lightboxImage.naturalHeight;
        if (!largura || !altura) return;

        const moldura = lightbox.querySelector(".lightbox-frame");
        const estilo = getComputedStyle(moldura);
        const sobraLargura = parseFloat(estilo.paddingLeft) + parseFloat(estilo.paddingRight) + 8;
        const sobraAltura = parseFloat(estilo.paddingTop) + parseFloat(estilo.paddingBottom) + 8;

        const larguraMax = window.innerWidth * 0.94 - sobraLargura;
        const alturaMax = window.innerHeight * 0.94 - sobraAltura;
        const escala = Math.min(larguraMax / largura, alturaMax / altura);

        lightboxImage.style.width = Math.floor(largura * escala) + "px";
    };

    lightboxImage.addEventListener("load", ajustarTamanhoDaFoto);

    window.addEventListener("resize", () => {
        if (lightbox.classList.contains("active")) ajustarTamanhoDaFoto();
    });

    /* Foto grande que não abriu: tenta a extensão maiúscula (mesma regra das miniaturas) */
    lightboxImage.addEventListener("error", () => {
        const foto = fotos[fotoAtual];
        if (!lightbox.classList.contains("active")) return;

        if (tentarOutraCaixa(foto)) {
            lightboxImage.src = foto.src;
        } else {
            avisarFalha(foto);
        }
    });

    if (wall) {
        fotos.forEach((foto, i) => {
            const item = document.createElement("button");
            item.type = "button";
            item.className = "polaroid is-" + foto.formato;   /* is-vertical | is-horizontal | is-ambos */
            item.setAttribute("aria-label", "Ver foto grande: " + foto.alt);

            const img = document.createElement("img");
            img.alt = foto.alt;
            img.loading = "lazy";
            img.decoding = "async";

            img.addEventListener("error", () => {
                if (tentarOutraCaixa(foto)) {
                    img.src = foto.src;
                } else {
                    avisarFalha(foto);
                }
            });

            img.src = foto.src;

            const legenda = document.createElement("span");
            legenda.className = "cap";
            legenda.textContent = foto.legenda;

            item.append(img, legenda);
            item.addEventListener("click", () => abrirLightbox(i));
            wall.appendChild(item);
        });
    }

    lightboxClose.addEventListener("click", fecharLightbox);
    lightboxPrev.addEventListener("click", () => mostrarFoto(fotoAtual - 1));
    lightboxNext.addEventListener("click", () => mostrarFoto(fotoAtual + 1));

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) fecharLightbox();
    });

    document.addEventListener("keydown", (event) => {
        if (!lightbox.classList.contains("active")) return;

        if (event.key === "Escape") fecharLightbox();
        if (event.key === "ArrowRight") mostrarFoto(fotoAtual + 1);
        if (event.key === "ArrowLeft") mostrarFoto(fotoAtual - 1);
    });

    /* ---------- Contador REC do visor ---------- */

    const timer = document.getElementById("recTimer");
    const inicio = Date.now();

    if (timer) {
        const dois = (n) => String(n).padStart(2, "0");

        setInterval(() => {
            const s = Math.floor((Date.now() - inicio) / 1000);
            timer.textContent =
                dois(Math.floor(s / 3600)) + ":" +
                dois(Math.floor((s % 3600) / 60)) + ":" +
                dois(s % 60);
        }, 1000);
    }

    /* ---------- Números do placar ---------- */

    const numeros = document.querySelectorAll("[data-count]");

    const contar = (el) => {
        const alvo = Number(el.dataset.count);
        const sufixo = el.dataset.suffix || "";

        if (reduzirMovimento || alvo === 0) {
            el.textContent = alvo + sufixo;
            return;
        }

        const duracao = 1400;
        const t0 = performance.now();

        const passo = (agora) => {
            const p = Math.min((agora - t0) / duracao, 1);
            const suave = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(alvo * suave) + sufixo;
            if (p < 1) requestAnimationFrame(passo);
        };

        requestAnimationFrame(passo);
    };

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    contar(entrada.target);
                    observador.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.6 });

        numeros.forEach((n) => observador.observe(n));
    } else {
        numeros.forEach(contar);
    }

    /* ---------- Confete ---------- */

    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    const cores = ["#FAC111", "#CE1F01", "#F69200", "#f4f1e9"];
    let pecas = [];
    let animando = false;

    const ajustarCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    ajustarCanvas();
    window.addEventListener("resize", ajustarCanvas);

    const desenhar = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pecas.forEach((p) => {
            p.vy += 0.16;
            p.vx *= 0.99;
            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.vr;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.fillStyle = p.cor;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });

        pecas = pecas.filter((p) => p.y < canvas.height + 30);

        if (pecas.length) {
            requestAnimationFrame(desenhar);
        } else {
            animando = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    };

    const confete = (x, y, quantidade) => {
        if (reduzirMovimento) return;

        for (let i = 0; i < quantidade; i++) {
            const angulo = Math.random() * Math.PI * 2;
            const forca = 4 + Math.random() * 9;

            pecas.push({
                x,
                y,
                vx: Math.cos(angulo) * forca,
                vy: Math.sin(angulo) * forca - 6,
                w: 6 + Math.random() * 8,
                h: 4 + Math.random() * 6,
                rot: Math.random() * Math.PI,
                vr: (Math.random() - 0.5) * 0.4,
                cor: cores[Math.floor(Math.random() * cores.length)],
            });
        }

        if (!animando) {
            animando = true;
            requestAnimationFrame(desenhar);
        }
    };

    /* Explosão de boas-vindas, uma única vez */
    setTimeout(() => confete(window.innerWidth / 2, window.innerHeight * 0.4, 140), 350);

    /* ---------- Botão "Não clique" ---------- */

    const toast = document.getElementById("toast");
    const botao = document.getElementById("dontClick");
    let ultimoAviso = -1;
    let timeoutAviso;

    const avisar = (texto) => {
        toast.textContent = texto;
        toast.classList.add("show");
        clearTimeout(timeoutAviso);
        timeoutAviso = setTimeout(() => toast.classList.remove("show"), 2800);
    };

    if (botao) {
        botao.addEventListener("click", (event) => {
            const r = event.currentTarget.getBoundingClientRect();
            confete(r.left + r.width / 2, r.top + r.height / 2, 110);

            let i;
            do {
                i = Math.floor(Math.random() * avisos.length);
            } while (i === ultimoAviso);

            ultimoAviso = i;
            avisar(avisos[i]);
        });
    }

    /* ---------- Clique no "B" faz o título tremer ---------- */

    const bigB = document.getElementById("bigB");

    if (bigB && !reduzirMovimento) {
        bigB.addEventListener("click", () => {
            bigB.classList.remove("is-glitching");
            void bigB.offsetWidth;
            bigB.classList.add("is-glitching");
        });

        bigB.addEventListener("animationend", (event) => {
            if (event.animationName === "glitch-fast") {
                bigB.classList.remove("is-glitching");
            }
        });
    }

});