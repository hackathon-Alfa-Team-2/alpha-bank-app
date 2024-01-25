/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
  ReactHTML,
  ComponentType,
  memo,
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TDropdownContentProps, TDropdownProps } from './Dropdown.type'
import { DropdownContext } from './Dropdown.context'

/**
 * Компонент Dropdown предназначен для создания выпадающего меню.
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
 *
 * @paramprops - Пропсы для компонента Dropdown.
 * @param children - Дочерние элементы Dropdown.
 * @param className - Дополнительные классы для стилизации компонента.
 * @param style - Инлайн стили для компонента.
 * @param  wrapperTag - Тип HTML-тега для обертки, по умолчанию 'div'.
 */
const Dropdown = ({
  children,
  className,
  style,
  wrapperTag: WrapperTag = 'div',
  ...props
}: TDropdownProps<keyof ReactHTML | ComponentType<any>>) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const ref = useRef<HTMLDivElement>(null)

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
      <WrapperTag ref={ref} className={className} style={style} {...props}>
        {children}
      </WrapperTag>
    </DropdownContext.Provider>
  )
}

/**
 * Компонент Trigger предназначен для управления состоянием открытия/закрытия дропдауна.
 *
 * @param props - Пропсы для компонента Trigger.
 * @param children - Дочерние элементы Trigger.
 * @param className - Дополнительные классы для стилизации компонента.
 * @param style - Инлайн стили для компонента.
 * @param wrapperTag - Тип HTML-тега для обертки, по умолчанию 'div'.
 */
const Trigger = memo(
  <T extends keyof ReactHTML | ComponentType<any>>({
    children,
    className,
    style,
    wrapperTag: WrapperTag = 'div',
    ...props
  }: TDropdownProps<T>) => {
    const context = useContext(DropdownContext)
    if (!context) {
      throw new Error('Dropdown.Trigger должен использоваться внутри Dropdown')
    }
    const { toggle } = context

    const handleClick = useCallback(() => {
      toggle()
    }, [toggle])

    return (
      <WrapperTag
        onClick={handleClick}
        className={className}
        style={style}
        {...props}
      >
        {children}
      </WrapperTag>
    )
  },
)

/**
 * Компонент Content для отображения содержимого дропдауна.
 */
const Content = memo(
  ({ children, className, style }: TDropdownContentProps) => {
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
  },
)

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
