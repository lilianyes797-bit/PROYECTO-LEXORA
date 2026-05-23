// ==========================================
// CONTROL CORE Y EQUILIBRIO DE LA BALANZA
// ==========================================
let currentAngle = 25; 
let gameInterval = null;

function startTilt(dir) {
    gameInterval = setInterval(() => {
        currentAngle += dir * 0.75;
        const beam = document.getElementById('balance-beam');
        if (beam) {
            beam.style.transform = `translate(-50%, -50%) rotate(${currentAngle}deg)`;
        }
        checkEquilibrium();
    }, 30);
}

function stopTilt() { clearInterval(gameInterval); }

function checkEquilibrium() {
    if (Math.abs(currentAngle) < 1.5) {
        stopTilt();
        currentAngle = 0;
        const beam = document.getElementById('balance-beam');
        if (beam) beam.style.transform = `translate(-50%, -50%) rotate(0deg)`;
        
        document.getElementById('game-instruction').innerHTML = 
            "<span style='color: #00ff87; font-size: 1.3rem; font-weight: bold;'>SISTEMA CALIBRADO</span>";
        
        setTimeout(() => {
            document.getElementById('intro-game-layer').classList.add('layer-up');
        }, 850);
    }
}

// VALIDACIÓN DE LOGEO
function validarCriterio() {
    const pass = document.getElementById('pass-input').value.toLowerCase().trim();
    if (pass === "lex") {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-dashboard').classList.remove('hidden');
        document.body.style.overflow = "auto";
    } else {
        alert("⚠️ Clave incorrecta. Introduzca las credenciales válidas.");
    }
}

// CONTROLADOR GENERADO DE PESTAÑAS PRINCIPALES
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.querySelectorAll('.nav-item-elite').forEach(item => item.classList.remove('active'));
    
    const target = document.getElementById('tab-' + tabId);
    if (target) target.classList.remove('hidden');
    
    // Inyección de contexto explícita para compatibilidad total con GitHub Pages
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
}

function logoutFunction() { location.reload(); }
function generarDocumento() { alert("Construyendo borrador con matrices heurísticas de VIPER..."); }

// ==========================================
// VISOR DE ARCHIVOS PDF ADJUNTOS REALES (COMPATIBLE CON CELULARES Y PC)
// ==========================================
function abrirVisorPDF(tituloDoc, urlArchivoPdf) {
    document.getElementById('modal-document-title').innerText = tituloDoc;
    const container = document.getElementById('modal-embed-container');
    
    if (container) {
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            const urlAbsoluta = window.location.origin + window.location.pathname.replace('index.html', '') + urlArchivoPdf;
            container.innerHTML = `<iframe src="https://docs.google.com/gview?url=${encodeURIComponent(urlAbsoluta)}&embedded=true" style="width:100%; height:100%; border:none;"></iframe>`;
        } else {
            container.innerHTML = `<embed src="${urlArchivoPdf}" type="application/pdf" class="pdf-embedded-render">`;
        }
    }
    document.getElementById('modal-pdf-viewer').classList.remove('hidden');
}

function cerrarVisorPDF() {
    document.getElementById('modal-pdf-viewer').classList.add('hidden');
    document.getElementById('modal-embed-container').innerHTML = '';
}

// ==========================================
// PIPELINE DE INTELIGENCIA JURÍDICA COMPLETA
// ==========================================
let datosCargadosCorrectamente = false;

