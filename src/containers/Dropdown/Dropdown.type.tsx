import { ReactNode } from 'react';

/**
 * Контекст для обмена состоянием между Dropdown и его дочерними компонентами.
 */
export type TDropdownContextType = {
  isOpen: boolean;
  toggle: () => void;
};

/**
 * Props для компонента Dropdown.
 * @param style - Инлайновые стили.
 * @param className - Класс CSS для стилизации компонента.
 */
export type TStyledComponentProps = {
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Props для компонента Dropdown.
 * @param children - Дочерние элементы компонента.
 */
export type TDropdownProps = {
  children: ReactNode;
} & TStyledComponentProps;

/**
 * Props для компонента Trigger.
 * @param children - Дочерние элементы компонента.
 */
export type TTriggerProps = {
  children: ReactNode;
} & TStyledComponentProps;

/**
 * Props для компонента Content.
 * @param children - Дочерние элементы компонента.
 */
export type TContentProps = {
  children: ReactNode;
} & TStyledComponentProps;

/**
 * Определяет тип для дочернего элемента компонента Dropdown.
 *
 * Этот тип расширяет стандартные элементы React, добавляя опциональное свойство `isOpen`.
 * `isOpen` используется для передачи информации о состоянии дропдауна (открыт или закрыт)
 * к каждому дочернему элементу. Это позволяет дочерним компонентам адаптироваться и изменять
 * свое поведение или визуальное отображение в зависимости от состояния дропдауна.
 *
 * Пример использования:
 * Допустим, у нас есть пользовательский компонент `CustomComponent`, который должен знать,
 * открыт ли Dropdown, чтобы корректно отобразить свое содержимое.
 *
 * @example
 * type CustomComponentProps = {
 *   isOpen?: boolean;
 *   // ... другие свойства ...
 * };
 *
 * const CustomComponent: React.FC<CustomComponentProps> = ({ isOpen }) => (
 *   <div>
 *     {isOpen ? 'Dropdown открыт' : 'Dropdown закрыт'}
 *     // ... другое содержимое ...
 *   </div>
 * );
 *
 * // Использование в Dropdown:
 * <Dropdown>
 *   <Dropdown.Trigger>Toggle Dropdown</Dropdown.Trigger>
 *   <Dropdown.Content>
 *     <CustomComponent />
 *   </Dropdown.Content>
 * </Dropdown>
 */
export type TWithIsOpenProp = { isOpen?: boolean };
export type TDropdownChild = React.ReactElement<TWithIsOpenProp>;
