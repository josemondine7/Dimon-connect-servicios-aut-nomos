
// 14 idiomas — cubren el 90% de la población mundial
const idiomas = {
  es: { nombre: "Español", bandera: "🇪🇸" },
  en: { nombre: "English", bandera: "🇺🇸" },
  pt: { nombre: "Português", bandera: "🇧🇷" },
  fr: { nombre: "Français", bandera: "🇫🇷" },
  de: { nombre: "Deutsch", bandera: "🇩🇪" },
  it: { nombre: "Italiano", bandera: "🇮🇹" },
  ru: { nombre: "Русский", bandera: "🇷🇺" },
  zh: { nombre: "中文", bandera: "🇨🇳" },
  ja: { nombre: "日本語", bandera: "🇯🇵" },
  ko: { nombre: "한국어", bandera: "🇰🇷" },
  ar: { nombre: "العربية", bandera: "🇸🇦" },
  nl: { nombre: "Nederlands", bandera: "🇳🇱" },
  pl: { nombre: "Polski", bandera: "🇵🇱" },
  tr: { nombre: "Türkçe", bandera: "🇹🇷" }
};

const traducciones = {
  es: {
    volver: "Volver",
    inicio: "Inicio",
    buscarPlaceholder: "Buscar servicios...",
    ofertaDemanda: "Servicios que se ofrecen",
    brindarServicio: "Ofrecer mi Servicio",
    solicitarServicio: "Servicios que se solicitan",
    queEsDimon: "¿Qué es Dimon Connect?",
    normasSeguridad: "Normas y Seguridad",
    terminosCondiciones: "Términos y Condiciones",
    informacionLegal: "Información Legal",
    elegirIdioma: "Elegir idioma"
  },
  en: {
    volver: "Back",
    inicio: "Home",
    buscarPlaceholder: "Search services...",
    ofertaDemanda: "Available Services",
    brindarServicio: "Offer My Service",
    solicitarServicio: "Request Services",
    queEsDimon: "What is Dimon Connect?",
    normasSeguridad: "Rules and Security",
    terminosCondiciones: "Terms and Conditions",
    informacionLegal: "Legal Information",
    elegirIdioma: "Choose language"
  },
  pt: {
    volver: "Voltar",
    inicio: "Início",
    buscarPlaceholder: "Buscar serviços...",
    ofertaDemanda: "Serviços oferecidos",
    brindarServicio: "Oferecer meu Serviço",
    solicitarServicio: "Solicitar Serviços",
    queEsDimon: "O que é Dimon Connect?",
    normasSeguridad: "Regras e Segurança",
    terminosCondiciones: "Termos e Condições",
    informacionLegal: "Informação Legal",
    elegirIdioma: "Escolher idioma"
  },
  fr: {
    volver: "Retour",
    inicio: "Accueil",
    buscarPlaceholder: "Rechercher des services...",
    ofertaDemanda: "Services proposés",
    brindarServicio: "Proposer mon service",
    solicitarServicio: "Demander des services",
    queEsDimon: "Qu'est-ce que Dimon Connect?",
    normasSeguridad: "Règles et Sécurité",
    terminosCondiciones: "Conditions générales",
    informacionLegal: "Informations juridiques",
    elegirIdioma: "Choisir la langue"
  },
  de: {
    volver: "Zurück",
    inicio: "Startseite",
    buscarPlaceholder: "Dienste suchen...",
    ofertaDemanda: "Angebotene Dienste",
    brindarServicio: "Dienst anbieten",
    solicitarServicio: "Dienste anfragen",
    queEsDimon: "Was ist Dimon Connect?",
    normasSeguridad: "Regeln und Sicherheit",
    terminosCondiciones: "Nutzungsbedingungen",
    informacionLegal: "Rechtliche Informationen",
    elegirIdioma: "Sprache wählen"
  },
  it: {
    volver: "Indietro",
    inicio: "Home",
    buscarPlaceholder: "Cerca servizi...",
    ofertaDemanda: "Servizi offerti",
    brindarServicio: "Offro il mio servizio",
    solicitarServicio: "Richiedi servizi",
    queEsDimon: "Cos'è Dimon Connect?",
    normasSeguridad: "Regole e Sicurezza",
    terminosCondiciones: "Termini e condizioni",
    informacionLegal: "Informazioni legali",
    elegirIdioma: "Scegli lingua"
  },
  ru: {
    volver: "Назад",
    inicio: "Главная",
    buscarPlaceholder: "Поиск услуг...",
    ofertaDemanda: "Предлагаемые услуги",
    brindarServicio: "Предложить услугу",
    solicitarServicio: "Запросить услуги",
    queEsDimon: "Что такое Dimon Connect?",
    normasSeguridad: "Правила и безопасность",
    terminosCondiciones: "Условия использования",
    informacionLegal: "Юридическая информация",
    elegirIdioma: "Выбрать язык"
  },
  zh: {
    volver: "返回",
    inicio: "首页",
    buscarPlaceholder: "搜索服务...",
    ofertaDemanda: "服务项目",
    brindarServicio: "提供我的服务",
    solicitarServicio: "寻求服务",
    queEsDimon: "什么是Dimon Connect?",
    normasSeguridad: "安全规则",
    terminosCondiciones: "使用条款",
    informacionLegal: "法律信息",
    elegirIdioma: "选择语言"
  },
  ja: {
    volver: "戻る",
    inicio: "ホーム",
    buscarPlaceholder: "サービスを検索...",
    ofertaDemanda: "提供中のサービス",
    brindarServicio: "サービスを提供",
    solicitarServicio: "サービスを依頼",
    queEsDimon: "Dimon Connectとは?",
    normasSeguridad: "規則と安全",
    terminosCondiciones: "利用規約",
    informacionLegal: "法的情報",
    elegirIdioma: "言語を選ぶ"
  },
  ko: {
    volver: "뒤로",
    inicio: "홈",
    buscarPlaceholder: "서비스 검색...",
    ofertaDemanda: "제공되는 서비스",
    brindarServicio: "서비스 제공하기",
    solicitarServicio: "서비스 요청하기",
    queEsDimon: "Dimon Connect란?",
    normasSeguridad: "규칙 및 보안",
    terminosCondiciones: "이용약관",
    informacionLegal: "법적 정보",
    elegirIdioma: "언어 선택"
  },
  ar: {
    volver: "رجوع",
    inicio: "الرئيسية",
    buscarPlaceholder: "البحث عن خدمات...",
    ofertaDemanda: "الخدمات المتاحة",
    brindarServicio: "تقديم خدمتي",
    solicitarServicio: "طلب خدمات",
    queEsDimon: "ما هو Dimon Connect؟",
    normasSeguridad: "القواعد والأمان",
    terminosCondiciones: "الشروط والأحكام",
    informacionLegal: "المعلومات القانونية",
    elegirIdioma: "اختر اللغة"
  },
  nl: {
    volver: "Terug",
    inicio: "Home",
    buscarPlaceholder: "Diensten zoeken...",
    ofertaDemanda: "Aangeboden diensten",
    brindarServicio: "Mijn dienst aanbieden",
    solicitarServicio: "Diensten aanvragen",
    queEsDimon: "Wat is Dimon Connect?",
    normasSeguridad: "Regels en Veiligheid",
    terminosCondiciones: "Algemene voorwaarden",
    informacionLegal: "Juridische informatie",
    elegirIdioma: "Kies taal"
  },
  pl: {
    volver: "Wstecz",
    inicio: "Strona główna",
    buscarPlaceholder: "Wyszukaj usługi...",
    ofertaDemanda: "Oferowane usługi",
    brindarServicio: "Oferuj moją usługę",
    solicitarServicio: "Zamów usługi",
    queEsDimon: "Czym jest Dimon Connect?",
    normasSeguridad: "Zasady i bezpieczeństwo",
    terminosCondiciones: "Regulamin",
    informacionLegal: "Informacje prawne",
    elegirIdioma: "Wybierz język"
  },
  tr: {
    volver: "Geri",
    inicio: "Ana Sayfa",
    buscarPlaceholder: "Hizmet ara...",
    ofertaDemanda: "Sunulan Hizmetler",
    brindarServicio: "Hizmetimi Sun",
    solicitarServicio: "Hizmet İste",
    queEsDimon: "Dimon Connect Nedir?",
    normasSeguridad: "Kurallar ve Güvenlik",
    terminosCondiciones: "Kullanım Şartları",
    informacionLegal: "Yasal Bilgiler",
    elegirIdioma: "Dil seçin"
  }
};

