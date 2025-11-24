import { Button } from "@/components/ui/button";
import { CheckCircle2, Download as DownloadIcon, MessageCircle } from "lucide-react";

export default function Download() {
  const downloadLink = "https://drive.google.com/file/d/15y5vqXcXPt4yJ66_ri5_iyX8hvtwLW2n/view?usp=sharing";
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8 text-center">
        {/* Ícone de Sucesso */}
        <div className="flex justify-center animate-in zoom-in duration-500">
          <CheckCircle2 className="w-24 h-24 text-green-500" />
        </div>

        {/* Título */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Pagamento Confirmado!
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Obrigado pela compra. O sistema identificou seu pagamento e liberou o acesso ao código fonte completo.
          </p>
        </div>

        {/* Box de Download */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6 animate-in slide-in-from-bottom duration-700">
          <p className="text-white font-medium">
            Clique no botão abaixo para baixar:
          </p>
          
          <Button
            asChild
            size="lg"
            className="w-full bg-green-500 hover:bg-green-600 text-black font-bold text-lg py-6 rounded-full shadow-lg shadow-green-500/20 transition-all hover:shadow-green-500/40 hover:scale-[1.02]"
          >
            <a href={downloadLink} target="_blank" rel="noopener noreferrer">
              <DownloadIcon className="mr-2 h-5 w-5" />
              BAIXAR SCRIPT AGORA
            </a>
          </Button>

          <div className="text-sm text-zinc-500">
            Não conseguiu baixar?{" "}
            <a 
              href={downloadLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 underline"
            >
              Clique aqui para link direto
            </a>
          </div>
        </div>

        {/* Suporte */}
        <div className="flex items-center justify-center gap-2 text-zinc-400">
          <MessageCircle className="w-5 h-5" />
          <p>Dúvidas? Entre em contato pelo WhatsApp.</p>
        </div>

        {/* Logo */}
        <div className="pt-8">
          <img 
            src="/logo_raspa_monkey.png" 
            alt="Raspa Monkey" 
            className="h-16 mx-auto opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
