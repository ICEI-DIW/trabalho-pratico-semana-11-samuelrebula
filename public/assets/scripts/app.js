const API_URL = "http://localhost:3000/lugaresTuristicos";

// Utilitário para buscar todos os lugares turísticos
async function fetchLugaresTuristicos() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Erro ao buscar dados");
  return res.json();
}

// Utilitário para buscar um lugar turístico por ID
async function fetchLugarPorId(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Destino não encontrado");
  return res.json();
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
  if (footerContainerIndex) footerContainerIndex.innerHTML = finalFooterHtml;
  if (footerContainerDetalhe)
    footerContainerDetalhe.innerHTML = finalFooterHtml;
}

// Página principal (index.html)
async function carregarDestaques() {
  const carouselInner = document.getElementById("carousel-inner-destaques");
  const carouselIndicators = document.getElementById("carousel-indicators");
  if (!carouselInner || !carouselIndicators) return;
  const lugares = await fetchLugaresTuristicos();
  const destaques = lugares.filter((item) => item.destaque);
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
    if (index === 0) carouselItem.classList.add("active");

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

async function carregarTodosCards() {
  const cardsContainer = document.getElementById("cards-container");
  if (!cardsContainer) return;
  const lugares = await fetchLugaresTuristicos();
  cardsContainer.innerHTML = "";
  lugares.forEach((item) => {
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

// Página de detalhes (detalhe.html)
function getQueryParamId() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get("id"));
}

async function carregarDetalhesItem() {
  const detalhesContainer = document.getElementById("detalhes-container");
  const fotosContainer = document.getElementById(
    "fotos-complementares-container"
  );
  const loadingFotos = document.getElementById("loading-fotos");
  if (!detalhesContainer || !fotosContainer) return;
  const itemId = getQueryParamId();
  let item;
  try {
    item = await fetchLugarPorId(itemId);
  } catch {
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
                      <span><strong>Categoria:</strong> ${item.categoria}</span>
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

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("carouselDestaques")) {
    carregarDestaques();
    carregarTodosCards();
    carregarInfoAlunoFooter();
  } else if (document.getElementById("detalhes-container")) {
    carregarDetalhesItem();
    carregarInfoAlunoFooter();
  }
});
