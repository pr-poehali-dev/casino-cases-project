import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [balance, setBalance] = useState(0);
  const [showTopUp, setShowTopUp] = useState(false);
  const [tonAmount, setTonAmount] = useState("");

  const cases = [
    {
      id: 1,
      name: "Everything Or Nothing",
      subtitle: "все или ничего",
      price: 1,
      rewards: [
        { stars: 0.1, chance: 85 },
        { stars: 0.2, chance: 14.99 },
        { stars: 5, chance: 0.01 },
      ],
    },
    {
      id: 2,
      name: "Illusion Of Security",
      subtitle: "Иллюзия безопасности",
      price: 4,
      rewards: [
        { stars: 1, chance: 36 },
        { stars: 2, chance: 60 },
        { stars: 3, chance: 2 },
        { stars: 5, chance: 1 },
        { stars: 6, chance: 1 },
      ],
    },
    {
      id: 3,
      name: "Бизнесмен",
      subtitle: "",
      price: 7,
      rewards: [
        { stars: 222, chance: 99.9 },
        { stars: 11, chance: 0.3 },
        { stars: 16, chance: 0.01 },
        { stars: 17, chance: 0.01 },
        { stars: 20, chance: 0.05 },
      ],
    },
    {
      id: 4,
      name: "Lucky Fall",
      subtitle: "Удачное падение",
      price: 1,
      rewards: [
        { stars: 0.3, chance: 70 },
        { stars: 0.5, chance: 20 },
        { stars: 1.7, chance: 9 },
        { stars: 8, chance: 1 },
      ],
    },
    {
      id: 5,
      name: "Digital Mirage",
      subtitle: "Цифровой мираж",
      price: 4,
      rewards: [
        { stars: 1, chance: 65 },
        { stars: 3, chance: 25 },
        { stars: 7, chance: 10 },
        { stars: 11, chance: 5 },
        { stars: 15, chance: 0.01 },
      ],
    },
    {
      id: 6,
      name: "Тёмный Риск",
      subtitle: "",
      price: 10,
      rewards: [
        { stars: 1, chance: 87 },
        { stars: 5, chance: 10 },
        { stars: 7, chance: 2 },
        { stars: 19, chance: 0.01 },
        { stars: 22, chance: 0.01 },
      ],
    },
  ];

  const leaderboard = [
    { name: "CryptoKing", stars: 15420, avatar: "👑" },
    { name: "NeonPlayer", stars: 12340, avatar: "⚡" },
    { name: "DiamondHands", stars: 9876, avatar: "💎" },
    { name: "LuckyShot", stars: 8765, avatar: "🎯" },
    { name: "StarCollector", stars: 7654, avatar: "⭐" },
  ];

  const handleTopUp = () => {
    if (tonAmount) {
      const ton = parseFloat(tonAmount);
      if (ton > 0) {
        // Эмуляция оплаты TON
        setBalance((prev) => prev + ton);
        setTonAmount("");
        setShowTopUp(false);
      }
    }
  };

  const openCase = (caseItem: (typeof cases)[0]) => {
    if (balance >= caseItem.price) {
      setBalance((prev) => prev - caseItem.price);

      // Симуляция открытия кейса
      const random = Math.random() * 100;
      let cumulativeChance = 0;

      for (const reward of caseItem.rewards) {
        cumulativeChance += reward.chance;
        if (random <= cumulativeChance) {
          alert(`🎉 Поздравляем! Вы получили ${reward.stars} ⭐`);
          break;
        }
      }
    } else {
      alert("Недостаточно средств для открытия кейса!");
    }
  };

  return (
    <div className="min-h-screen bg-casino-dark text-white">
      {/* Header */}
      <div className="bg-casino-darker border-b border-neon-blue/20">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                CASINO TON
              </h1>
              <div className="hidden md:flex space-x-6">
                <a
                  href="#cases"
                  className="hover:text-neon-blue transition-colors"
                >
                  Кейсы
                </a>
                <a
                  href="#rating"
                  className="hover:text-neon-purple transition-colors"
                >
                  Рейтинг
                </a>
                <a
                  href="#topup"
                  className="hover:text-neon-orange transition-colors"
                >
                  Пополнение
                </a>
                <a
                  href="https://t.me/TonCaseSupport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon-green transition-colors"
                >
                  Поддержка
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-casino-gray rounded-lg border border-neon-blue/30">
                <Icon name="Coins" className="text-neon-orange" size={20} />
                <span className="font-semibold">{balance.toFixed(2)} TON</span>
              </div>
              <Button
                onClick={() => setShowTopUp(true)}
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300 animate-neon-pulse"
              >
                Пополнить
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-casino-darker to-casino-dark py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange bg-clip-text text-transparent animate-float">
            КОСМИЧЕСКИЕ КЕЙСЫ
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Откройте кейсы и получите звёзды! Премиальные награды ждут самых
            удачливых игроков в галактике.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 px-6 py-3 bg-casino-gray/50 rounded-lg border border-neon-blue/30">
              <Icon name="Users" className="text-neon-blue" size={24} />
              <span>1,247 игроков онлайн</span>
            </div>
            <div className="flex items-center space-x-2 px-6 py-3 bg-casino-gray/50 rounded-lg border border-neon-purple/30">
              <Icon name="Package" className="text-neon-purple" size={24} />
              <span>52,341 кейсов открыто</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cases Section */}
      <section id="cases" className="py-16 bg-casino-gray">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
            ВЫБЕРИТЕ СВОЙ КЕЙС
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem) => (
              <Card
                key={caseItem.id}
                className="bg-casino-darker border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] group"
              >
                <CardHeader className="text-center">
                  <div className="mb-4 relative">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center text-3xl animate-glow group-hover:animate-float">
                      📦
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {caseItem.name}
                  </CardTitle>
                  {caseItem.subtitle && (
                    <CardDescription className="text-gray-400">
                      {caseItem.subtitle}
                    </CardDescription>
                  )}
                  <div className="text-2xl font-bold text-neon-orange">
                    {caseItem.price} TON
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">
                      Возможные награды:
                    </h4>
                    {caseItem.rewards
                      .sort((a, b) => b.stars - a.stars)
                      .map((reward, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-1 px-2 bg-casino-dark/50 rounded"
                        >
                          <span className="flex items-center space-x-2">
                            <Icon
                              name="Star"
                              className="text-neon-orange"
                              size={16}
                            />
                            <span className="text-white">{reward.stars}</span>
                          </span>
                          <Badge
                            variant="outline"
                            className={`
                            ${
                              reward.chance < 1
                                ? "border-neon-purple text-neon-purple"
                                : reward.chance < 10
                                  ? "border-neon-orange text-neon-orange"
                                  : "border-neon-green text-neon-green"
                            }
                          `}
                          >
                            {reward.chance}%
                          </Badge>
                        </div>
                      ))}
                  </div>
                  <Button
                    onClick={() => openCase(caseItem)}
                    className="w-full bg-gradient-to-r from-neon-orange to-neon-pink hover:from-neon-pink hover:to-neon-orange transition-all duration-300"
                    disabled={balance < caseItem.price}
                  >
                    {balance >= caseItem.price
                      ? "ОТКРЫТЬ КЕЙС"
                      : "НЕДОСТАТОЧНО СРЕДСТВ"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section id="rating" className="py-16 bg-casino-dark">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-orange to-neon-pink bg-clip-text text-transparent">
            ТОП ИГРОКОВ
          </h3>
          <div className="max-w-2xl mx-auto">
            {leaderboard.map((player, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 mb-4 bg-casino-gray rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-neon-orange">
                    #{index + 1}
                  </div>
                  <div className="text-3xl">{player.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">
                      {player.name}
                    </div>
                    <div className="text-sm text-gray-400">Игрок</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Star" className="text-neon-orange" size={20} />
                  <span className="text-xl font-bold text-neon-orange">
                    {player.stars.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Up Modal */}
      {showTopUp && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="bg-casino-darker border-neon-blue/50 max-w-md w-full mx-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Пополнение TON</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTopUp(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <CardDescription>
                Пополните баланс для открытия кейсов
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Сумма в TON
                </label>
                <Input
                  type="number"
                  placeholder="Введите количество TON"
                  value={tonAmount}
                  onChange={(e) => setTonAmount(e.target.value)}
                  className="bg-casino-gray border-neon-blue/30 text-white"
                />
              </div>
              <div className="bg-casino-gray/50 p-4 rounded-lg">
                <div className="text-sm text-gray-400 mb-2">
                  Кошелек для пополнения:
                </div>
                <div className="text-xs font-mono text-neon-blue break-all">
                  UQCogOx2S_ZmS4-7qrBd3Ahvjsdx07lNkbjFnV5ZNZxlgoZ_
                </div>
              </div>
              <Button
                onClick={handleTopUp}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue"
              >
                Пополнить
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-casino-darker border-t border-neon-blue/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a
              href="https://t.me/TonCaseSupport"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-neon-blue hover:text-neon-purple transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
              <span>Поддержка в Telegram</span>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Casino Ton. Играйте ответственно. 18+
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