function analizarTodoConIA() {
    datosCargadosCorrectamente = true;
    const resultsPanel = document.getElementById('ai-results');
    resultsPanel.classList.remove('hidden');
    
    document.getElementById('content-predict-box').innerHTML = "<p class='loading-text'>Parseando base de datos probabilística...</p>";
    document.getElementById('content-status-box').innerHTML = "<p class='loading-text'>Estructurando línea de tiempo secuencial...</p>";
    
    setTimeout(() => {
        // A. Carga Predictiva
        document.getElementById('content-predict-box').innerHTML = `
            <div class="metrics-premium-display">
                <div class="metric-giant-wrapper">
                    <span class="metric-number-giant">100%</span>
                    <span class="metric-label-giant">ÍNDICE DE VIABILIDAD FAVORABLE AL ACUSADO</span>
                </div>
                <div class="metric-text-details">
                    <p><strong>Criterio Jurisprudencial:</strong> El caso concluyó en estricta observancia del principio de presunción de inocencia y el estándar de suficiencia probatoria, en línea con la doctrina jurisprudencial vinculante aplicable a los delitos de agresiones contra el grupo familiar (Artículo 122-B del Código Penal).</p>
                    <p style="margin-top:10px;"><strong>Análisis Estratégico:</strong> Caso cerrado con archivo definitivo. Se determinó la inviabilidad de impugnación (apelación) debido a la inconcurrencia de la parte agraviada al juicio oral y la consecuente debilidad del acervo probatorio de cargo, lo que condujo a que la sentencia absolutoria quedara firmemente consentida mediante Resolución Nº 12-2024.</p>
                </div>
            </div>
        `;

        // B. Carga Línea de Tiempo Plazos Avanzada
        document.getElementById('content-status-box').innerHTML = `
            <div class="timeline-step passed">
                <div class="step-marker">✓</div>
                <div class="step-card-premium">
                    <div class="step-time-header">
                        <span class="date-tag">09 de Marzo, 2020</span>
                        <span class="status-badge-step done">Concluido</span>
                    </div>
                    <h4>1. Registro de Denuncia Verbal Inicial</h4>
                    <p>Fase inicial del proceso correspondiente al registro formal de la denuncia verbal.</p>
                    <button class="btn-inline-view" onclick="abrirVisorPDF('Registro de Denuncia Verbal Inicial', 'archivos/acta1.pdf')">📂 Abrir Documento</button>
                </div>
            </div>

            <div class="timeline-step passed">
                <div class="step-marker">✓</div>
                <div class="step-card-premium">
                    <div class="step-time-header">
                        <span class="date-tag">12 de Octubre, 2020</span>
                        <span class="status-badge-step done">Concluido</span>
                    </div>
                    <h4>2. Disposición de Apertura de Investigación Preliminar</h4>
                    <p>Inicio de las diligencias preliminares para la búsqueda de elementos de convicción.</p>
                    <button class="btn-inline-view" onclick="abrirVisorPDF('Disposición de Apertura de Investigación Preliminar', 'archivos/apertura2.pdf')">📂 Abrir Documento</button>
                </div>
            </div>

            <div class="timeline-step passed">
                <div class="step-marker">✓</div>
                <div class="step-card-premium">
                    <div class="step-time-header">
                        <span class="date-tag">15 de Julio, 2021</span>
                        <span class="status-badge-step done">Concluido</span>
                    </div>
                    <h4>3. Disposición de Formalización de la Investigación Preparatoria</h4>
                    <p>Comunicación formal al juez de la continuación de las investigaciones en etapa preparatoria.</p>
                    <button class="btn-inline-view" onclick="abrirVisorPDF('Disposición de Formalización de la Investigación Preparatoria', 'archivos/formalización3.pdf')">📂 Abrir Documento</button>
                </div>
            </div>

            <div class="timeline-step passed">
                <div class="step-marker">✓</div>
                <div class="step-card-premium">
                    <div class="step-time-header">
                        <span class="date-tag">15 de Febrero, 2022</span>
                        <span class="status-badge-step done">Concluido</span>
                    </div>
                    <h4>4. Requerimiento Fiscal de Acusación Directa</h4>
                    <p>Formulación de cargos directos por parte del Ministerio Público ante el órgano jurisdiccional.</p>
                    <button class="btn-inline-view" onclick="abrirVisorPDF('Requerimiento Fiscal de Acusación Directa', 'archivos/acusación4.pdf')">📂 Abrir Documento</button>
                </div>
            </div>

            <div class="timeline-step passed">
                <div class="step-marker">✓</div>
                <div class="step-card-premium">
                    <div class="step-time-header">
                        <span class="date-tag">01 de Diciembre, 2022</span>
                        <span class="status-badge-step done">Concluido</span>
                    </div>
                    <h4>5. Notificación Electrónica SINOE de la Sentencia a las Defensas Técnicas</h4>
                    <p>Remisión oficial del fallo definitivo a las casillas electrónicas de los abogados defensores.</p>
                    <button class="btn-inline-view" onclick="abrirVisorPDF('Notificación Electrónica SINOE', 'archivos/sentencia5.pdf')">📂 Abrir Documento</button>
                </div>
            </div>

            <div class="timeline-step passed">
                <div class="step-marker">✓</div>
                <div class="step-card-premium">
                    <div class="step-time-header">
                        <span class="date-tag">05 de Diciembre, 2022</span>
                        <span class="status-badge-step done">Concluido</span>
                    </div>
                    <h4>6. Lectura Pública de Sentencia Absolutoria</h4>
                    <p>Audiencia pública y formal de lectura de la resolución que declara la absolución.</p>
                    <button class="btn-inline-view" onclick="abrirVisorPDF('Lectura Pública de Sentencia Absolutoria', 'archivos/sentencia5.pdf')">📂 Abrir Documento</button>
                </div>
            </div>

            <div class="timeline-step passed">
                <div class="step-marker">✓</div>
                <div class="step-card-premium">
                    <div class="step-time-header">
                        <span class="date-tag">09 de Mayo, 2023</span>
                        <span class="status-badge-step done">Concluido</span>
                    </div>
                    <h4>7. Notificación Física por Cédula a la Agraviada en su Domicilio Real</h4>
                    <p>Diligencia de entrega material del documento de notificación en la dirección domiciliaria de la parte afectada.</p>
                    <button class="btn-inline-view" onclick="abrirVisorPDF('Notificación Física por Cédula', 'archivos/auto6.pdf')">📂 Abrir Documento</button>
                </div>
            </div>

            <div class="timeline-step passed">
                <div class="step-marker">✓</div>
                <div class="step-card-premium">
                    <div class="step-time-header">
                        <span class="date-tag">03 de Julio, 2024</span>
                        <span class="status-badge-step done">Concluido</span>
                    </div>
                    <h4>8. Auto Judicial que declara Consentida la Sentencia Absolutoria</h4>
                    <p>Resolución que adquiere firmeza al no haber sido impugnada dentro del plazo de ley correspondiente.</p>
                    <button class="btn-inline-view" onclick="abrirVisorPDF('Auto Judicial Consentido', 'archivos/auto6.pdf')">📂 Abrir Documento</button>
                </div>
            </div>

            <div class="timeline-step passed">
                <div class="step-marker">✓</div>
                <div class="step-card-premium">
                    <div class="step-time-header">
                        <span class="date-tag">04 de Julio, 2024</span>
                        <span class="status-badge-step done">Concluido</span>
                    </div>
                    <h4>9. Firma Digital, Descargo y Archivo Definitivo del Expediente Judicial</h4>
                    <p>Cierre formal del caso, registro en el sistema informático y traslado al archivo central de la Corte.</p>
                    <button class="btn-inline-view" onclick="abrirVisorPDF('Firma Digital y Archivo', 'archivos/auto6.pdf')">📂 Abrir Documento</button>
                </div>
            </div>
        `;

        // C. Carga de Partes
        document.getElementById('table-partes-body').innerHTML = `
            <tr>
                <td><strong>DEMANDANTE</strong></td>
                <td>Juana Mamani Ayma</td>
                <td>Abog. Tito Nieto Portocarrero (Reg. ICAP 4021)</td>
                <td><button class="btn-table-action" onclick="abrirVisorPDF('Poder Consorcial y Constitución', 'archivos/acta1.pdf')">👁 VER PDF REAL</button></td>
            </tr>
            <tr>
                <td><strong>DEMANDADO</strong></td>
                <td>Gilber condore Chayña</td>
                <td>Defensa Pública de San Román</td>
                <td><button class="btn-table-action" onclick="abrirVisorPDF('Contestación Municipal de Demanda', 'archivos/contestacion.pdf')">👁 VER PDF REAL</button></td>
            </tr>
        `;

        // Inicializador automático para cargar el primer sub-tab sin romper flujos
        const primerSubTabCard = document.querySelector('.sub-tab-card');
        if (primerSubTabCard) {
            cambiarSubTab(primerSubTabCard, 'archivos/acta1.pdf', 'Documento 1: Acta de Denuncia');
        }

        // Activamos y movemos de forma inmediata el enfoque al análisis probabilístico
        mostrarModuloEspecifico('predict');
    }, 1200);
}

