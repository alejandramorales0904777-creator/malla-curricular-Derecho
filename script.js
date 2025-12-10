// Definición de la data de la carrera (ID únicos y dependencias)
const curriculumData = [
    // --- NIVEL 1 ---
    { id: 'n1_intro', name: 'INTRODUCCION AL ANALISIS DEL DERECHO', level: 1, prereqs: [] },
    { id: 'n1_pol1', name: 'DERECHO POLITICO. TEORIA DEL ESTADO Y LA CONSTITUCION', level: 1, prereqs: [] },
    { id: 'n1_lit', name: 'DERECHO Y LITERATURA', level: 1, prereqs: [] },
    { id: 'n1_hist', name: 'HISTORIA DEL DERECHO', level: 1, prereqs: [] },
    { id: 'n1_pra', name: 'INTRODUC. PRACTICA A LAS FUNCIONES DEL ABOGADO', level: 1, prereqs: [] },
    { id: 'n1_com1', name: 'COMUNICACION ORAL Y ESCRITA I', level: 1, prereqs: [] },

    // --- NIVEL 2 ---
    { id: 'n2_pol2', name: 'DERECHO POLITICO. EL FENOMENO POLITICO Y LOS TIPOS DE GOBIERNO', level: 2, prereqs: [] },
    { id: 'n2_eco', name: 'FUNDAMENTOS DE TEORIA ECONOMICA', level: 2, prereqs: [] },
    { id: 'n2_hchile', name: 'HISTORIA POLITICA Y CONSTITUCIONAL DE CHILE', level: 2, prereqs: [] },
    { id: 'n2_estado', name: 'DERECHO DEL ESTADO Y JURISDICCION CONSTITUCIONAL', level: 2, prereqs: ['n1_pol1'] },
    { id: 'n2_arg', name: 'ARGUMENTACION JURIDICA', level: 2, prereqs: [] },
    { id: 'n2_com2', name: 'COMUNICACION ORAL Y ESCRITA II', level: 2, prereqs: ['n1_com1'] },

    // --- NIVEL 3 ---
    { id: 'n3_ddff', name: 'DERECHO DE LOS DERECHOS FUNDAMENTALES Y SUS GARANTIAS', level: 3, prereqs: ['n2_estado'] },
    { id: 'n3_soc', name: 'DERECHO Y SOCIEDAD', level: 3, prereqs: [] },
    { id: 'n3_dereco', name: 'DERECHO Y ECONOMIA', level: 3, prereqs: ['n2_eco'] },
    { id: 'n3_civil1', name: 'DERECHO CIVIL. PARTE GENERAL Y PERSONAS', level: 3, prereqs: ['n1_intro'] },
    { id: 'n3_proc1', name: 'DERECHO PROCESAL ORGANICO', level: 3, prereqs: ['n2_estado'] },
    { id: 'n3_met', name: 'METODOLOGIA JURIDICA', level: 3, prereqs: ['n2_arg', 'n1_intro'] },
    { id: 'n3_auto', name: 'AUTOGESTION DEL APRENDIZAJE', level: 3, prereqs: [] },

    // --- NIVEL 4 ---
    { id: 'n4_intpub', name: 'DERECHO INTERNACIONAL PUBLICO', level: 4, prereqs: ['n1_pol1'] },
    { id: 'n4_neg', name: 'TEORIA DEL NEGOCIO JURIDICO', level: 4, prereqs: ['n3_civil1'] },
    { id: 'n4_proc2', name: 'DERECHO PROCESAL CIVIL. DISPOSICIONES COMUNES Y JUICIO ORDINARIO', level: 4, prereqs: ['n3_proc1'] },
    { id: 'n4_sol', name: 'SOLUCION ALTERNATIVA DE CONTROVERSIAS', level: 4, prereqs: ['n1_intro'] },
    { id: 'n4_equipo', name: 'TRABAJO EN EQUIPO Y DESARROLLO DE HABILIDADES SOCIALES', level: 4, prereqs: ['n3_auto'] },
    { id: 'n4_mi1', name: 'MODULO DE INTEGRACION I', level: 4, prereqs: ['n4_neg', 'n3_met', 'n3_ddff', 'n1_pra', 'n1_intro'] },

    // --- NIVEL 5 ---
    { id: 'n5_penal1', name: 'DERECHO PENAL. PARTE GENERAL', level: 5, prereqs: ['n3_ddff', 'n1_intro'] },
    { id: 'n5_trab', name: 'DERECHO DEL TRABAJO', level: 5, prereqs: ['n4_neg', 'n3_ddff'] },
    { id: 'n5_admin', name: 'DERECHO ADMINISTRATIVO', level: 5, prereqs: ['n3_ddff'] },
    { id: 'n5_oblig', name: 'DERECHO DE LAS OBLIGACIONES', level: 5, prereqs: ['n4_neg'] },
    { id: 'n5_proc3', name: 'DERECHO PROCESAL CIVIL. RECURSOS', level: 5, prereqs: ['n4_proc2'] },
    { id: 'n5_context', name: 'COMPRENSION DE CONTEXTOS SOCIALES', level: 5, prereqs: ['n2_com2'] },

    // --- NIVEL 6 ---
    { id: 'n6_reales', name: 'DERECHOS REALES', level: 6, prereqs: ['n5_oblig'] },
    { id: 'n6_proc4', name: 'DERECHO PROCESAL CIVIL. EJECUCION Y PROCEDIMIENTOS ESPECIALES', level: 6, prereqs: ['n4_proc2'] },
    { id: 'n6_cult', name: 'COMPRENSION DE CONTEXTOS CULTURALES', level: 6, prereqs: ['n5_context'] },
    { id: 'n6_mi2', name: 'MODULO DE INTEGRACION II', level: 6, prereqs: ['n6_proc4', 'n6_reales'] },

    // --- NIVEL 7 ---
    { id: 'n7_penal2', name: 'DERECHO PENAL. PARTE ESPECIAL', level: 7, prereqs: ['n5_penal1'] },
    { id: 'n7_seg', name: 'DERECHO DE LA SEGURIDAD SOCIAL', level: 7, prereqs: ['n5_trab'] },
    { id: 'n7_com', name: 'DERECHO DEL COMERCIANTE Y TITULOS VALORES', level: 7, prereqs: ['n6_reales'] },
    { id: 'n7_con_civ', name: 'CONTRATACION CIVIL', level: 7, prereqs: ['n6_reales'] },
    { id: 'n7_proc_pen', name: 'DERECHO PROCESAL PENAL', level: 7, prereqs: ['n5_proc3', 'n5_penal1'] },
    { id: 'n7_lit1', name: 'TALLER DE LITIGACION I', level: 7, prereqs: ['n6_proc4', 'n5_trab'] },
    { id: 'n7_etica', name: 'ETICA Y RESPONSABILIDAD SOCIAL', level: 7, prereqs: ['n6_cult', 'n4_equipo'] },

    // --- NIVEL 8 ---
    { id: 'n8_dep1', name: 'DEPORTE I', level: 8, prereqs: [] },
    { id: 'n8_con_mer', name: 'CONTRATACION MERCANTIL', level: 8, prereqs: ['n7_con_civ', 'n7_com'] },
    { id: 'n8_fam', name: 'DERECHO DE FAMILIA', level: 8, prereqs: ['n7_con_civ'] },
    { id: 'n8_elec1', name: 'ELECTIVO I', level: 8, prereqs: ['n6_reales', 'n5_proc3', 'n5_admin', 'n5_trab'] },
    { id: 'n8_lit2', name: 'TALLER DE LITIGACION II', level: 8, prereqs: ['n7_lit1', 'n7_proc_pen'] },
    { id: 'n8_resp', name: 'RESPONSABILIDAD SOCIAL', level: 8, prereqs: ['n7_etica'] },
    { id: 'n8_mi3', name: 'MODULO DE INTEGRACION III', level: 8, prereqs: ['n8_con_mer', 'n7_penal2', 'n5_trab'] },

    // --- NIVEL 9 ---
    { id: 'n9_clin', name: 'CLINICA JURIDICA FORMATIVA', level: 9, prereqs: ['n8_lit2', 'n8_fam', 'n6_proc4'] },
    { id: 'n9_socie', name: 'DERECHO DE SOCIEDADES', level: 9, prereqs: ['n8_con_mer'] },
    { id: 'n9_filo', name: 'FILOSOFIA DEL DERECHO', level: 9, prereqs: ['n5_penal1', 'n4_proc2', 'n4_neg'] },
    { id: 'n9_suc', name: 'DERECHO SUCESORIO', level: 9, prereqs: ['n8_fam'] },
    { id: 'n9_trib1', name: 'DERECHO TRIBUTARIO. PARTE GENERAL', level: 9, prereqs: ['n5_oblig', 'n5_admin'] },

    // --- NIVEL 10 ---
    { id: 'n10_dep2', name: 'DEPORTE II', level: 10, prereqs: ['n8_dep1'] },
    { id: 'n10_elec2', name: 'ELECTIVO II', level: 10, prereqs: ['n6_reales', 'n5_proc3', 'n5_admin', 'n5_trab'] },
    { id: 'n10_concur', name: 'DERECHO CONCURSAL', level: 10, prereqs: ['n9_socie'] },
    { id: 'n10_intpriv', name: 'DERECHO INTERNACIONAL PRIVADO', level: 10, prereqs: ['n8_con_mer', 'n4_intpub'] },
    { id: 'n10_danos', name: 'DERECHO DE DAÑOS', level: 10, prereqs: ['n7_con_civ'] },
    { id: 'n10_trib2', name: 'DERECHO TRIBUTARIO. PARTE ESPECIAL', level: 10, prereqs: ['n9_trib1'] },

    // --- EXAMEN ---
    { id: 'n11_examen', name: 'EXAMEN DE LICENCIATURA', level: 11, prereqs: [] } 
];

