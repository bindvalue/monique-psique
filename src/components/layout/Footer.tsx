import { Phone, Mail, ExternalLink } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import InstagramIcon from "@/components/ui/InstagramIcon";
import Link from "next/link";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-cacau text-creme">
      {/* Linha sutil no topo do rodapé */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bege/40 to-transparent"
      />

      <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20 lg:py-24">
        {/* ============================================
            Grid principal — 4 colunas
            ============================================ */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* ---------- Coluna 1 — Identidade ---------- */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <div className="mb-6 flex items-center gap-3">
              <span
                className="font-serif text-4xl leading-none text-bege md:text-5xl"
                aria-hidden="true"
              >
                Ψ
              </span>
              <div>
                <p className="font-serif text-2xl leading-tight text-creme md:text-[1.75rem]">
                  {SITE.nome}
                </p>
                <p className="text-[11px] uppercase tracking-[1.5px] text-bege/70">
                  {SITE.titulo}
                </p>
              </div>
            </div>

            {/* Registro profissional */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-sm border border-bege/25 px-4 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-bege" aria-hidden="true" />
              <p className="text-[11px] uppercase tracking-[1.4px] text-bege/90">
                CRP {SITE.crp}
              </p>
            </div>

            {/* Bio curta */}
            <p className="max-w-md text-[14.5px] leading-[1.75] text-creme/70">
              Atendimento psicológico online e presencial com escuta de
              orientação psicanalítica. Um espaço ético, sigiloso e
              acolhedor para o seu processo.
            </p>

            {/* Contatos rápidos — puxando do constants */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-sm border border-bege/30 px-4 py-2.5 text-sm text-creme transition-colors hover:border-bege/60 hover:bg-creme/5"
              >
                <Phone
                  size={15}
                  strokeWidth={1.5}
                  className="text-bege"
                  aria-hidden="true"
                />
                WhatsApp
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2.5 rounded-sm border border-bege/30 px-4 py-2.5 text-sm text-creme transition-colors hover:border-bege/60 hover:bg-creme/5"
              >
                <Mail
                  size={15}
                  strokeWidth={1.5}
                  className="text-bege"
                  aria-hidden="true"
                />
                E-mail
              </a>

              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-sm border border-bege/30 px-4 py-2.5 text-sm text-creme transition-colors hover:border-bege/60 hover:bg-creme/5"
              >
                <InstagramIcon
                  size={15}
                  strokeWidth={1.5}
                  className="text-bege"
                />
                Instagram
              </a>
            </div>
          </div>

          {/* ---------- Coluna 2 — Navegação ---------- */}
          <div className="lg:col-span-2">
            <p className="mb-5 text-[10px] uppercase tracking-[2px] text-bege/70 font-medium">
              Navegação
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-creme/70 transition-colors hover:text-bege"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Coluna 3 — Informações ---------- */}
          <div className="lg:col-span-2">
            <p className="mb-5 text-[10px] uppercase tracking-[2px] text-bege/70 font-medium">
              Informações
            </p>
            <ul className="flex flex-col gap-3 text-sm text-creme/70">
              <li>
                <a href="#faq" className="transition-colors hover:text-bege">
                  Dúvidas frequentes
                </a>
              </li>
              <li>
                <a
                  href="#investimento"
                  className="transition-colors hover:text-bege"
                >
                  Investimento
                </a>
              </li>
              <li>
                <a
                  href="#atendimentos"
                  className="transition-colors hover:text-bege"
                >
                  Como funciona
                </a>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="transition-colors hover:text-bege"
                >
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* ---------- Coluna 4 — Emergência ---------- */}
          <div className="lg:col-span-3">
            <p className="mb-5 text-[10px] uppercase tracking-[2px] text-bege/70 font-medium">
              Emergência
            </p>

            <div className="rounded-sm border border-bege/25 bg-creme/5 p-5">
              <p className="mb-3 text-[13px] leading-relaxed text-creme/75">
                Em situações de crise ou risco imediato, ligue para o CVV —
                atendimento gratuito, sigiloso e 24h.
              </p>

              <a
                href="tel:188"
                className="inline-flex items-center gap-3 rounded-sm bg-bege px-4 py-2.5 text-sm font-medium tracking-wide text-cacau transition-colors hover:bg-creme"
              >
                <Phone size={15} strokeWidth={2} aria-hidden="true" />
                Ligar para 188 (CVV)
              </a>

              <p className="mt-4 text-[10.5px] leading-relaxed text-bege/50">
                Este site não oferece atendimento de emergência.
              </p>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="my-12 h-px w-full bg-bege/15 md:my-14" />

        {/* Menção ao CFP */}
        <div className="mb-8 max-w-3xl">
          <p className="text-[12px] leading-relaxed text-creme/50">
            O exercício profissional da Psicologia é regulamentado pelo{" "}
            <strong className="font-medium text-creme/70">
              Conselho Federal de Psicologia (CFP)
            </strong>{" "}
            e pelos Conselhos Regionais. Esta profissional está registrada sob
            o{" "}
            <strong className="font-medium text-creme/70">
              CRP {SITE.crp}
            </strong>
            . O sigilo profissional é garantido pelo Código de Ética
            Profissional do Psicólogo.
          </p>
        </div>

        {/* Rodapé inferior — copyright + créditos */}
        <div className="flex flex-col gap-6 border-t border-bege/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] uppercase tracking-[1.4px] text-bege/50">
            © {ano} {SITE.nome} — Todos os direitos reservados
          </p>

          <p className="text-[11px] uppercase tracking-[1.4px] text-bege/50">
            Desenvolvido por{" "}
            <a
              href="https://bindvalue.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-medium text-bege/80 transition-colors hover:text-creme"
            >
              Luiz Corsini
              <ExternalLink
                size={11}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}