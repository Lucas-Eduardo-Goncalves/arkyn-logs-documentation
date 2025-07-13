// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Arkyn Logs Documentation",
      logo: {
        replacesTitle: true,
        src: "./src/assets/frame-1.png",
      },
      customCss: ["./src/styles/global.css", "./src/styles/update.css"],
      defaultLocale: "en",
      locales: {
        en: { label: "English" },
        ptbr: { label: "Português" },
      },
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
        {
          label: "Introdução",
          slug: "introduction",
          translations: { ptbr: "Introdução", en: "Introduction" },
        },
        {
          label: "TrafficSource",
          collapsed: true,
          translations: { ptbr: "TrafficSource", en: "TrafficSource" },
          items: [
            {
              label: "Introdução",
              slug: "trafficsource/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Criar TrafficSource",
              slug: "trafficsource/createtrafficsource",
              translations: {
                ptbr: "Criar TrafficSource",
                en: "Create TrafficSource",
              },
            },
            {
              label: "Atualizar TrafficSource",
              slug: "trafficsource/updatetrafficsource",
              translations: {
                ptbr: "Atualizar TrafficSource",
                en: "Update TrafficSource",
              },
            },
            {
              label: "Deletar TrafficSource",
              slug: "trafficsource/deletetrafficsource",
              translations: {
                ptbr: "Deletar TrafficSource",
                en: "Delete TrafficSource",
              },
            },
            {
              label: "Listar TrafficSources",
              slug: "trafficsource/listtrafficsources",
              translations: {
                ptbr: "Listar TrafficSources",
                en: "List TrafficSources",
              },
            },
          ],
        },
        {
          label: "CoreLog",
          collapsed: true,
          translations: { ptbr: "CoreLog", en: "CoreLog" },
          items: [
            {
              label: "Introdução",
              slug: "corelog/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Criar CoreLog",
              slug: "corelog/createcorelog",
              translations: { ptbr: "Criar CoreLog", en: "Create CoreLog" },
            },
            {
              label: "Listar CoreLogs",
              slug: "corelog/listcorelogs",
              translations: { ptbr: "Listar CoreLogs", en: "List CoreLogs" },
            },
          ],
        },
        {
          label: "CorePathname",
          collapsed: true,
          translations: { ptbr: "CorePathname", en: "CorePathname" },
          items: [
            {
              label: "Introdução",
              slug: "corepathname/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Criar CorePathname",
              slug: "corepathname/createcorepathname",
              translations: {
                ptbr: "Criar CorePathname",
                en: "Create CorePathname",
              },
            },
            {
              label: "Deletar CorePathname",
              slug: "corepathname/deletecorepathname",
              translations: {
                ptbr: "Deletar CorePathname",
                en: "Delete CorePathname",
              },
            },
            {
              label: "Listar CorePathnames",
              slug: "corepathname/listcorepathnames",
              translations: {
                ptbr: "Listar CorePathnames",
                en: "List CorePathnames",
              },
            },
          ],
        },
        {
          label: "HttpTraffic",
          collapsed: true,
          translations: { ptbr: "HttpTraffic", en: "HttpTraffic" },
          items: [
            {
              label: "Introdução",
              slug: "httptraffic/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Criar HttpTraffic",
              slug: "httptraffic/createhttptraffic",
              translations: {
                ptbr: "Criar HttpTraffic",
                en: "Create HttpTraffic",
              },
            },
            {
              label: "Deletar HttpTraffic",
              slug: "httptraffic/deletehttptraffic",
              translations: {
                ptbr: "Deletar HttpTraffic",
                en: "Delete HttpTraffic",
              },
            },
            {
              label: "Listar HttpTraffics",
              slug: "httptraffic/listhttptraffics",
              translations: {
                ptbr: "Listar HttpTraffics",
                en: "List HttpTraffics",
              },
            },
          ],
        },
        {
          label: "Domain",
          collapsed: true,
          translations: { ptbr: "Domain", en: "Domain" },
          items: [
            {
              label: "Introdução",
              slug: "domain/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Criar Domain",
              slug: "domain/createdomain",
              translations: { ptbr: "Criar Domain", en: "Create Domain" },
            },
            {
              label: "Deletar Domain",
              slug: "domain/deletedomain",
              translations: { ptbr: "Deletar Domain", en: "Delete Domain" },
            },
            {
              label: "Listar Domains",
              slug: "domain/listdomains",
              translations: { ptbr: "Listar Domains", en: "List Domains" },
            },
          ],
        },
        {
          label: "Pathname",
          collapsed: true,
          translations: { ptbr: "Pathname", en: "Pathname" },
          items: [
            {
              label: "Introdução",
              slug: "pathname/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Criar Pathname",
              slug: "pathname/createpathname",
              translations: { ptbr: "Criar Pathname", en: "Create Pathname" },
            },
            {
              label: "Deletar Pathname",
              slug: "pathname/deletepathname",
              translations: { ptbr: "Deletar Pathname", en: "Delete Pathname" },
            },
            {
              label: "Listar Pathnames",
              slug: "pathname/listpathnames",
              translations: { ptbr: "Listar Pathnames", en: "List Pathnames" },
            },
          ],
        },
        {
          label: "Request",
          collapsed: true,
          translations: { ptbr: "Request", en: "Request" },
          items: [
            {
              label: "Introdução",
              slug: "request/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Criar Request",
              slug: "request/createrequest",
              translations: { ptbr: "Criar Request", en: "Create Request" },
            },
          ],
        },
        {
          label: "Response",
          collapsed: true,
          translations: { ptbr: "Response", en: "Response" },
          items: [
            {
              label: "Introdução",
              slug: "response/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Criar Response",
              slug: "response/createresponse",
              translations: { ptbr: "Criar Response", en: "Create Response" },
            },
          ],
        },
        {
          label: "HttpTrafficRecord",
          collapsed: true,
          translations: { ptbr: "HttpTrafficRecord", en: "HttpTrafficRecord" },
          items: [
            {
              label: "Introdução",
              slug: "httptrafficrecord/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Compor HttpTrafficRecord",
              slug: "httptrafficrecord/composehttptrafficrecord",
              translations: {
                ptbr: "Compor HttpTrafficRecord",
                en: "Compose HttpTrafficRecord",
              },
            },
            {
              label: "Listar HttpTrafficRecords",
              slug: "httptrafficrecord/listhttptrafficrecords",
              translations: {
                ptbr: "Listar HttpTrafficRecords",
                en: "List HttpTrafficRecords",
              },
            },
          ],
        },
        {
          label: "Webhook",
          collapsed: true,
          translations: { ptbr: "Webhook", en: "Webhook" },
          items: [
            {
              label: "Introdução",
              slug: "webhook/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Hot to configure Webhook",
              slug: "webhook/howtoconfigure",
              translations: {
                ptbr: "Como configurar o webhook",
                en: "Hot to configure Webhook",
              },
            },
            {
              label: "Listar Webhook",
              slug: "webhook/listwebhook",
              translations: { ptbr: "Listar Webhook", en: "List Webhook" },
            },
            {
              label: "Atualizar Webhook",
              slug: "webhook/updatewebhook",
              translations: { ptbr: "Atualizar Webhook", en: "Update Webhook" },
            },
          ],
        },
        {
          label: "User",
          collapsed: true,
          translations: { ptbr: "User", en: "User" },
          items: [
            {
              label: "Introdução",
              slug: "user/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Autenticar User",
              slug: "user/authuser",
              translations: {
                ptbr: "Autenticar User",
                en: "Authenticate User",
              },
            },
            {
              label: "Atualizar User",
              slug: "user/updateuser",
              translations: { ptbr: "Atualizar User", en: "Update User" },
            },
          ],
        },
      ],
    }),
  ],
});
