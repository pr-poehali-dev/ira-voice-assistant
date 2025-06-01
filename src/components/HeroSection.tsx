import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-300/20 rounded-full blur-2xl"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <Badge className="mb-6 bg-white/20 text-white border-white/30">
          🤖 Скоро на Android
        </Badge>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Знакомьтесь, Ира
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Умный голосовой помощник нового поколения. Разговаривает естественно,
          понимает контекст и помогает в повседневных задачах.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            Узнать больше
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3"
          >
            Подписаться на обновления
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-300">
          <p>🚀 Запуск планируется в 2025 году</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
