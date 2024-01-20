import { useState, useContext, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import {
  TContentProps,
  TDropdownProps,
  TTriggerProps,
  TWithIsOpenProp,
} from './Dropdown.type';
import { DropdownContext } from './Dropdown.context';

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
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const ref = useRef<HTMLDivElement>(null);

  /**
   * Установка обработчика клика вне компонента для автоматического закрытия дропдауна.
   */
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  /**
   * Этот фрагмент кода отвечает за распространение состояния `isOpen` на все дочерние компоненты `Dropdown`.
   * Он перебирает всех детей (children), переданных в `Dropdown`, и добавляет к каждому из них проп `isOpen`.
   * Это позволяет дочерним компонентам знать о текущем состоянии дропдауна (открыт или закрыт) и соответственно
   * реагировать на это изменение состояния.
   *
   * @remarks
   * - `React.Children.map` используется для итерации по каждому ребенку в `children`.
   * - `React.isValidElement` проверяет, является ли элемент действительным React элементом.
   * - `React.cloneElement` создает клон элемента с добавленным новым пропом `isOpen`.
   *
   * Это нужно чтобы дочерние компоненты меняли свое поведение или стиль в зависимости от того,
   * открыт ли Dropdown или нет.
   *
   * @example
   * // В компоненте Dropdown:
   * ```jsx
   *  <Dropdown style={{ padding: '10px' }}>
   *    <Dropdown.Trigger style={{ border: '1px solid red' }}>
   *      <>
   *        <CustomComponent /> // CustomComponent получит проп isOpen
   *        <button>Open Dropdown</button>
   *      </>
   *    </Dropdown.Trigger>
   *    <Dropdown.Content style={{ border: '1px solid red' }}>
   *      <div>...Какой-то контент...</div>
   *    </Dropdown.Content>
   *  </Dropdown>
   *
   *  // В CustomComponent:
   *  const CustomComponent = () => {
   *  const context = useContext(DropdownContext);
   *  if (!context) {
   *    // Обработка случая, когда контекст не доступен
   *    throw new Error('CustomComponent должен использоваться внутри Dropdown');
   *  }
   *  const { isOpen } = context;
   *
   *  return <span>{isOpen ? 'открыт' : 'закрыт'}</span>;
   * };
   * ```
   */
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<TWithIsOpenProp>(child)) {
      return React.cloneElement(child, { isOpen });
    }
    return child;
  });

  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      <div ref={ref} className={className} style={style}>
        {childrenWithProps}
      </div>
    </DropdownContext.Provider>
  );
};

/**
 * Компонент Trigger для управления состоянием открытия/закрытия дропдауна.
 */
const Trigger = ({ children, className, style }: TTriggerProps) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown.Trigger должен использоваться внутри Dropdown');
  }
  const { toggle } = context;
  return (
    <div onClick={toggle} className={className} style={style}>
      {children}
    </div>
  );
};

/**
 * Компонент Content для отображения содержимого дропдауна.
 */
const Content = ({ children, className, style }: TContentProps) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown.Content должен использоваться внутри Dropdown');
  }
  const { isOpen } = context;

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
  );
};

// Объединение компонентов Trigger и Content с Dropdown

/**
 * Компонент Trigger для управления состоянием открытия/закрытия дропдауна.
 */
Dropdown.Trigger = Trigger;
/**
 * Компонент Content для отображения содержимого дропдауна.
 */
Dropdown.Content = Content;

export default Dropdown;
