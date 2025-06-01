import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Что умеет голосовой помощник Ира?",
      answer:
        "Ира может выполнять команды голосом, отвечать на вопросы, управлять устройствами умного дома, помогать с планированием дня и многое другое. Она понимает естественную речь и адаптируется под ваши потребности.",
    },
    {
      question: "Будет ли Ира работать на Android?",
      answer:
        "Да, Ира будет полностью совместима с Android устройствами. Мы разрабатываем приложение для всех популярных платформ, включая Android, iOS и веб-версию.",
    },
    {
      question: "Как обеспечивается приватность данных?",
      answer:
        "Мы серьёзно относимся к приватности. Все голосовые данные обрабатываются с использованием современных методов шифрования. Вы сами контролируете, какая информация сохраняется и как она используется.",
    },
    {
      question: "Когда будет доступен релиз?",
      answer:
        "Мы активно работаем над финальной версией. Бета-тестирование начнётся в ближайшие месяцы. Подпишитесь на обновления, чтобы первыми узнать о запуске.",
    },
    {
      question: "Нужно ли интернет-соединение для работы?",
      answer:
        "Основные функции Иры требуют интернет-подключения для обеспечения высокого качества распознавания речи. Однако некоторые базовые команды будут работать и в офлайн-режиме.",
    },
    {
      question: "Можно ли настроить голос и личность помощника?",
      answer:
        "Да! Ира предлагает различные варианты голоса и стилей общения. Вы сможете выбрать подходящий тон и манеру речи, которая вам больше нравится.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-gray-600">
            Всё, что вы хотели знать о голосовом помощнике Ира
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-purple-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
