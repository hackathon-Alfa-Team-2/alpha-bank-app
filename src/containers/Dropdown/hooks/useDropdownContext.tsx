import { useContext } from 'react'
import { DropdownContext } from '../Dropdown.context'

/**
 * Хук для доступа к контексту Dropdown.
 *
 * Этот хук предназначен для использования внутри компонентов, которые находятся в дереве компонента `Dropdown`.
 * Он предоставляет доступ к контексту `Dropdown`, который включает в себя состояние открытия/закрытия дропдауна и функцию для его переключения.
 *
 * @throws {Error} Если хук используется вне контекста `Dropdown`, выбрасывается ошибка.
 *
 * @example
 * // Пример компонента, который использует useDropdownContext для отображения текущего состояния дропдауна:
 * ```jsx
 * import React from 'react';
 * import { useDropdownContext, Dropdown } from './path-to-dropdown-components';
 *
 * const DropdownStatusIndicator = () => {
 *   const { isOpen } = useDropdownContext();
 *
 *   return <div>{isOpen ? 'открыт' : 'закрыт'}</div>;
 * };
 *
 * // Использование DropdownStatusIndicator внутри Dropdown:
 *
 * <Dropdown>
 *   <Dropdown.Trigger>Toggle Dropdown</Dropdown.Trigger>
 *   <Dropdown.Content>
 *     <DropdownStatusIndicator />
 *     // ... другие дочерние компоненты ...
 *   </Dropdown.Content>
 * </Dropdown>
 * ```
 *
 * // В этом примере DropdownStatusIndicator будет отображать текст 'открыт', когда дропдаун открыт, и 'закрыт', когда закрыт.
 */
export const useDropdownContext = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('useDropdownContext должен использоваться внутри Dropdown')
  }
  return context
}
