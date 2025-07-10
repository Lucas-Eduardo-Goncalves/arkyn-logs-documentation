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
            { label: "Criar Domain", slug: "domain/createdomain" },
            { label: "Deletar Domain", slug: "domain/deletedomain" },
            { label: "Listar Domains", slug: "domain/listdomains" },
          ],
        },
        {
          label: "Pathname",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "pathname/introduction" },
            { label: "Criar Pathname", slug: "pathname/createpathname" },
            { label: "Deletar Pathname", slug: "pathname/deletepathname" },
            { label: "Listar Pathnames", slug: "pathname/listpathnames" },
          ],
        },
        {
          label: "CorePathname",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "corepathname/introduction" },
            {
              label: "Criar CorePathname",
              slug: "corepathname/createcorepathname",
            },
            {
              label: "Deletar CorePathname",
              slug: "corepathname/deletecorepathname",
            },
            {
              label: "Listar CorePathnames",
              slug: "corepathname/listcorepathnames",
            },
          ],
        },
        {
          label: "CoreLog",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "corelog/introduction" },
            { label: "Criar CoreLog", slug: "corelog/createcorelog" },
            { label: "Listar CoreLogs", slug: "corelog/listcorelogs" },
          ],
        },
        {
          label: "HttpTraffic",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "httptraffic/introduction" },
            {
              label: "Criar HttpTraffic",
              slug: "httptraffic/createhttptraffic",
            },
            {
              label: "Deletar HttpTraffic",
              slug: "httptraffic/deletehttptraffic",
            },
            {
              label: "Listar HttpTraffics",
              slug: "httptraffic/listhttptraffics",
            },
          ],
        },
        {
          label: "HttpTrafficRecord",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "httptrafficrecord/introduction" },
            {
              label: "Compor HttpTrafficRecord",
              slug: "httptrafficrecord/composehttptrafficrecord",
            },
            {
              label: "Listar HttpTrafficRecords",
              slug: "httptrafficrecord/listhttptrafficrecords",
            },
          ],
        },
        {
          label: "Request",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "request/introduction" },
            { label: "Criar Request", slug: "request/createrequest" },
          ],
        },
        {
          label: "Response",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "response/introduction" },
            { label: "Criar Response", slug: "response/createresponse" },
          ],
        },
        {
          label: "TrafficSource",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "trafficsource/introduction" },
            {
              label: "Criar TrafficSource",
              slug: "trafficsource/createtrafficsource",
            },
            {
              label: "Atualizar TrafficSource",
              slug: "trafficsource/updatetrafficsource",
            },
            {
              label: "Deletar TrafficSource",
              slug: "trafficsource/deletetrafficsource",
            },
            {
              label: "Listar TrafficSources",
              slug: "trafficsource/listtrafficsources",
            },
          ],
        },
        {
          label: "User",
          collapsed: true,
          items: [
            { label: "Introdução", slug: "user/introduction" },
            { label: "Criar User", slug: "user/createuser" },
            { label: "Autenticar User", slug: "user/authuser" },
            { label: "Atualizar User", slug: "user/updateuser" },
            { label: "Deletar User", slug: "user/deleteuser" },
            { label: "Listar Users", slug: "user/listusers" },
          ],
        },
      ],
    }),
  ],
});
