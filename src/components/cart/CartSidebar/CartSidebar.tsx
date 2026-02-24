import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../../store/useCartStore';
import { CartItemComponent } from '../CartItem/CartItem';
import { formatPriceFull } from '../../../utils/formatPrice';

export function CartSidebar() {
  const { items, isOpen, setCartOpen, clearCart, getTotal } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setCartOpen(false)}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-[#1a1a2e] border-l border-[#3a3a5a] z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-[#3a3a5a]">
              <div className="flex items-center gap-3">
                <FiShoppingCart size={20} className="text-[#00d9ff]" />
                <h2 className="font-bold text-white font-['Rajdhani'] text-xl">Корзина</h2>
                {items.length > 0 && (
                  <span className="px-2 py-0.5 bg-[#00d9ff]/20 text-[#00d9ff] text-xs rounded-full border border-[#00d9ff]/30">
                    {items.reduce((s, i) => s + i.quantity, 0)} товаров
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button onClick={clearCart} className="p-1.5 text-[#6b6b7b] hover:text-[#ff6b6b] transition" title="Очистить корзину">
                    <FiTrash2 size={16} />
                  </button>
                )}
                <button onClick={() => setCartOpen(false)} className="p-1.5 text-[#6b6b7b] hover:text-white transition">
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <AnimatePresence>
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full py-12 text-center"
                  >
                    <div className="text-5xl mb-4">🛒</div>
                    <p className="text-[#a0a0b0] font-medium">Корзина пуста</p>
                    <p className="text-[#6b6b7b] text-sm mt-1">Добавьте скины, чтобы начать</p>
                    <Link
                      to="/marketplace"
                      onClick={() => setCartOpen(false)}
                      className="mt-6 px-5 py-2.5 bg-gradient-to-r from-[#00d9ff] to-[#00ff88] text-black font-semibold rounded-xl text-sm hover:opacity-90 transition"
                    >
                      Перейти в магазин
                    </Link>
                  </motion.div>
                ) : (
                  items.map(item => <CartItemComponent key={item.product.id} item={item} />)
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-[#3a3a5a] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#a0a0b0]">Подытог</span>
                  <span className="text-white font-medium">{formatPriceFull(getTotal())}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-lg">Итого</span>
                  <span className="text-[#00ff88] font-bold text-xl font-['Orbitron']">{formatPriceFull(getTotal())}</span>
                </div>
                <div className="space-y-2">
                  <Link
                    to="/cart"
                    onClick={() => setCartOpen(false)}
                    className="flex items-center justify-center w-full bg-gradient-to-r from-[#00d9ff] to-[#00ff88] py-3 rounded-xl text-black font-semibold hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all"
                  >
                    Оформить заказ — {formatPriceFull(getTotal())}
                  </Link>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="w-full py-2.5 rounded-xl border border-[#3a3a5a] text-[#a0a0b0] hover:text-white hover:border-[#6b6b7b] transition text-sm"
                  >
                    Продолжить покупки
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
