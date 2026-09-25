import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";

function NotFound(){return <div className="grid min-h-screen place-items-center bg-white"><div className="text-center"><h1 className="text-7xl font-black">404</h1><p className="mt-3 text-slate-600">Página não encontrada.</p><Link to="/" className="mt-5 inline-flex rounded-xl bg-[#138c03] px-5 py-3 font-bold text-white">Voltar</Link></div></div>}

export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({
 head:()=>({meta:[
  {charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},
  {title:"Veterinária e Pet Shop Brasil | Cuidado Animal em Osasco"},
  {name:"description",content:"Veterinária e Pet Shop Brasil em Osasco: banho e tosa, consultas e procedimentos veterinários, rações, acessórios e sistema leva e traz."},
  {name:"author",content:"Veterinária e Pet Shop Brasil"},{name:"theme-color",content:"#e0fb13"},
  {property:"og:title",content:"Veterinária e Pet Shop Brasil"},
  {property:"og:description",content:"Cuidado animal com qualidade técnica, atendimento personalizado e relacionamento duradouro em Osasco."},
  {property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],
  links:[{rel:"stylesheet",href:appCss}]}),
 shellComponent:({children}:{children:ReactNode})=><html lang="pt-BR"><head><HeadContent/></head><body>{children}<Scripts/></body></html>,
 component:()=>{const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>},
 notFoundComponent:NotFound
});