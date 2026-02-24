import { useNavigate } from 'react-router-dom';
import { useFilterStore } from '../../../store/useFilterStore';

const categoryWeapons: Record<string, string[]> = {
  'Винтовки': ['AK-47', 'M4A4', 'M4A1-S', 'AWP', 'SG 553', 'FAMAS', 'Galil AR', 'Scout'],
  'Пистолеты': ['USP-S', 'Glock-18', 'Desert Eagle'],
  'Пистолеты-пулемёты': ['MP9', 'MAC-10', 'P90'],
  'Тяжёлое': ['Nova', 'XM1014'],
};

export function Footer() {
  const navigate = useNavigate();
  const { resetFilters, setWeapons } = useFilterStore();

  const handleCategoryClick = (category: string) => {
    resetFilters();
    const weapons = categoryWeapons[category];
    if (weapons) {
      setWeapons(weapons);
    }
    navigate('/marketplace');
  };
  return (
    <footer className="bg-[#0f0f1a] border-t border-[#3a3a5a] mt-20">
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 tablet:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 tablet:col-span-1">
            <div className="text-2xl font-bold font-['Rajdhani'] bg-gradient-to-r from-[#00d9ff] to-[#00ff88] bg-clip-text text-transparent mb-3">
              SkinVault
            </div>
            <p className="text-[#6b6b7b] text-sm leading-relaxed">
              Самый надёжный маркетплейс скинов CS:GO. Покупайте и продавайте с уверенностью.
            </p>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-['Rajdhani'] text-lg">Магазин</h4>
            <ul className="space-y-2">
              {['Все скины', 'Винтовки', 'Пистолеты', 'Пистолеты-пулемёты', 'Тяжёлое'].map(item => (
                <li key={item}>
                  <button onClick={() => handleCategoryClick(item)} className="text-[#6b6b7b] hover:text-[#00d9ff] transition text-sm">{item}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-['Rajdhani'] text-lg">Поддержка</h4>
            <ul className="space-y-2">
              {[
                { label: 'FAQ', path: '/faq' },
                { label: 'Как купить', path: '/faq?section=market' },
                { label: 'Steam Trade', path: '/faq?section=exchange' },
              ].map(item => (
                <li key={item.label}>
                  <button onClick={() => navigate(item.path)} className="text-[#6b6b7b] hover:text-[#00d9ff] transition text-sm">{item.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-['Rajdhani'] text-lg">Почему SkinVault?</h4>
            <div className="space-y-3">
              {[
                { icon: '🔒', label: 'Верификация Steam', desc: 'Все сделки через Steam' },
                { icon: '⚡', label: 'Мгновенная доставка', desc: 'Обмен за несколько минут' },
                { icon: '🛡️', label: '1M+ сделок', desc: 'Доверенное сообщество' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="text-xs text-[#6b6b7b]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#3a3a5a] flex flex-col tablet:flex-row items-center justify-between gap-4">
          <p className="text-[#6b6b7b] text-xs">© 2026 SkinVault.</p>
        </div>
      </div>
    </footer>
  );
}
