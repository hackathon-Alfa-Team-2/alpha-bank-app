import { useState, useContext, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TooltipContext } from './Tooltip.context'
import { TTooltipProps } from './Tooltip.type'

/**
 * Компонент Tooltip, предназначенный для создания всплывающих подсказок.
 * Поддерживает стилизацию через `style` и `className`.
 *
 * Пример использования:
 * ```tsx
 * <Tooltip style={{ display: 'inline-block' }}>
 *   <button>Наведите на меня</button>
 *   <Tooltip.Text style={{ backgroundColor: 'lightblue', padding: '4px' }}>
 *     Всплывающая подсказка
 *   </Tooltip.Text>
 * </Tooltip>
 * ```
 *
 * @param children - Дочерние элементы, включая активирующий элемент и текст подсказки.
 * @param className - CSS класс для настройки стилей внешнего контейнера.
 * @param style - Инлайновые стили для внешнего контейнера.
 */
const Tooltip = ({ children, className, style }: TTooltipProps) => {
  const [show, setShow] = useState(false)
  const [hovering, setHovering] = useState(false)

  /**
   * Управление отображением всплывающей подсказки с задержкой.
   */
  useEffect(() => {
    let timeoutId: number
    if (hovering) {
      timeoutId = window.setTimeout(() => setShow(true), 500)
    } else {
      setShow(false)
    }

    return () => window.clearTimeout(timeoutId)
  }, [hovering])

  return (
    <TooltipContext.Provider value={{ show, setShow }}>
      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className={className}
        style={style}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  )
}

/**
 * Подкомпонент Tooltip.Text, предназначенный для отображения текста всплывающей подсказки.
 *
 * Пример использования:
 * ```tsx
 * <Tooltip.Text style={{ backgroundColor: 'lightblue', padding: '4px' }}>
 *   Всплывающая подсказка
 * </Tooltip.Text>
 * ```
 *
 * @param children - Текст или содержимое всплывающей подсказки.
 * @param className - CSS класс для настройки стилей текста подсказки.
 * @param style - Инлайновые стили для текста подсказки.
 */
const TooltipText = ({ children, className, style }: TTooltipProps) => {
  const context = useContext(TooltipContext)
  if (!context) {
    throw new Error('TooltipText must be used within a Tooltip')
  }

  const { show } = context

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={className}
          style={style}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * Подкомпонент Tooltip.Text, предназначенный для отображения текста всплывающей подсказки.
 */
Tooltip.Text = TooltipText

export default Tooltip
