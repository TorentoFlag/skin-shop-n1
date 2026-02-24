import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-[90px] flex flex-col items-center justify-center text-center px-4"
    >
      <div className="text-8xl font-bold font-['Orbitron'] gradient-text mb-4">404</div>
      <h2 className="text-2xl font-bold text-white mb-2">Страница не найдена</h2>
      <p className="text-[#6b6b7b] mb-8">Страница, которую вы ищете, не существует.</p>
      <Link
        to="/"
        className="bg-gradient-to-r from-[#00d9ff] to-[#00ff88] px-8 py-3 rounded-xl text-black font-bold hover:opacity-90 transition"
      >
        На главную
      </Link>
    </motion.div>
  );
}
