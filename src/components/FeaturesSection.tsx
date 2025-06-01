import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🎯",
      title: "Умное понимание",
      description:
        "Ира понимает контекст разговора и запоминает предыдущие запросы для более точных ответов.",
    },
    {
      icon: "🔊",
      title: "Естественная речь",
      description:
        "Современные алгоритмы синтеза речи обеспечивают живое и приятное общение.",
    },
    {
      icon: "📱",
      title: "Глубокая интеграция",
      description:
        "Полная интеграция с Android: управление приложениями, настройками и умным домом.",
    },
    {
      icon: "🛡️",
      title: "Приватность",
      description:
        "Все данные обрабатываются локально на устройстве. Ваша приватность под защитой.",
    },
    {
      icon: "⚡",
      title: "Быстрая работа",
      description:
        "Молниеносные ответы благодаря оптимизированным алгоритмам машинного обучения.",
    },
    {
      icon: "🌐",
      title: "Русский язык",
      description:
        "Разработано специально для русскоязычных пользователей с пониманием культурного контекста.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Возможности Иры
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современный ИИ-помощник, который станет вашим надежным спутником в
            цифровом мире
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
