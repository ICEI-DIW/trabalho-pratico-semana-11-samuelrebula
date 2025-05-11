const dados = {
  lugaresTuristicos: [
    {
      id: 1,
      nome: "Helsinque: Capital Vibrante",
      descricaoCurta:
        "Explore a capital finlandesa, uma mistura de design moderno, história e natureza.",
      descricaoLonga:
        "Helsinque, a capital da Finlândia, é uma cidade marítima vibrante com belas ilhas e grandes parques verdes. A arquitetura varia do neoclássico ao moderno. Visite a Praça do Senado, a Catedral de Helsinque, a fortaleza marítima de Suomenlinna (Patrimônio Mundial da UNESCO) e explore os bairros de design. A cidade oferece museus de classe mundial, galerias de arte e uma cena gastronômica em ascensão.",
      categoria: "Cidade",
      regiao: "Sul da Finlândia",
      melhorEpoca: "Junho a Agosto (verão)",
      destaque: true,
      imagemPrincipal:
        "https://images.unsplash.com/photo-1522885147691-06d859633fb8?q=80&w=1200&auto=format&fit=crop",
      imagensComplementares: [
        {
          id: 1,
          src: "https://plus.unsplash.com/premium_photo-1661962484484-061bd76ac4f1?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          descricao: "Catedral de Helsinque",
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1677748422803-31d2ea8dc5da?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          descricao: "Fortaleza de Suomenlinna",
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=1200&auto=format&fit=crop",
          descricao: "Arquitetura moderna",
        },
      ],
    },
    {
      id: 2,
      nome: "Lapônia: Magia do Ártico",
      descricaoCurta:
        "Descubra a terra do Papai Noel, da aurora boreal e de paisagens nevadas deslumbrantes.",
      descricaoLonga:
        "A Lapônia Finlandesa é uma região mágica no Círculo Polar Ártico. É famosa por ser a casa oficial do Papai Noel (em Rovaniemi), pelas incríveis exibições da Aurora Boreal durante o inverno e por suas vastas paisagens selvagens. Atividades populares incluem safáris de husky e rena, esqui, snowmobiling e a experiência única de dormir em um iglu de vidro.",
      categoria: "Natureza",
      regiao: "Norte da Finlândia",
      melhorEpoca: "Dezembro a Março (inverno e aurora)",
      destaque: true,
      imagemPrincipal:
        "https://images.unsplash.com/photo-1742386675795-53fb54ed3d2b?q=80&w=1200&auto=format&fit=crop",
      imagensComplementares: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1505136026201-bbc1bc0949fa?q=80&w=1200&auto=format&fit=crop",
          descricao: "Aurora Boreal sobre a Lapônia",
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1553966528-237ab71fb292?q=80&w=1200&auto=format&fit=crop",
          descricao: "Vila do Papai Noel em Rovaniemi",
        },
      ],
    },
    {
      id: 3,
      nome: "Rovaniemi: Cidade do Papai Noel",
      descricaoCurta:
        "Visite a capital da Lapônia e o lar oficial do Papai Noel no Círculo Polar Ártico.",
      descricaoLonga:
        "Rovaniemi é a porta de entrada para a Lapônia e mundialmente famosa por abrigar a Vila do Papai Noel. Além de encontrar o bom velhinho, você pode cruzar a linha do Círculo Polar Ártico, visitar o museu Arktikum para aprender sobre a vida no Ártico e desfrutar de diversas atividades de inverno. É um destino encantador para famílias e amantes da natureza.",
      categoria: "Cultura",
      regiao: "Lapônia",
      melhorEpoca: "Novembro a Março (inverno mágico)",
      destaque: false,
      imagemPrincipal:
        "https://images.unsplash.com/photo-1586125916870-958d645d407e?q=80&w=1200&auto=format&fit=crop",
      imagensComplementares: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1514773896690-40d0fd46f143?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          descricao: "Trenó puxado por renas",
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1643888986492-1640a909c144?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          descricao: "Museu Arktikum",
        },
      ],
    },
    {
      id: 4,
      nome: "Região dos Lagos: Serenidade Aquática",
      descricaoCurta:
        "Explore a maior região lacustre da Europa, com milhares de lagos e florestas.",
      descricaoLonga:
        "A Região dos Lagos Finlandesa (Lakeland) é um vasto labirinto azul de lagos, ilhas, rios e canais, intercalados por florestas e cumes. É o lugar perfeito para relaxar em uma cabana de verão (mökki), nadar, pescar, andar de caiaque ou simplesmente desfrutar da paz e tranquilidade da natureza. Cidades como Savonlinna, com seu castelo medieval, são pontos de interesse cultural.",
      categoria: "Natureza",
      regiao: "Leste da Finlândia",
      melhorEpoca: "Junho a Agosto (verão)",
      destaque: false,
      imagemPrincipal:
        "https://images.unsplash.com/photo-1586699253884-e199770f63b9?q=80&w=1200&auto=format&fit=crop",
      imagensComplementares: [
        {
          id: 1,
          src: "https://www.etuovi.com/kumppanisisallot/wp-content/uploads/sites/18/2021/11/Heinola-20642250.jpeg",
          descricao: "Cabana típica (mökki) à beira do lago",
        },
        {
          id: 2,
          src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d7/e4/96/caption.jpg?w=1200&h=-1&s=1",
          descricao: "Castelo Olavinlinna em Savonlinna",
        },
      ],
    },
  ],
};