// Idioma actual
let idiomaActual = localStorage.getItem('dimonIdioma') || 'es';

// Cambiar idioma
function cambiarIdioma(codigo) {
  idiomaActual = codigo;
  localStorage.setItem('dimonIdioma', codigo);
  aplicarTraducciones();
  cerrarSelectorIdioma();
  actualizarBotonIdioma();
}

// Aplicar traducciones a todos los elementos
function aplicarTraducciones() {
  const textos = traducciones[idiomaActual];
  document.querySelectorAll('[data-traducir]').forEach(el => {
    const clave = el.getAttribute('data-traducir');
    if (textos[clave]) el.textContent = textos[clave];
  });
  const buscador = document.getElementById('buscador');
  if (buscador && textos.buscarPlaceholder) {
    buscador.placeholder = textos.buscarPlaceholder;
  }
}

// Actualizar botón de idioma
function actualizarBotonIdioma() {
  const btn = document.getElementById('btnAbrirIdioma');
  if (btn) btn.textContent = idiomas[idiomaActual].nombre;
}

// Abrir/cerrar selector
function abrirSelectorIdioma() {
  const selector = document.getElementById('selectorIdioma');
  const lista = document.getElementById('listaIdiomas');
  lista.innerHTML = '';
  
  Object.entries(idiomas).forEach(([cod, datos]) => {
    const div = document.createElement('div');
    div.className = `opcion-idioma ${cod === idiomaActual ? 'activo' : ''}`;
    div.innerHTML = `${datos.bandera} ${datos.nombre}`;
    div.onclick = () => cambiarIdioma(cod);
    lista.appendChild(div);
  });
  
  selector.classList.remove('oculto');
}

function cerrarSelectorIdioma() {
  document.getElementById('selectorIdioma').classList.add('oculto');
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  aplicarTraducciones();
  actualizarBotonIdioma();
  
  const btn = document.getElementById('btnAbrirIdioma');
  if (btn) btn.addEventListener('click', abrirSelectorIdioma);
});

window.cerrarSelectorIdioma = cerrarSelectorIdioma;
