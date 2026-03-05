'use client';

import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Terminal, 
  Users, 
  Clock, 
  Server, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ChevronRight,
  BrainCircuit,
  Bot,
  Code2
} from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      {/* Navigation / Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-lg tracking-tight flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-500" />
            <span>TECH_SOVEREIGNTY</span>
          </div>
          <a href="#pricing" className="text-sm font-medium hover:text-emerald-400 transition-colors">
            Приєднатися
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(16,185,129,0.15)_0%,_transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Для фаундерів та C-level
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8 uppercase">
              Кінець ери <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                технічної залежності
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-2xl">
              Припиніть наймати людей там, де потрібні алгоритми. Навчіться проєктувати автономних AI-агентів, які масштабують ваш управлінський досвід 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-none hover:bg-zinc-200 transition-colors">
                Вступити у VIP-спринт
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                Спробувати за 999 грн
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section className="py-24 px-6 border-t border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Чому ваші ідеї гинуть <br className="hidden md:block" />
              <span className="text-zinc-500">у черзі на виконання?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Кадровий голод",
                desc: "Ви місяцями шукаєте фахівців, які «розуміють завдання», але отримуєте посередність."
              },
              {
                icon: Clock,
                title: "Людський фактор",
                desc: "Помилки в рахунках, забуті ТЗ, повільна реакція. Бізнес стоїть, поки «співробітник на обіді»."
              },
              {
                icon: Server,
                title: "Технічний диктат",
                desc: "Будь-яка зміна на сайті або в CRM вимагає тижнів очікування та тисяч доларів на аутсорс."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10 bg-black hover:border-emerald-500/30 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-zinc-600 group-hover:text-emerald-500 transition-colors mb-6" />
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 border border-emerald-500/20 bg-emerald-500/5 rounded-2xl">
            <p className="text-lg md:text-xl text-emerald-100 font-medium text-center">
              Ваш час — це найдорожчий ресурс. Досить витрачати його на управління людьми, які роблять роботу повільніше, ніж AI-агент.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Інвестуйте в Цифровий Актив, <br />
              <span className="text-zinc-500">а не в оренду чужих мізків.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border border-white/10 bg-zinc-900/50">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-zinc-500" />
                <h3 className="text-xl font-semibold text-zinc-300">Співробітник / Фрилансер</h3>
              </div>
              <p className="text-zinc-400 mb-6">
                Це «оренда». Коли вони йдуть — знання про процеси йдуть разом із ними. Ви залишаєтеся біля розбитого корита.
              </p>
              <ul className="space-y-3">
                {['Вимагають відпусток', 'Роблять помилки', 'Забирають знання з собою'].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-zinc-500 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border border-emerald-500/30 bg-emerald-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Bot className="w-32 h-32" />
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <BrainCircuit className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-semibold text-emerald-400">AI-Агент</h3>
              </div>
              <p className="text-zinc-300 mb-6 relative z-10">
                Це ваш актив. Ви один раз проєктуєте логіку (свій досвід), і агент працює вічно на вашому особистому сервері.
              </p>
              <ul className="space-y-3 relative z-10">
                {['Працює 24/7', 'Масштабується безкоштовно', 'Знання залишаються у вас'].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-emerald-200/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-zinc-400">
              <strong className="text-white">40 000 грн</strong> за VIP-спринт — це менше зарплати одного Middle-маркетолога. Але після спринту у вас залишається «армія», яка не просить відпусток і масштабується безкоштовно.
            </p>
          </div>
        </div>
      </section>

      {/* Method 90% */}
      <section className="py-24 px-6 border-y border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
                Ми не читаємо лекцій. <br />
                <span className="text-emerald-500">Ми створюємо Менеджерську М'язову Пам'ять.</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8">
                Забудьте про «перегляд відео». На VIP-спринті ми йдемо через Action-Learning: 5% теорії vs 90% дії.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "Проєктування", desc: "Ви описуєте завдання мовою сенсів (Spec-lite)." },
                  { step: "02", title: "Деплой", desc: "Ви наказуєте агенту розгорнути інфраструктуру на Hetzner." },
                  { step: "03", title: "Запуск", desc: "Ви отримуєте працюючий продукт наприкінці кожного вечора." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="font-mono text-emerald-500 font-bold mt-1">{item.step}</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-8 relative">
                <div className="absolute inset-0 border border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                <div className="text-center z-10">
                  <div className="text-6xl font-display font-bold text-white mb-2">90%</div>
                  <div className="text-emerald-500 font-mono text-sm uppercase tracking-widest">Дії / Практики</div>
                  <div className="w-full h-px bg-white/10 my-4" />
                  <div className="text-2xl font-display font-bold text-zinc-500 mb-1">10%</div>
                  <div className="text-zinc-600 font-mono text-xs uppercase tracking-widest">Теорії</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Три шляхи до Автономії
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="p-8 border border-white/10 bg-zinc-900/30 flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">«AI-Агент-Архітектор»</h3>
                <div className="text-3xl font-display font-bold">999 ₴</div>
              </div>
              <div className="flex-grow space-y-6 mb-8">
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2 font-mono">Що це</div>
                  <p className="text-sm text-zinc-300">Майстер-клас зі створення та деплою сайту за 1 вечір.</p>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2 font-mono">Для кого</div>
                  <p className="text-sm text-zinc-300">Хто хоче відчути «смак крові» та запустити перший автономний актив сьогодні.</p>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2 font-mono">Результат</div>
                  <p className="text-sm text-emerald-400">Ваш професійний лендинг в онлайні.</p>
                </div>
              </div>
              <button className="w-full py-4 border border-white/20 hover:bg-white/5 transition-colors font-medium">
                Спробувати
              </button>
            </div>

            {/* Tier 2 */}
            <div className="p-8 border border-white/10 bg-zinc-900/30 flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">«Енциклопедія Суверенітету»</h3>
                <div className="text-3xl font-display font-bold">9 990 ₴</div>
              </div>
              <div className="flex-grow space-y-6 mb-8">
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2 font-mono">Що це</div>
                  <p className="text-sm text-zinc-300">30 годин записів VIP-спринту + бібліотека промптів + інструкції з безпеки.</p>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2 font-mono">Для кого</div>
                  <p className="text-sm text-zinc-300">Для тих, хто готовий копати глибоко сам і хоче мати повну базу знань під рукою.</p>
                </div>
              </div>
              <button className="w-full py-4 border border-white/20 hover:bg-white/5 transition-colors font-medium">
                Хочу пройти самостійно
              </button>
            </div>

            {/* Tier 3 - Highlighted */}
            <div className="p-8 border-2 border-emerald-500 bg-emerald-500/5 flex flex-col relative transform lg:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider py-1 px-3">
                Вибір Фаундера
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-emerald-400">«VIP Executive Спринт»</h3>
                <div className="text-3xl font-display font-bold">39 999 ₴</div>
              </div>
              <div className="flex-grow space-y-6 mb-8">
                <div>
                  <div className="text-xs text-emerald-500/70 uppercase tracking-wider mb-2 font-mono">Що це</div>
                  <p className="text-sm text-zinc-200">Жива група (макс. 12 осіб), 10 вечорів, мій особистий аудит вашого проєкту.</p>
                </div>
                <div>
                  <div className="text-xs text-emerald-500/70 uppercase tracking-wider mb-2 font-mono">Результат</div>
                  <p className="text-sm text-emerald-400 font-medium">Готовий MVP вашого продукту + перебудоване мислення архітектора систем.</p>
                </div>
              </div>
              <button className="w-full py-4 bg-emerald-500 text-black hover:bg-emerald-400 transition-colors font-bold">
                Вступити у VIP-спринт
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Відпрацювання Edge-сценаріїв
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "«Я не технар, я не впораюся».",
                a: "Ми використовуємо «Управлінський код». Якщо ви вмієте ставити завдання людям — ви впораєтеся з AI-агентами. Ми говоримо з ними українською/англійською, а не на C++."
              },
              {
                q: "«Чи безпечно це для даних компанії?»",
                a: "Це єдиний курс, де ми вчимо розгортати системи на вашому особистому сервері (Hetzner) та у приватних репозиторіях (GitHub). Ніхто, крім вас, не має доступу до ключів."
              },
              {
                q: "«У мене специфічна ніша (салон, виробництво)».",
                a: "AI-агенти універсальні. Ми розбираємо архітектуру «вузьких місць». Якщо у вас є процес, який можна описати словами — його можна автоматизувати."
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 border border-white/10 bg-black">
                <h4 className="text-lg font-semibold mb-3 flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-zinc-400 pl-9 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet / Footer CTA */}
      <section className="py-24 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/20" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Zap className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            AI-Аудит Вузьких Місць
          </h2>
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
            7 точок, де ви втрачаєте гроші через повільних співробітників.
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
            Отримати гайд у Telegram
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-white/10 text-zinc-600 text-sm">
        <p>© {new Date().getFullYear()} Технічний Суверенітет. Всі права захищені.</p>
      </footer>
    </main>
  );
}
