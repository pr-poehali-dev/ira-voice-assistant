import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SubscribeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="border-0 shadow-xl bg-white/95 backdrop-blur">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
              Будьте первыми! 🚀
            </CardTitle>
            <p className="text-lg text-gray-600">
              Подпишитесь на обновления и получите эксклюзивный доступ к
              бета-версии Иры
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3">
                Подписаться
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">📧</div>
                <h4 className="font-semibold text-gray-900">
                  Новости разработки
                </h4>
                <p className="text-sm text-gray-600">
                  Еженедельные обновления о прогрессе
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎁</div>
                <h4 className="font-semibold text-gray-900">Ранний доступ</h4>
                <p className="text-sm text-gray-600">
                  Первыми протестируете бета-версию
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💬</div>
                <h4 className="font-semibold text-gray-900">Обратная связь</h4>
                <p className="text-sm text-gray-600">
                  Влияйте на развитие продукта
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              Никакого спама. Только важные обновления о разработке Иры.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SubscribeSection;