// --- Funções para a Página Principal (index.html) ---

function carregarDestaques() {
  const carouselInner = document.getElementById("carousel-inner-destaques");
  const carouselIndicators = document.getElementById("carousel-indicators");
  if (!carouselInner || !carouselIndicators) return;

  const destaques = dados.lugaresTuristicos.filter((item) => item.destaque);
  carouselInner.innerHTML = "";
  carouselIndicators.innerHTML = "";

  destaques.forEach((item, index) => {
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.dataset.bsTarget = "#carouselDestaques";
    indicator.dataset.bsSlideTo = index;
    if (index === 0) {
      indicator.classList.add("active");
      indicator.setAttribute("aria-current", "true");
    }
    indicator.setAttribute("aria-label", `Slide ${index + 1}`);
    carouselIndicators.appendChild(indicator);

    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    const linkDetalhe = document.createElement("a");
    linkDetalhe.href = `detalhe.html?id=${item.id}`;

    linkDetalhe.innerHTML = `
            <img src="${item.imagemPrincipal}" class="d-block w-100" alt="${item.nome}" style="height: 450px; object-fit: cover;">
            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
                <h5>${item.nome}</h5>
                <p>${item.descricaoCurta}</p>
            </div>
        `;
    carouselItem.appendChild(linkDetalhe);
    carouselInner.appendChild(carouselItem);
  });
}

function carregarTodosCards() {
  const cardsContainer = document.getElementById("cards-container");
  if (!cardsContainer) return;

  cardsContainer.innerHTML = "";

  dados.lugaresTuristicos.forEach((item) => {
    const cardHtml = `
            <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
              <div class="card h-100 border-0 shadow-sm destino-card">
                <div class="card-image position-relative overflow-hidden" style="height: 200px;">
                  <img src="${
                    item.imagemPrincipal
                  }" class="img-fluid w-100 h-100 object-fit-cover" alt="${
      item.nome
    }">
                  <div class="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                    <a href="detalhe.html?id=${
                      item.id
                    }" class="btn btn-outline-light btn-card">Ver mais</a>
                  </div>
                </div>
                <div class="card-body d-flex flex-column">
                  <h3 class="h5 card-title">${item.nome}</h3>
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge bg-light text-dark tipo-atracao">
                      <i class="fas ${getCategoriaIcon(
                        item.categoria
                      )} me-1"></i> ${item.categoria}
                    </span>
                    <!-- Pode adicionar rating ou outra info aqui -->
                  </div>
                  <p class="card-text text-muted small flex-grow-1">${
                    item.descricaoCurta
                  }</p>
                  <a href="detalhe.html?id=${
                    item.id
                  }" class="btn btn-sm btn-primary mt-auto align-self-start">Detalhes</a>
                </div>
                <div class="card-footer bg-white border-top-0">
                  <div class="d-flex justify-content-between small text-muted">
                    <span><i class="fas fa-map-marker-alt me-1"></i> ${
                      item.regiao
                    }</span>
                    <span><i class="fas fa-calendar-alt me-1"></i> ${
                      item.melhorEpoca
                    }</span>
                  </div>
                </div>
              </div>
            </div>
        `;
    cardsContainer.innerHTML += cardHtml;
  });
}

function getCategoriaIcon(categoria) {
  switch (categoria.toLowerCase()) {
    case "cidade":
      return "fa-city";
    case "natureza":
      return "fa-tree";
    case "cultura":
      return "fa-landmark";
    case "aventura":
      return "fa-skiing";
    default:
      return "fa-map-pin";
  }
}

// Função para carregar info no footer
function carregarInfoAlunoFooter() {
  const footerContainerIndex = document.getElementById("info-aluno-footer");
  const footerContainerDetalhe = document.getElementById(
    "info-aluno-footer-detalhe"
  );

  const nomeAluno = "Samuel Rebula";
  const curso = "Engenharia de Software";
  const disciplina = "Desenvolvimento de Interfaces Web";
  const githubUrl = "https://github.com/samuelrebula";
  const linkedinUrl = "https://www.linkedin.com/in/samuel-rebula/";

  const infoAlunoHtml = `
        <p class="mb-1">Aluno: ${nomeAluno}</p>
        <p class="mb-2"><small>${disciplina} - ${curso}</small></p> 
    `;

  const socialIconsHtml = `
        <div class="d-flex gap-3"> 
            <a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="text-white-50" aria-label="Perfil do GitHub de ${nomeAluno}">
                <i class="fab fa-github fa-lg"></i> 
            </a>
            <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" class="text-white-50" aria-label="Perfil do LinkedIn de ${nomeAluno}">
                <i class="fab fa-linkedin fa-lg"></i> 
            </a>
        </div>
    `;

  const finalFooterHtml = infoAlunoHtml + socialIconsHtml;

  if (footerContainerIndex) {
    footerContainerIndex.innerHTML = finalFooterHtml;
  }

  if (footerContainerDetalhe) {
    footerContainerDetalhe.innerHTML = finalFooterHtml;
  }
}

// --- Funções para a Página de Detalhes (detalhe.html) ---

function getQueryParamId() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get("id"));
}

function buscarItemPorId(id) {
  return dados.lugaresTuristicos.find((item) => item.id === id);
}

function carregarDetalhesItem() {
  const detalhesContainer = document.getElementById("detalhes-container");
  const fotosContainer = document.getElementById(
    "fotos-complementares-container"
  );
  const loadingFotos = document.getElementById("loading-fotos");

  if (!detalhesContainer || !fotosContainer) return;

  const itemId = getQueryParamId();
  const item = buscarItemPorId(itemId);

  if (!item) {
    detalhesContainer.innerHTML =
      '<p class="text-center text-danger fw-bold">Item não encontrado!</p>';
    fotosContainer.innerHTML = "";
    if (loadingFotos) loadingFotos.style.display = "none";
    return;
  }

  detalhesContainer.innerHTML = `
        <div class="col-lg-7 mb-4 mb-lg-0">
            <h1 class="display-5 mb-3">${item.nome}</h1>
            <img src="${item.imagemPrincipal}" alt="${
    item.nome
  }" class="img-fluid detalhe-imagem-principal shadow-sm mb-4">
            <p class="lead">${item.descricaoLonga}</p>
        </div>
        <div class="col-lg-5">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-primary text-white">
                    <h5 class="mb-0"><i class="fas fa-info-circle me-2"></i>Detalhes Rápidos</h5>
                </div>
                <div class="card-body">
                    <div class="info-item">
                        <i class="fas fa-tag fa-fw"></i>
                        <span><strong>Categoria:</strong> ${
                          item.categoria
                        }</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt fa-fw"></i>
                        <span><strong>Região:</strong> ${item.regiao}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-calendar-check fa-fw"></i>
                        <span><strong>Melhor Época:</strong> ${
                          item.melhorEpoca
                        }</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-lightbulb fa-fw"></i>
                        <span><strong>Destaque:</strong> ${
                          item.destaque ? "Sim" : "Não"
                        }</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-images fa-fw"></i>
                        <span><strong>Fotos na Galeria:</strong> ${
                          item.imagensComplementares.length
                        }</span>
                    </div>
                     <div class="info-item">
                        <i class="fas fa-map fa-fw"></i>
                        <span><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          item.nome + ", Finlândia"
                        )}" target="_blank" class="text-decoration-none">Ver no Mapa <i class="fas fa-external-link-alt fa-xs"></i></a></span>
                    </div>
                </div>
            </div>
        </div>
    `;

  fotosContainer.innerHTML = "";
  if (item.imagensComplementares && item.imagensComplementares.length > 0) {
    item.imagensComplementares.forEach((foto) => {
      const fotoHtml = `
                <div class="col-md-4 col-sm-6">
                    <figure class="foto-complementar text-center">
                        <a href="${foto.src}" data-bs-toggle="tooltip" title="Clique para ampliar">
                           <img src="${foto.src}" alt="${foto.descricao}" class="img-fluid shadow-sm">
                        </a>
                        <figcaption>${foto.descricao}</figcaption>
                    </figure>
                </div>
            `;
      fotosContainer.innerHTML += fotoHtml;
    });
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  } else {
    fotosContainer.innerHTML =
      '<p class="col-12 text-muted">Nenhuma foto complementar disponível para este destino.</p>';
  }
  if (loadingFotos) loadingFotos.style.display = "none";
}

// --- Inicialização ---

document.addEventListener("DOMContentLoaded", () => {
  // Verifica qual página está carregada
  if (document.getElementById("carouselDestaques")) {
    // Estamos na index.html
    carregarDestaques();
    carregarTodosCards();
    carregarInfoAlunoFooter();
  } else if (document.getElementById("detalhes-container")) {
    // Estamos na detalhe.html
    carregarDetalhesItem();
    carregarInfoAlunoFooter();
  }
});
