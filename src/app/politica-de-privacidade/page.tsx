import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${SITE.nome}`,
  description:
    "Saiba como seus dados pessoais são coletados, usados e protegidos neste site.",
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidade() {
  const atualizadoEm = "Setembro de 2026";

  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-32 lg:pt-36">
        {/* Cabeçalho da página */}
        <section className="relative px-5 pb-12 md:px-8 md:pb-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[1.4px] text-taupe transition-colors hover:text-vinho"
            >
              <ArrowLeft
                size={14}
                strokeWidth={1.75}
                className="transition-transform group-hover:-translate-x-0.5"
              />
              Voltar ao site
            </Link>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-taupe/60" aria-hidden="true" />
              <p className="micro-copy">Documento legal</p>
            </div>

            <h1 className="font-serif text-4xl leading-[1.05] text-vinho sm:text-5xl md:text-[3.5rem]">
              Política de
              <br />
              <em className="italic text-taupe">Privacidade</em>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-cacau/80">
              Esta política descreve como as informações de visitantes e
              pacientes são tratadas neste site, em conformidade com a Lei
              Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e com o
              Código de Ética Profissional do Psicólogo.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[1.4px] text-taupe">
              Última atualização: {atualizadoEm}
            </p>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="relative px-5 pb-20 md:px-8 md:pb-28">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-12 text-[15px] leading-[1.75] text-cacau/85 md:text-base">
              {/* 1. Quem somos */}
              <article>
                <h2 className="mb-4 font-serif text-2xl text-vinho md:text-3xl">
                  1. Quem é a responsável pelo tratamento dos dados
                </h2>
                <p>
                  Este site pertence a <strong>{SITE.nome}</strong>, psicóloga
                  clínica registrada sob o <strong>CRP {SITE.crp}</strong>, com
                  atuação em {SITE.cidade} — {SITE.estado} e atendimento online
                  para outras localidades. A profissional é a{" "}
                  <strong>controladora</strong> dos dados pessoais coletados por
                  meio deste site, nos termos da LGPD.
                </p>
                <p className="mt-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre o
                  tratamento dos seus dados, o contato pode ser feito pelo
                  e-mail{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-vinho underline decoration-bege underline-offset-4 transition-colors hover:text-vinho/70"
                  >
                    {SITE.email}
                  </a>
                  .
                </p>
              </article>

              {/* 2. Dados coletados */}
              <article>
                <h2 className="mb-4 font-serif text-2xl text-vinho md:text-3xl">
                  2. Quais dados são coletados
                </h2>
                <p>
                  Este site foi desenvolvido para coletar o{" "}
                  <strong>mínimo necessário</strong> de informações. Os dados
                  podem ser coletados de duas formas:
                </p>

                <h3 className="mt-6 mb-2 font-serif text-lg text-vinho">
                  a) Dados fornecidos voluntariamente
                </h3>
                <p>
                  Quando você entra em contato por{" "}
                  <strong>WhatsApp, e-mail ou Instagram</strong>, você
                  compartilha voluntariamente informações como nome, telefone,
                  e-mail e o conteúdo da sua mensagem. Esses dados são usados
                  exclusivamente para <strong>responder ao seu contato</strong>{" "}
                  e, se houver continuidade, para agendar e conduzir o
                  atendimento psicológico.
                </p>

                <h3 className="mt-6 mb-2 font-serif text-lg text-vinho">
                  b) Dados de navegação
                </h3>
                <p>
                  Este site <strong>não utiliza cookies de rastreamento</strong>{" "}
                  nem ferramentas de analytics que identifiquem visitantes
                  individualmente. Informações técnicas anônimas (como tipo de
                  navegador e páginas acessadas) podem ser processadas pela
                  infraestrutura de hospedagem para fins de segurança e
                  funcionamento do serviço.
                </p>
              </article>

              {/* 3. Dados sensíveis */}
              <article>
                <h2 className="mb-4 font-serif text-2xl text-vinho md:text-3xl">
                  3. Dados sensíveis e sigilo profissional
                </h2>
                <p>
                  Informações relacionadas à <strong>saúde mental</strong> são
                  consideradas <strong>dados pessoais sensíveis</strong> pela
                  LGPD (art. 5º, II). Tais dados:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-taupe">
                  <li>
                    <strong>Não são coletados por este site</strong> em nenhuma
                    hipótese;
                  </li>
                  <li>
                    Quando compartilhados durante o atendimento, são protegidos
                    pelo <strong>sigilo profissional</strong>, garantido pelo
                    Código de Ética Profissional do Psicólogo (Resolução CFP nº
                    010/2005) e pela legislação vigente;
                  </li>
                  <li>
                    Jamais são divulgados, vendidos, compartilhados ou usados
                    para qualquer finalidade que não o próprio cuidado clínico.
                  </li>
                </ul>
                <p className="mt-4">
                  O sigilo profissional é um dever ético e legal do psicólogo,
                  com exceções previstas apenas em situações de risco de vida
                  ou por determinação judicial, conforme a legislação
                  brasileira.
                </p>
              </article>

              {/* 4. Finalidade */}
              <article>
                <h2 className="mb-4 font-serif text-2xl text-vinho md:text-3xl">
                  4. Para que os dados são utilizados
                </h2>
                <p>Os dados eventualmente coletados são usados para:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-taupe">
                  <li>Responder a mensagens enviadas por WhatsApp, e-mail ou Instagram;</li>
                  <li>Agendar, remarcar ou cancelar sessões;</li>
                  <li>Emitir recibos, quando solicitado, para fins de reembolso;</li>
                  <li>
                    Cumprir obrigações legais, fiscais e éticas inerentes à
                    prática profissional.
                  </li>
                </ul>
                <p className="mt-4">
                  Os dados <strong>não são utilizados</strong> para fins de
                  marketing, não são compartilhados com terceiros e não
                  alimentam qualquer tipo de perfilamento comercial.
                </p>
              </article>

              {/* 5. Compartilhamento */}
              <article>
                <h2 className="mb-4 font-serif text-2xl text-vinho md:text-3xl">
                  5. Compartilhamento com terceiros
                </h2>
                <p>
                  Seus dados <strong>não são vendidos nem compartilhados</strong>{" "}
                  com terceiros para fins comerciais. O compartilhamento ocorre
                  apenas quando estritamente necessário, com:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-taupe">
                  <li>
                    <strong>Provedores de infraestrutura</strong> (hospedagem do
                    site, e-mail), que atuam como operadores e seguem contratos
                    de confidencialidade;
                  </li>
                  <li>
                    <strong>Autoridades competentes</strong>, quando houver
                    obrigação legal ou judicial.
                  </li>
                </ul>
              </article>

              {/* 6. Armazenamento e segurança */}
              <article>
                <h2 className="mb-4 font-serif text-2xl text-vinho md:text-3xl">
                  6. Armazenamento e segurança
                </h2>
                <p>
                  Adotam-se medidas técnicas e administrativas razoáveis para
                  proteger os dados contra acessos não autorizados, perdas,
                  alterações ou divulgação indevida, incluindo:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-taupe">
                  <li>
                    <strong>Conexão criptografada</strong> (HTTPS) em todo o
                    site;
                  </li>
                  <li>
                    Controle de acesso restrito aos dispositivos utilizados no
                    atendimento;
                  </li>
                  <li>
                    Guarda dos registros clínicos pelo prazo mínimo de{" "}
                    <strong>5 anos</strong>, conforme Resolução CFP nº
                    001/2009, e depois descartados de forma segura.
                  </li>
                </ul>
              </article>

              {/* 7. Direitos do titular */}
              <article>
                <h2 className="mb-4 font-serif text-2xl text-vinho md:text-3xl">
                  7. Seus direitos (LGPD)
                </h2>
                <p>
                  Nos termos do art. 18 da LGPD, você tem direito a:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-taupe">
                  <li>Confirmação da existência de tratamento dos seus dados;</li>
                  <li>Acesso aos dados que eventualmente estejam armazenados;</li>
                  <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                  <li>
                    Anonimização, bloqueio ou eliminação de dados
                    desnecessários, excessivos ou tratados em desconformidade
                    com a lei;
                  </li>
                  <li>Portabilidade dos dados a outro fornecedor;</li>
                  <li>Eliminação dos dados tratados com consentimento;</li>
                  <li>Informação sobre compartilhamentos realizados;</li>
                  <li>Revogação do consentimento, a qualquer momento.</li>
                </ul>
                <p className="mt-4">
                  Para exercer qualquer um desses direitos, entre em contato
                  pelo e-mail{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-vinho underline decoration-bege underline-offset-4 transition-colors hover:text-vinho/70"
                  >
                    {SITE.email}
                  </a>
                  .
                </p>
              </article>

              {/* 8. Cookies */}
              <article>
                <h2 className="mb-4 font-serif text-2xl text-vinho md:text-3xl">
                  8. Cookies
                </h2>
                <p>
                  Este site <strong>não utiliza cookies de rastreamento</strong>{" "}
                  nem tecnologias semelhantes para perfilamento. Cookies
                  estritamente necessários ao funcionamento do site (se
                  existirem) não coletam informações pessoais identificáveis.
                </p>
              </article>

              {/* 9. Alterações */}
              <article>
                <h2 className="mb-4 font-serif text-2xl text-vinho md:text-3xl">
                  9. Alterações nesta política
                </h2>
                <p>
                  Esta política pode ser atualizada periodicamente para
                  refletir mudanças legais, técnicas ou operacionais. A data da
                  última atualização será sempre indicada no topo do documento.
                  Recomenda-se revisitar esta página de tempos em tempos.
                </p>
              </article>

              {/* 10. Contato */}
              <article>
                <h2 className="mb-4 font-serif text-2xl text-vinho md:text-3xl">
                  10. Contato
                </h2>
                <p>
                  Em caso de dúvidas sobre esta política ou sobre o tratamento
                  dos seus dados:
                </p>
                <ul className="mt-4 list-none space-y-2 text-cacau/85">
                  <li>
                    <strong className="font-medium text-vinho">
                      Responsável:
                    </strong>{" "}
                    {SITE.nome} — CRP {SITE.crp}
                  </li>
                  <li>
                    <strong className="font-medium text-vinho">E-mail:</strong>{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="underline decoration-bege underline-offset-4 transition-colors hover:text-vinho"
                    >
                      {SITE.email}
                    </a>
                  </li>
                  <li>
                    <strong className="font-medium text-vinho">
                      Localização:
                    </strong>{" "}
                    {SITE.regiao}, {SITE.cidade} — {SITE.estado}
                  </li>
                </ul>
              </article>

              {/* Aviso de emergência */}
              <article className="rounded-sm border border-bege/60 bg-bege/20 p-6">
                <p className="text-[14px] leading-relaxed text-cacau/85">
                  <strong className="font-medium text-vinho">
                    Este site não oferece atendimento de emergência.
                  </strong>{" "}
                  Em situações de crise ou risco imediato, ligue para o{" "}
                  <strong className="font-medium text-vinho">CVV — 188</strong>{" "}
                  (gratuito, sigiloso, 24h) ou procure o CAPS mais próximo.
                </p>
              </article>
            </div>

            {/* Rodapé da página */}
            <div className="mt-16 border-t border-bege/60 pt-8">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[1.4px] text-vinho transition-colors hover:text-vinho/70"
              >
                <ArrowLeft
                  size={14}
                  strokeWidth={1.75}
                  className="transition-transform group-hover:-translate-x-0.5"
                />
                Voltar ao site
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}