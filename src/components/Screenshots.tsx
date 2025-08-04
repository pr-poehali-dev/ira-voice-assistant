import { Card, CardContent } from "@/components/ui/card";

const Screenshots = () => {
  const screenshots = [
    {
      id: 1,
      title: "Главный экран приложения",
      description: "Знакомьтесь с Ирой - интерфейс голосового помощника",
      image: "https://cdn.poehali.dev/files/ad05f43e-6aa1-49a3-b232-d46f5515cb86.jpg",
      alt: "Скриншот главного экрана приложения Ира с кнопкой микрофона"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Скриншоты приложения
          </h2>
          <p className="text-xl text-gray-600">
            Посмотрите, как выглядит интерфейс голосового помощника Ира
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot) => (
            <Card key={screenshot.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={screenshot.image}
                    alt={screenshot.alt}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-gray-600">
                    {screenshot.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-50 text-purple-700 rounded-full border border-purple-200">
            <span className="text-2xl">📱</span>
            <span className="font-medium">Скоро появится больше скриншотов</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;