// Estado de ramos aprobados
let approvedSubjects = new Set();

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    renderGrid();
    updateUI();
});

// Función para renderizar la malla
function renderGrid() {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    // Agrupar por niveles
    const levels = {};
    curriculumData.forEach(subject => {
        if (!levels[subject.level]) levels[subject.level] = [];
        levels[subject.level].push(subject);
    });

    // Crear columnas
    Object.keys(levels).forEach(level => {
        const col = document.createElement('div');
        col.className = 'semester-column';
        
        const title = document.createElement('div');
        title.className = 'semester-title';
        title.innerText = level == 11 ? 'Egreso' : `Semestre ${level}`;
        col.appendChild(title);

        levels[level].forEach(subject => {
            const card = document.createElement('div');
            card.className = 'subject-card';
            card.id = subject.id;
            card.onclick = () => toggleSubject(subject.id);

            card.innerHTML = `
                <div class="subject-name">${subject.name}</div>
                <div class="subject-info">
                   </div>
            `;
            col.appendChild(card);
        });

        container.appendChild(col);
    });
}

// Función principal de interacción
function toggleSubject(id) {
    const subject = curriculumData.find(s => s.id === id);

    if (approvedSubjects.has(id)) {
        // Desaprobar
        approvedSubjects.delete(id);
    } else {
        // Intentar aprobar
        const missing = getMissingPrereqs(subject);
        if (missing.length > 0) {
            showToast(`Bloqueado. Faltan: ${missing.join(', ')}`);
            return; // Detener ejecución
        }
        approvedSubjects.add(id);
    }

    saveProgress();
    updateUI();
}

