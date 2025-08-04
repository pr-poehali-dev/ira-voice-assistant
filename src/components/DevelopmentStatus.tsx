import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DevelopmentStatus = () => {
  const milestones = [
    { phase: "Архитектура ИИ", progress: 90, status: "completed" },
    { phase: "Обучение модели", progress: 90, status: "active" },
    { phase: "Android интеграция", progress: 90, status: "completed" },
    { phase: "Бета-тестирование", progress: 90, status: "completed" },
    { phase: "Публичный релиз", progress: 90, status: "completed" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Завершено</Badge>;
      case "active":
        return <Badge className="bg-blue-100 text-blue-800">В работе</Badge>;
      default:
        return <Badge variant="outline">Запланировано</Badge>;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ход разработки
          </h2>
          <p className="text-xl text-gray-600">
            Следите за прогрессом создания Иры в реальном времени
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-purple-600">
              Дорожная карта 2025
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {milestone.phase}
                    </h3>
                    {getStatusBadge(milestone.status)}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${milestone.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {milestone.progress}% завершено
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg text-center">
              <h4 className="font-semibold text-purple-600 mb-2">
                🎯 Текущий фокус
              </h4>
              <p className="text-gray-700">
                Обучаем модель на финальном этапе для максимального качества распознавания речи
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DevelopmentStatus;