import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { useCartStore } from '../../store/useCartStore';
import { CartItemComponent } from '../../components/cart/CartItem/CartItem';
import { formatPriceFull } from '../../utils/formatPrice';
import toast from 'react-hot-toast';

export function Cart() {
  const { items, clearCart, getTotal } = useCartStore();
  const total = getTotal();

  function handleCheckout() {
    toast.success('Переходим к оформлению...', {
      style: { background: '#1a1a2e', color: '#fff', border: '1px solid #3a3a5a' },
      icon: '🛒',
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-[90px] pb-16 px-4 laptop:px-8"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-['Rajdhani'] text-white">Корзина</h1>
            <p className="text-[#6b6b7b] mt-1">{items.length} {items.length === 1 ? 'товар' : items.length < 5 ? 'товара' : 'товаров'}</p>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="flex items-center gap-2 text-[#ff6b6b] hover:text-white transition text-sm"
            >
              <FiTrash2 size={14} /> Очистить корзину
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="text-7xl mb-6">🛒</div>
            <h2 className="text-2xl font-bold text-white mb-2">Корзина пуста</h2>
            <p className="text-[#6b6b7b] mb-8">Просматривайте магазин, чтобы найти свой следующий скин</p>
            <Link
              to="/marketplace"
              className="flex items-center gap-2 bg-gradient-to-r from-[#00d9ff] to-[#00ff88] px-8 py-3 rounded-xl text-black font-bold hover:shadow-[0_0_25px_rgba(0,217,255,0.4)] transition-all"
            >
              <FiShoppingCart size={18} /> Перейти в магазин
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 laptop:grid-cols-[1fr_340px] gap-6">
            {/* Items */}
            <div className="space-y-3">
              <AnimatePresence>
                {items.map(item => <CartItemComponent key={item.product.id} item={item} />)}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="h-fit sticky top-[90px]">
              <div className="bg-[#1a1a2e] rounded-2xl border border-[#3a3a5a] p-6 space-y-4">
                <h2 className="font-bold text-white font-['Rajdhani'] text-xl">Итог заказа</h2>

                <div className="space-y-2">
                  {items.map(item => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span className="text-[#a0a0b0] truncate max-w-[180px]">
                        {item.product.weapon} | {item.product.name}
                      </span>
                      <span className="text-white font-medium">{formatPriceFull(item.product.price)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#3a3a5a] pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#a0a0b0]">Подытог</span>
                    <span className="text-white">{formatPriceFull(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#a0a0b0]">Комиссия (0%)</span>
                    <span className="text-[#00ff88]">Бесплатно</span>
                  </div>
                </div>

                <div className="border-t border-[#3a3a5a] pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white text-lg">Итого</span>
                    <span className="text-[#00ff88] font-bold text-2xl font-['Orbitron']">{formatPriceFull(total)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-gradient-to-r from-[#00d9ff] to-[#00ff88] rounded-xl text-black font-bold text-lg hover:shadow-[0_0_25px_rgba(0,217,255,0.4)] transition-all"
                >
                  Оформить через Steam
                </button>

                <div className="flex flex-col gap-2 pt-2">
                  {[
                    { icon: '🔒', text: 'Защита Steam Trade' },
                    { icon: '⚡', text: 'Мгновенная доставка' },
                    { icon: '💳', text: 'Безопасная оплата' },
                  ].map(item => (
                    <div key={item.text} className="flex items-center gap-2 text-xs text-[#6b6b7b]">
                      <span>{item.icon}</span> {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