// Verificar prerrequisitos
function getMissingPrereqs(subject) {
    const missingNames = [];
    subject.prereqs.forEach(reqId => {
        if (!approvedSubjects.has(reqId)) {
            const reqSubject = curriculumData.find(s => s.id === reqId);
            // Acortamos el nombre para que el mensaje no sea gigante
            let shortName = reqSubject.name.length > 30 ? reqSubject.name.substring(0, 27) + '...' : reqSubject.name;
            missingNames.push(shortName);
        }
    });
    return missingNames;
}

// Actualizar colores y estados visuales
function updateUI() {
    curriculumData.forEach(subject => {
        const card = document.getElementById(subject.id);
        
        // 1. Resetear clases
        card.classList.remove('approved', 'locked');

        // 2. Estado Aprobado
        if (approvedSubjects.has(subject.id)) {
            card.classList.add('approved');
        } 
        // 3. Estado Bloqueado (Si no está aprobado y faltan requisitos)
        else {
            const missing = getMissingPrereqs(subject);
            if (missing.length > 0) {
                card.classList.add('locked');
            }
        }
    });

    updateProgressBar();
}

// Barra de progreso
function updateProgressBar() {
    const total = curriculumData.length;
    const approved = approvedSubjects.size;
    const percentage = Math.round((approved / total) * 100);
    
    const bar = document.getElementById('progress-bar');
    bar.style.width = `${percentage}%`;
    bar.innerText = `${percentage}% Completado`;
}

// Sistema de Alertas (Toast)
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    
    container.appendChild(toast);

    // Eliminar después de 3 segundos
    setTimeout(() => {
        toast.remove();
    }, 4000);
}

// LocalStorage
function saveProgress() {
    const array = Array.from(approvedSubjects);
    localStorage.setItem('mallaDerechoProgress', JSON.stringify(array));
}

function loadProgress() {
    const saved = localStorage.getItem('mallaDerechoProgress');
    if (saved) {
        approvedSubjects = new Set(JSON.parse(saved));
    }
}

function resetProgress() {
    if(confirm("¿Estás seguro de reiniciar tu progreso?")) {
        approvedSubjects.clear();
        saveProgress();
        updateUI();
    }
}
