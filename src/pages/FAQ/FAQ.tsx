import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiUser, FiRepeat, FiShoppingBag, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { Input } from '../../components/common/Input/Input';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: FaqItem[];
}

const FAQ_SECTIONS: FaqSection[] = [
  {
    id: 'auth',
    title: 'Авторизация',
    icon: <FiUser size={18} />,
    items: [
      {
        question: 'Как мне авторизоваться на сайте?',
        answer:
          'Для авторизации нажмите кнопку «Войти» в правом верхнем углу сайта. Вы можете войти через Steam-аккаунт — это самый быстрый и безопасный способ. После нажатия вы будете перенаправлены на страницу авторизации Steam, где нужно ввести логин и пароль от вашего аккаунта.',
      },
      {
        question: 'Безопасно ли входить через Steam?',
        answer:
          'Да, полностью безопасно. Мы используем официальный протокол OpenID от Valve. Ваш пароль вводится только на официальном сайте Steam — мы никогда не получаем и не храним ваш пароль. После авторизации мы получаем только ваш публичный профиль и SteamID.',
      },
      {
        question: 'Могу ли я войти без Steam?',
        answer:
          'На данный момент авторизация доступна только через Steam-аккаунт. Это необходимо для подтверждения вашей личности и привязки инвентаря. В будущем мы планируем добавить дополнительные способы авторизации.',
      },
      {
        question: 'Что делать, если не удаётся войти?',
        answer:
          'Убедитесь, что ваш Steam-профиль не является приватным. Проверьте, что Steam Guard активирован. Если проблема сохраняется, попробуйте очистить кэш браузера или использовать другой браузер. Если ничего не помогает, обратитесь в нашу службу поддержки.',
      },
    ],
  },
  {
    id: 'exchange',
    title: 'Режим обмена',
    icon: <FiRepeat size={18} />,
    items: [
      {
        question: 'Как работает режим обмена?',
        answer:
          'Режим обмена позволяет вам обменивать свои скины на скины других пользователей. Выберите скины из своего инвентаря, найдите подходящее предложение и отправьте запрос на обмен. Оба участника должны подтвердить обмен через Steam.',
      },
      {
        question: 'Какая комиссия за обмен?',
        answer:
          'Комиссия за обмен составляет 5% от общей стоимости обмена. Комиссия взимается с инициатора обмена. При обмене скинов равной стоимости комиссия минимальна.',
      },
      {
        question: 'Сколько времени занимает обмен?',
        answer:
          'После подтверждения обеими сторонами обмен обрабатывается в течение нескольких минут. Если у обоих участников отключён удержание обменов в Steam (Trade Hold), скины будут переданы моментально. В противном случае может потребоваться до 15 дней.',
      },
      {
        question: 'Можно ли отменить обмен?',
        answer:
          'Вы можете отменить обмен до тех пор, пока второй участник не подтвердил его. После подтверждения обеими сторонами отмена невозможна. Если обмен находится на удержании (Trade Hold), его можно отменить в любой момент до завершения периода ожидания.',
      },
    ],
  },
  {
    id: 'market',
    title: 'Маркет',
    icon: <FiShoppingBag size={18} />,
    items: [
      {
        question: 'Как купить скин на маркете?',
        answer:
          'Найдите нужный скин с помощью поиска или фильтров. Нажмите на карточку, чтобы увидеть подробную информацию. Если цена вас устраивает, нажмите «Добавить в корзину» и перейдите к оформлению заказа. После оплаты скин будет отправлен в ваш Steam-инвентарь.',
      },
      {
        question: 'Какие способы оплаты доступны?',
        answer:
          'Мы принимаем банковские карты (Visa, MasterCard, МИР), электронные кошельки, криптовалюту (BTC, ETH, USDT) и баланс Steam. Все платежи обрабатываются через защищённые платёжные системы.',
      },
      {
        question: 'Как выставить свой скин на продажу?',
        answer:
          'Перейдите в раздел «Мой инвентарь», выберите скин для продажи и установите желаемую цену. Скин будет автоматически размещён на маркете. Когда покупатель совершит покупку, вы получите средства на баланс за вычетом комиссии.',
      },
      {
        question: 'Какая комиссия за продажу?',
        answer:
          'Комиссия за продажу составляет 7% от цены продажи. Комиссия автоматически вычитается при зачислении средств на ваш баланс. Для постоянных продавцов с большим объёмом продаж доступны скидки на комиссию.',
      },
      {
        question: 'Как быстро я получу скин после покупки?',
        answer:
          'В большинстве случаев скин отправляется в ваш инвентарь в течение 1–5 минут после оплаты. В редких случаях доставка может занять до 1 часа. Если скин не пришёл в течение часа, обратитесь в поддержку.',
      },
    ],
  },
	{
    id: 'exchange_block',
    title: 'Блокировка обмена',
    icon: <FiShoppingBag size={18} />,
    items: [
      {
        question: 'Я принял обмен на предметы с блокировкой обмена, как мне вывести их в Steam?',
        answer:
          'После подтверждения обмена на предмет с блокировкой обмена, ваш новый предмет появится в вашем виртуальном инвентаре на сайте. На самом предмете есть таймер, который указывает, через какое время вы сможете забрать предмет в ваш Steam инвентарь.',
      },
      {
        question: 'Почему написано, что предмет в инвентаре, но в инвентаре Steam его нет?',
        answer:
          'Вероятнее всего, вы совершили обмен на предмет с блокировкой обмена в Steam. Приобретая или обменивая любой предмет с блокировкой обмена в Steam у нас на сайте, вы получаете его виртуальную копию в свой инвентарь на CS.MONEY. На самом предмете есть таймер, который показывает, когда вы сможете забрать предмет в ваш Steam инвентарь.',
      },
      {
        question: 'Почему я не могу получить все предметы в одном обмене?',
        answer:
          'Если вы выбрали несколько предметов из нашего инвентаря, то с большой вероятностью они находятся на разных ботах. В таком случае, вам придет первый обмен с одним или несколькими предметами от одного из ботов. После подтверждения первого обмена в Steam, остальные боты отправят вам обмены с недостающими предметами. Это происходит из-за 7-ми дневной блокировки обмена предметов CS:GO. Мы не можем отправить все ваши предметы в одном обмене, потому что Steam заблокирует обмен этих предметов на 7 дней после того, как мы отправим их одному нашему боту.',
      },
      {
        question: 'Сколько времени у меня есть, чтобы вывести предмет с сайта?',
        answer:
          'После выхода виртуального предмета из холда, у вас будет 45 дней для вывода предмета. Если с предметом возникнут технические проблемы — вы получите компенсацию в размере его стоимости.',
      },
    ],
  },
	{
    id: 'prices',
    title: 'Цены',
    icon: <FiShoppingBag size={18} />,
    items: [
      {
        question: 'Как вы формируете цены? Почему мои предметы дешевле, чем в Steam?',
        answer:
          'Все цены автоматически устанавливаются нашей системой. Цена зависит от многих факторов, таких как: тип предмета, его качество, наличие StatTrak™, популярность среди игроков, спрос на торговых площадках и т.д. Наша ценовая политика напрямую не зависит от других сайтов, включая Steam Community Market.',
      },
      {
        question: 'Почему мой предмет упал в цене после обмена?',
        answer:
          'Цена вашего предмета может снизиться по одной из следующих причин:\nБазовая комиссия — предметы наших ботов стоят дороже предметов пользователя на 7%; Наценка за блокировку предметов — предметы с блокировкой обмена имеют дополнительную комиссию в зависимости от количества дней блокировки (от 0 до 13%); \nКомиссия на предметы, на которых только что закончилась блокировка — предметы, на которых закончилась блокировка обменов Steam тоже имеют дополнительную комиссию. Она полностью снимается через 6 дней после разблокировки.',
      },
      {
        question: 'Вы переплачиваете за стикеры или Float? Почему на моем предмете нет наценок?',
        answer:
          'На нашем сайте есть переплаты за предметы с редкими наклейками, паттернами и Float Value. Наценка устанавливается автоматически нашей системой и может зависеть от многих факторов, таких как: сам предмет, его популярность среди игроков, цена наклейки, позиция наклейки, редкость предмета с данной наклейкой и т. д.',
      },
    ],
  },
	
];

