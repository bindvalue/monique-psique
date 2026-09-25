export const SITE = {
  nome: "Monique Gonçalves",
  titulo: "Psicóloga Clínica",
  crp: "04/84383",

  // 📱 WhatsApp — formato internacional SEM espaços, SEM símbolos
  // Brasil = 55 + DDD + número (ex.: 5531999998888)
  whatsapp:
    "https://wa.me/5531997008987?text=Ol%C3%A1%2C%20Monique!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o.",

  // 📧 E-mail profissional
  email: "psimonique.bh@gmail.com",

  // 📷 Instagram — apenas o @ sem o "https://"
  instagram: "@moniqueepsi",

  // 📍 Cidade/região do consultório (usado no mapa e rodapé)
  cidade: "Belo Horizonte",
  estado: "MG",
  regiao: "Região Central",
} as const;

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#atendimentos", label: "Atendimentos" },
  { href: "#areas", label: "Áreas" },
  { href: "#investimento", label: "Localização" },
  { href: "#faq", label: "FAQ" },
] as const;