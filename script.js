const modal = document.getElementById("infoModal");
const title = document.getElementById("modalTitle");
const text = document.getElementById("modalText");

const content = {
  "Quiénes Somos": "Conectamos industrias e impulsamos el país mediante un ecosistema empresarial enfocado en las personas, la innovación y el desarrollo sostenible.",
  "Unidades de Negocio": "Nuestro ecosistema integra Retail, Servicios Financieros y Logística para generar valor de manera transversal.",
  "Sostenibilidad": "Trabajamos para construir un futuro responsable y sostenible, integrando criterios ambientales, sociales y de gobierno corporativo.",
  "Innovación": "Impulsamos soluciones que mejoran la vida de nuestros clientes y fortalecen nuestros negocios.",
  "Inversionistas": "Información corporativa, resultados, indicadores y principales cifras del Grupo Empresarial La Cordillera.",
  "Talento": "Creemos en el talento y en el desarrollo de nuestra gente como motor de crecimiento.",
  "Contáctanos": "Estamos listos para conversar. Para una versión productiva puedes conectar este botón con un formulario, correo corporativo o sistema de atención.",
  "Retail": "Soluciones y experiencias que simplifican la vida de millones de personas.",
  "Servicios Financieros": "Impulsamos el progreso financiero con innovación, confianza y solidez.",
  "Logística": "Conectamos regiones y negocios con una operación logística eficiente y sostenible.",
  "Bogotá": "Sede principal y corporativa.",
  "Medellín": "Centro de innovación y servicios compartidos.",
  "Cali": "Centro de operaciones del suroccidente.",
  "Barranquilla": "Hub logístico del Caribe.",
  "Ciudades intermedias": "Presencia y operación en todo el territorio."
};

function openModal(section) {
  title.textContent = section;
  text.textContent = content[section] || "Información de la sección.";
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-section]").forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.section));
});

document.querySelectorAll("[data-close]").forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});
