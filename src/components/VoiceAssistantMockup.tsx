import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const VoiceAssistantMockup = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [conversation, setConversation] = useState([
    { type: "user", text: "Привет, Ира!" },
    {
      type: "assistant",
      text: "Привет! Я Ира, твой голосовой помощник. Чем могу помочь?",
    },
  ]);

  // Симуляция анимации голосовых волн
  const waveHeights = Array.from({ length: 12 }, (_, i) => {
    const base = Math.sin(Date.now() / 200 + i) * 20 + 30;
    return isListening ? base : 10;
  });

  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setCurrentText((prev) => {
          const texts = ["Слушаю...", "Распознаю речь...", "Обрабатываю..."];
          const current = texts.indexOf(prev);
          return texts[(current + 1) % texts.length];
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCurrentText("");
    }
  }, [isListening]);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setConversation((prev) => [
          ...prev,
          { type: "user", text: "Какая сегодня погода?" },
          {
            type: "assistant",
            text: "Сегодня солнечно, +22°C. Отличная погода для прогулки!",
          },
        ]);
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <Card className="bg-gradient-to-br from-violet-50 to-indigo-50 border-violet-200 shadow-xl">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full flex items-center justify-center">
              <Icon name="Mic" size={16} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Ира — Голосовой помощник
            </h3>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-violet-600">
            <div
              className={`w-2 h-2 rounded-full ${isListening ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
            />
            {isListening ? "Активен" : "Ожидание"}
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Голосовые волны */}
          <div className="flex items-center justify-center gap-1 h-16 bg-white/50 rounded-lg p-4">
            {waveHeights.map((height, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-violet-500 to-indigo-400 rounded-full transition-all duration-150"
                style={{
                  height: `${height}px`,
                  animationDelay: `${i * 50}ms`,
                }}
              />
            ))}
          </div>

          {/* Кнопка записи */}
          <div className="flex justify-center">
            <Button
              onClick={toggleListening}
              size="lg"
              className={`w-20 h-20 rounded-full transition-all duration-300 ${
                isListening
                  ? "bg-red-500 hover:bg-red-600 animate-pulse"
                  : "bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600"
              }`}
            >
              <Icon
                name={isListening ? "Square" : "Mic"}
                size={24}
                className="text-white"
              />
            </Button>
          </div>

          {/* Текущее распознавание */}
          {currentText && (
            <div className="text-center p-3 bg-white/70 rounded-lg border border-violet-200">
              <p className="text-violet-600 font-medium">{currentText}</p>
            </div>
          )}

          {/* История диалога */}
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {conversation.map((message, i) => (
              <div
                key={i}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-violet-500 text-white rounded-br-sm"
                      : "bg-white text-gray-800 rounded-bl-sm border border-violet-200"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Возможности */}
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-white/50 rounded-lg border border-violet-200">
              <Icon
                name="MessageCircle"
                size={20}
                className="text-violet-500 mx-auto mb-1"
              />
              <p className="text-xs text-violet-600">Голосовые команды</p>
            </div>
            <div className="p-3 bg-white/50 rounded-lg border border-violet-200">
              <Icon
                name="Brain"
                size={20}
                className="text-violet-500 mx-auto mb-1"
              />
              <p className="text-xs text-violet-600">ИИ ответы</p>
            </div>
            <div className="p-3 bg-white/50 rounded-lg border border-violet-200">
              <Icon
                name="Globe"
                size={20}
                className="text-violet-500 mx-auto mb-1"
              />
              <p className="text-xs text-violet-600">Поиск в интернете</p>
            </div>
            <div className="p-3 bg-white/50 rounded-lg border border-violet-200">
              <Icon
                name="Settings"
                size={20}
                className="text-violet-500 mx-auto mb-1"
              />
              <p className="text-xs text-violet-600">Умный дом</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoiceAssistantMockup;
