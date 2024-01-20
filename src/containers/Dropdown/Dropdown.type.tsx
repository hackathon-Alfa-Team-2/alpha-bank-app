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
