import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  Settings, 
  Users, 
  Smartphone, 
  ShieldCheck, 
  Ticket,
  ShoppingCart,
  Download,
  Zap
} from "lucide-react";

export default function Home() {
  const buyLink = "https://mpago.la/1AYshQb";
  
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo_raspa_monkey.png" alt="Raspa Monkey" className="h-12" />
            <span className="text-xl font-bold text-green-500 tracking-wider">SCRIPT PREMIUM</span>
          </div>
          <Button 
            asChild
            size="sm"
            className="bg-green-500 hover:bg-green-600 text-black font-bold"
          >
            <a href={buyLink} target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="mr-2 h-4 w-4" />
              COMPRAR
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-zinc-950 to-zinc-950" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/20">
                🚀 Código Fonte Completo
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Tenha seu Próprio Site de{" "}
              <span className="text-green-500 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                Raspadinhas Lucrativo
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
              Sistema completo com PIX Automático, Painel Administrativo Financeiro, Sistema de Afiliados e Design Dark Mode moderno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                asChild
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-105"
              >
                <a href={buyLink} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  COMPRAR CÓDIGO FONTE
                </a>
              </Button>
              
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <Download className="h-4 w-4" />
                <span>Entrega Automática Imediata</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                <span className="text-zinc-400">Instalação Rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span className="text-zinc-400">Código Aberto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Showcase */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <img 
              src="/baner1.png" 
              alt="A Melhor Raspadinha do Brasil" 
              className="w-full rounded-2xl shadow-2xl shadow-green-500/10 border border-zinc-800"
            />
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Interface Premium & Responsiva
            </h2>
            <p className="text-xl text-zinc-400">
              Design profissional que converte visitantes em jogadores
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { img: "/raspadinha_mega_black.png", label: "MEGA RASPADA BLACK - R$20.000" },
              { img: "/raspadinha_ostentacao.png", label: "OSTENTAÇÃO INSTANTÂNEA - R$10.000" },
              { img: "/raspadinha_sonho_premiado.png", label: "SONHO PREMIADO - R$5.000" },
              { img: "/raspadinha_pix_turbinado.png", label: "PIX TURBINADO - R$2.500" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-green-500/50 transition-all hover:-translate-y-1 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-bold text-green-500 text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Por que este é o <span className="text-green-500">Melhor Script?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Wallet,
                title: "Gateway de Pagamento",
                description: "Sistema pronto para Depósitos e Saques via PIX com aprovação instantânea no painel."
              },
              {
                icon: Settings,
                title: "Painel Admin Poderoso",
                description: "Gerencie usuários, veja o saldo total em carteira, controle depósitos confirmados e saques pendentes."
              },
              {
                icon: Users,
                title: "Sistema de Afiliados",
                description: "Função 'Indique e Ganhe' nativa para viralizar seu site. Usuários ganham por convidar amigos."
              },
              {
                icon: Smartphone,
                title: "100% Responsivo",
                description: "Design moderno (Dark Mode) que funciona perfeitamente em celulares Android e iPhone."
              },
              {
                icon: ShieldCheck,
                title: "Código Aberto",
                description: "Você recebe o código fonte completo. Hospede onde quiser e tenha controle total do seu negócio."
              },
              {
                icon: Ticket,
                title: "Múltiplas Raspadinhas",
                description: "Suporte para vários tipos de jogos e prêmios configuráveis pelo administrador."
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="bg-zinc-950 p-8 rounded-xl border border-zinc-800 hover:border-green-500/50 transition-all"
              >
                <feature.icon className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Comece Hoje Mesmo!
            </h2>
            <p className="text-xl text-zinc-400">
              Investimento único de <span className="text-green-500 font-bold text-2xl">R$ 100</span> para ter seu próprio negócio online
            </p>
            
            <Button 
              asChild
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-bold text-xl px-12 py-8 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:scale-105"
            >
              <a href={buyLink} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-6 w-6" />
                GARANTIR MINHA CÓPIA AGORA
              </a>
            </Button>

            <p className="text-sm text-zinc-500">
              🔒 Pagamento seguro via Mercado Pago • Entrega automática instantânea
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 bg-zinc-950">
        <div className="container mx-auto px-4 text-center text-zinc-500 text-sm">
          <p>&copy; 2025 Script Raspadinha Premium. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