// ==========================================
// FUNCIÓN DE EXCLUSIÓN Y FILTRADO MODULAR
// ==========================================
function mostrarModuloEspecifico(moduloId) {
    if (!datosCargadosCorrectamente) {
        analizarTodoConIA();
        return;
    }
    
    document.querySelectorAll('.sub-block').forEach(bloque => bloque.classList.add('hidden'));
    document.querySelectorAll('.ai-card').forEach(card => card.classList.remove('selected-card'));
    
    const bloqueObjetivo = document.getElementById('block-' + moduloId);
    if (bloqueObjetivo) {
        bloqueObjetivo.classList.remove('hidden');
        setTimeout(() => {
            bloqueObjetivo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
    }
    
    const tarjetaPulsada = document.getElementById('card-' + moduloId);
    if (tarjetaPulsada) tarjetaPulsada.classList.add('selected-card');
}

// CONTROLLER DE ARRASTRE DE ARCHIVOS
const dropZone = document.getElementById('drop-zone');
if (dropZone) {
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.style.borderColor = "#00f2fe"; });
    dropZone.addEventListener('dragleave', () => { dropZone.style.borderColor = "var(--accent)"; });
    dropZone.addEventListener('drop', (e) => { e.preventDefault(); dropZone.style.borderColor = "var(--accent)"; analizarTodoConIA(); });
}

// ==========================================================================
// CONTROLADOR DE SUB-PESTAÑAS INTERNAS PARA SEGUIMIENTO DETALLADO (BLINDADO)
// ==========================================================================
function cambiarSubTab(botonElemento, urlPdf, titulo) {
    // 1. Apagamos la luz de selección a todos los sub-botones de la grilla
    document.querySelectorAll('.sub-tab-card').forEach(btn => btn.classList.remove('active'));
    
    // 2. Encendemos la luz active directamente en el botón presionado (parámetro seguro)
    if (botonElemento) {
        botonElemento.classList.add('active');
    }

    // 3. Modificamos el título del visualizador
    document.getElementById('sub-viewer-title').innerText = titulo;
    const frameContainer = document.getElementById('sub-pdf-frame');
    
    // 4. Cargamos de forma aislada el visor sin tocar listeners globales
    if (frameContainer) {
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            const urlAbsoluta = window.location.origin + window.location.pathname.replace('index.html', '') + urlPdf;
            frameContainer.innerHTML = `<iframe src="https://docs.google.com/gview?url=${encodeURIComponent(urlAbsoluta)}&embedded=true" style="width:100%; height:100%; border:none;"></iframe>`;
        } else {
            frameContainer.innerHTML = `<embed src="${urlPdf}" type="application/pdf" style="width:100%; height:100%; border:none;">`;
        }
    }
}