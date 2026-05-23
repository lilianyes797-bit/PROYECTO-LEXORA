// =======================================================
// CONTROL DE CALIBRACIÓN CORE Y PROCESAMIENTO DE BALANZA
// =======================================================
let currentAngle = 25; 
let gameInterval = null;

function startTilt(dir) {
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        currentAngle += dir * 0.75;
        const beam = document.getElementById('balance-beam');
        if (beam) {
            beam.style.transform = `translate(-50%, -50%) rotate(${currentAngle}deg)`;
        }
        checkEquilibrium();
    }, 30);
}

function stopTilt() { 
    if (gameInterval) clearInterval(gameInterval); 
}

function checkEquilibrium() {
    if (Math.abs(currentAngle) < 1.5) {
        stopTilt();
        currentAngle = 0;
        const beam = document.getElementById('balance-beam');
        if (beam) beam.style.transform = `translate(-50%, -50%) rotate(0deg)`;
        
        const ins = document.getElementById('game-instruction');
        if (ins) {
            ins.innerHTML = "<span style='color: #00ff87; font-size: 1.3rem; font-weight: bold;'>SISTEMA CALIBRADO ACCESO CONCEDIDO</span>";
        }
        
        setTimeout(() => {
            const layer = document.getElementById('intro-game-layer');
            if (layer) layer.classList.add('layer-up');
            // Inicializa de forma segura el primer documento al terminar el juego
            ejecutarCargaInicialSubTab();
        }, 850);
    }
}

// =======================================================
// ARQUITECTURA DE ENRUTAMIENTO DE PESTAÑAS (TABS GENERAL)
// =======================================================
function switchMainTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    const activeTab = document.getElementById(tabId);
    if (activeTab) activeTab.classList.remove('hidden');

    document.querySelectorAll('.nav-item-elite').forEach(btn => {
        btn.classList.remove('active');
    });

    const triggerBtn = Array.from(document.querySelectorAll('.nav-item-elite')).find(btn => 
        btn.getAttribute('onclick').includes(tabId)
    );
    if (triggerBtn) triggerBtn.classList.add('active');
}

// =======================================================
// VISUALIZADOR DE EXPEDIENTES Y SELECCIÓN DE BOTÓN (BLINDADO)
// =======================================================
function cambiarSubTab(botonElemento, urlPdf, titulo) {
    // 1. Desactivar clases seleccionadas en la rejilla
    document.querySelectorAll('.sub-tab-card').forEach(btn => {
        btn.classList.remove('active');
    });

    // 2. Inyectar de forma nativa e independiente la clase activa usando la autoreferencia
    if (botonElemento) {
        botonElemento.classList.add('active');
    }

    // 3. Modificar el texto del visor
    const labelTitulo = document.getElementById('sub-viewer-title');
    if (labelTitulo) {
        labelTitulo.innerText = titulo;
    }

    // 4. Renderizar PDF con adaptabilidad responsiva
    const frameContainer = document.getElementById('sub-pdf-frame');
    if (frameContainer) {
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            const urlAbsoluta = window.location.origin + window.location.pathname.replace('index.html', '') + urlPdf;
            frameContainer.innerHTML = `<iframe src="https://docs.google.com/gview?url=${encodeURIComponent(urlAbsoluta)}&embedded=true" style="width:100%; height:100%; border:none;"></iframe>`;
        } else {
            frameContainer.innerHTML = `<embed src="${urlPdf}" type="application/pdf" style="width:100%; height:100%; border:none;">`;
        }
    }
}

function ejecutarCargaInicialSubTab() {
    const primerBoton = document.querySelector('.sub-tab-card');
    if (primerBoton) {
        cambiarSubTab(primerBoton, 'archivos/acta1.pdf', 'Documento 1: Acta de Denuncia Verbal');
    }
}

// =======================================================
// CONTROL DE MODALES DE PREDICCIÓN IA
// =======================================================
function openPdfModal(titulo, urlPdf) {
    const modal = document.getElementById('modal-pdf-viewer');
    const modalTitle = document.getElementById('modal-document-title');
    const modalBody = document.getElementById('modal-pdf-body');

    if (modal && modalTitle && modalBody) {
        modalTitle.innerText = titulo;
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            const urlAbsoluta = window.location.origin + window.location.pathname.replace('index.html', '') + urlPdf;
            modalBody.innerHTML = `<iframe src="https://docs.google.com/gview?url=${encodeURIComponent(urlAbsoluta)}&embedded=true" style="width:100%; height:100%; border:none;"></iframe>`;
        } else {
            modalBody.innerHTML = `<embed src="${urlPdf}" type="application/pdf" style="width:100%; height:100%; border:none;">`;
        }
        modal.classList.remove('hidden');
    }
}

// Cierre del visualizador modal
function closePdfModal() {
    const modal = document.getElementById('modal-pdf-viewer');
    const modalBody = document.getElementById('modal-pdf-body');
    if (modal) modal.classList.add('hidden');
    if (modalBody) modalBody.innerHTML = '';
}