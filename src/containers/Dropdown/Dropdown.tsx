import { useState, useContext, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TContentProps, TDropdownProps, TTriggerProps } from './Dropdown.type'
import { DropdownContext } from './Dropdown.context'

/**
 * Компонент Dropdown, предназначенный для создания выпадающего меню.
 * Поддерживает стилизацию через `style` и `className`.
 *
 * @example
 * // Пример использования Dropdown с инлайн стилями.
 * ```tsx
 * <Dropdown style={{ padding: '19px' }}>
 *   <Dropdown.Trigger style={{ border: '1px solid red' }}>
 *     <button>Dropdown</button>
 *   </Dropdown.Trigger>
 *   <Dropdown.Content style={{ border: '1px solid red' }}>
 *     <div>...Какой-то контент...</div>
 *   </Dropdown.Content>
 * </Dropdown>
 * ```
 */
const Dropdown = ({ children, className, style }: TDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const ref = useRef<HTMLDivElement>(null)

  /**
   * Установка обработчика клика вне компонента для автоматического закрытия дропдауна.
   */
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

/**
 * Компонент Trigger для управления состоянием открытия/закрытия дропдауна.
 */
const Trigger = ({ children, className, style }: TTriggerProps) => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('Dropdown.Trigger должен использоваться внутри Dropdown')
  }
  const { toggle } = context
  return (
    <div onClick={toggle} className={className} style={style}>
      {children}
    </div>
  )
}

/**
 * Компонент Content для отображения содержимого дропдауна.
 */
const Content = ({ children, className, style }: TContentProps) => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('Dropdown.Content должен использоваться внутри Dropdown')
  }
  const { isOpen } = context

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
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

// Объединение компонентов Trigger и Content с Dropdown

/**
 * Компонент Trigger для управления состоянием открытия/закрытия дропдауна.
 */
Dropdown.Trigger = Trigger
/**
 * Компонент Content для отображения содержимого дропдауна.
 */
Dropdown.Content = Content

export default Dropdown