function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-[#3a3a5a] rounded-xl overflow-hidden transition-colors hover:border-[#00d9ff]/40">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full p-5 text-left"
      >
        <span className={`font-medium text-sm pr-4 transition-colors ${isOpen ? 'text-[#00d9ff]' : 'text-white'}`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <FiChevronDown size={18} className={isOpen ? 'text-[#00d9ff]' : 'text-[#6b6b7b]'} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-[#a0a0b0] leading-relaxed border-t border-[#2a2a3a] pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState('auth');
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const section = searchParams.get('section');
    if (section && FAQ_SECTIONS.some(s => s.id === section)) {
      setActiveSection(section);
      setOpenQuestion(null);
      setSearchQuery('');
    }
  }, [searchParams]);

  const currentSection = FAQ_SECTIONS.find(s => s.id === activeSection)!;

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return currentSection.items;
    const q = searchQuery.toLowerCase();
    return currentSection.items.filter(
      item =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [searchQuery, currentSection]);

  const allFilteredSections = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const results: { section: FaqSection; items: FaqItem[] }[] = [];
    for (const section of FAQ_SECTIONS) {
      const matched = section.items.filter(
        item =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
      );
      if (matched.length > 0) {
        results.push({ section, items: matched });
      }
    }
    return results;
  }, [searchQuery]);

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    setOpenQuestion(null);
    setSearchQuery('');
    setMobileNavOpen(false);
  };

  const totalResults = allFilteredSections
    ? allFilteredSections.reduce((sum, s) => sum + s.items.length, 0)
    : filteredItems.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-[90px] pb-10"
    >
      <div className="max-w-[1600px] mx-auto px-4 laptop:px-8">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold font-['Rajdhani'] text-white">
            Часто задаваемые вопросы
          </h1>
          <p className="text-[#6b6b7b] mt-1">Найдите ответы на популярные вопросы</p>
        </div>

        {/* Mobile search (always visible) */}
        <div className="laptop:hidden mb-4">
          <Input
            icon={<FiSearch size={14} />}
            value={searchQuery}
            onChange={e => { setSearchQuery(e.target.value); setMobileNavOpen(false); }}
            placeholder="Поиск по вопросам..."
          />
        </div>

        {/* Mobile section toggle */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="laptop:hidden flex items-center gap-2 w-full mb-4 px-4 py-3 bg-[#1a1a2e] border border-[#3a3a5a] rounded-xl text-white text-sm"
        >
          {mobileNavOpen ? <FiX size={16} /> : <FiMenu size={16} />}
          <span>Разделы</span>
          <span className="ml-auto text-[#6b6b7b]">{currentSection.title}</span>
        </button>

        {/* Layout */}
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside
            className={`
              ${mobileNavOpen ? 'block' : 'hidden'} laptop:block
              w-full laptop:w-[280px] flex-shrink-0
              bg-[#1a1a2e] border border-[#3a3a5a] rounded-2xl p-5
              h-fit sticky top-[90px]
              ${mobileNavOpen ? 'absolute z-30 left-4 right-4 laptop:relative laptop:left-auto laptop:right-auto' : ''}
            `}
          >
            {/* Search (desktop only — mobile search is above) */}
            <div className="mb-5 hidden laptop:block">
              <Input
                icon={<FiSearch size={14} />}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Поиск по вопросам..."
              />
            </div>

            {/* Section navigation */}
            <nav className="flex flex-col gap-1">
              <span className="text-xs text-[#6b6b7b] uppercase tracking-wider mb-2 font-medium">
                Разделы
              </span>
              {FAQ_SECTIONS.map(section => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left transition-all
                    ${
                      activeSection === section.id && !searchQuery
                        ? 'bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30'
                        : 'text-[#a0a0b0] hover:bg-[#252540] hover:text-white border border-transparent'
                    }
                  `}
                >
                  <span className="flex-shrink-0">{section.icon}</span>
                  <span className="font-medium">{section.title}</span>
                  <span className="ml-auto text-xs text-[#6b6b7b]">
                    {section.items.length}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {searchQuery.trim() && allFilteredSections ? (
                /* Search results across all sections */
                <motion.div
                  key="search-results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-6 p-4 bg-[#1a1a2e] rounded-xl border border-[#3a3a5a]">
                    <FiSearch size={16} className="text-[#6b6b7b]" />
                    <span className="text-sm text-[#a0a0b0]">
                      Найдено <span className="text-white font-medium">{totalResults}</span> результатов
                      по запросу «<span className="text-[#00d9ff]">{searchQuery}</span>»
                    </span>
                  </div>

                  {allFilteredSections.length === 0 ? (
                    <div className="text-center py-16">
                      <div className="text-[#6b6b7b] text-5xl mb-4">🔍</div>
                      <p className="text-[#6b6b7b] text-lg">Ничего не найдено</p>
                      <p className="text-[#6b6b7b] text-sm mt-1">
                        Попробуйте изменить поисковый запрос
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {allFilteredSections.map(({ section, items }) => (
                        <div key={section.id}>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#00d9ff]">{section.icon}</span>
                            <h2 className="text-lg font-bold font-['Rajdhani'] text-white">
                              {section.title}
                            </h2>
                          </div>
                          <div className="space-y-3">
                            {items.map((item, idx) => (
                              <AccordionItem
                                key={`${section.id}-${idx}`}
                                item={item}
                                isOpen={openQuestion === idx && activeSection === section.id}
                                onToggle={() => {
                                  setActiveSection(section.id);
                                  setOpenQuestion(
                                    openQuestion === idx && activeSection === section.id ? null : idx
                                  );
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ) : (
                /* Normal section view */
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Section header */}
                  <div className="flex items-center gap-3 mb-6 p-4 bg-[#1a1a2e] rounded-xl border border-[#3a3a5a]">
                    <span className="text-[#00d9ff]">{currentSection.icon}</span>
                    <h2 className="text-lg font-bold font-['Rajdhani'] text-white">
                      {currentSection.title}
                    </h2>
                    <span className="text-sm text-[#6b6b7b] ml-auto">
                      {filteredItems.length} вопросов
                    </span>
                  </div>

                  {/* FAQ items */}
                  <div className="space-y-3">
                    {filteredItems.map((item, idx) => (
                      <AccordionItem
                        key={idx}
                        item={item}
                        isOpen={openQuestion === idx}
                        onToggle={() => setOpenQuestion(openQuestion === idx ? null : idx)}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
