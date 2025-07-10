// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Arkyn Logs Documentation",
      social: [
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/lucas-eduardo-goncalves",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Lucas-Eduardo-Goncalves/arkyn-logs",
        },
      ],
      sidebar: [
        { label: "Introdução", slug: "introduction" },
        {
          label: "Domain",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "domain/introduction" },
            { label: "Criar domínio", slug: "domain/createdomain" },
            { label: "Deletar domínio", slug: "domain/deletedomain" },
            { label: "Listar domínios", slug: "domain/listdomains" },
          ],
        },
        {
          label: "Pathname",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "pathname/introduction" },
            { label: "Criar caminho", slug: "pathname/createpathname" },
            { label: "Deletar caminho", slug: "pathname/deletepathname" },
            { label: "Listar caminhos", slug: "pathname/listpathnames" },
          ],
        },
        {
          label: "Core Pathname",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "corepathname/introduction" },
            {
              label: "Criar core pathname",
              slug: "corepathname/createcorepathname",
            },
            {
              label: "Deletar core pathname",
              slug: "corepathname/deletecorepathname",
            },
            {
              label: "Listar core pathnames",
              slug: "corepathname/listcorepathnames",
            },
          ],
        },
        {
          label: "Core Log",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "corelog/introduction" },
            { label: "Criar core log", slug: "corelog/createcorelog" },
            { label: "Listar core logs", slug: "corelog/listcorelogs" },
          ],
        },
        {
          label: "HTTP Traffic",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "httptraffic/introduction" },
            {
              label: "Criar HTTP traffic",
              slug: "httptraffic/createhttptraffic",
            },
            {
              label: "Deletar HTTP traffic",
              slug: "httptraffic/deletehttptraffic",
            },
            {
              label: "Listar HTTP traffics",
              slug: "httptraffic/listhttptraffics",
            },
          ],
        },
        {
          label: "HTTP Traffic Record",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "httptrafficrecord/introduction" },
            {
              label: "Compor HTTP traffic record",
              slug: "httptrafficrecord/composehttptrafficrecord",
            },
            {
              label: "Listar HTTP traffic records",
              slug: "httptrafficrecord/listhttptrafficrecords",
            },
          ],
        },
        {
          label: "Request",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "request/introduction" },
            { label: "Criar request", slug: "request/createrequest" },
          ],
        },
        {
          label: "Response",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "response/introduction" },
            { label: "Criar response", slug: "response/createresponse" },
          ],
        },
        {
          label: "Traffic Source",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "trafficsource/introduction" },
            {
              label: "Criar traffic source",
              slug: "trafficsource/createtrafficsource",
            },
            {
              label: "Atualizar traffic source",
              slug: "trafficsource/updatetrafficsource",
            },
            {
              label: "Deletar traffic source",
              slug: "trafficsource/deletetrafficsource",
            },
            {
              label: "Listar traffic sources",
              slug: "trafficsource/listtrafficsources",
            },
          ],
        },
        {
          label: "User",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "user/introduction" },
            { label: "Criar usuário", slug: "user/createuser" },
            { label: "Autenticar usuário", slug: "user/authuser" },
            { label: "Atualizar usuário", slug: "user/updateuser" },
            { label: "Deletar usuário", slug: "user/deleteuser" },
            { label: "Listar usuários", slug: "user/listusers" },
          ],
        },
      ],
    }),
  ],
});
