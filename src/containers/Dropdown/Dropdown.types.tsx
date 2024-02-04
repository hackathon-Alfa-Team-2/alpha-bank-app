/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, HTMLAttributes, ComponentType, ReactHTML } from 'react'
import { IStyledComponentProps } from '../../types'

/**
 * Тип для атрибутов HTML-элемента, который может быть использован как обобщение.
 * Если переданный тип `T` является ключом `ReactHTML`, возвращает соответствующие атрибуты.
 * Если тип `T` является компонентом, возвращает атрибуты его пропсов.
 * В противном случае возвращает атрибуты HTML-элемента `T`.
 */
export type CustomHTMLAttributes<T> = T extends keyof ReactHTML
  ? React.HTMLAttributes<ReactHTML[T]>
  : T extends ComponentType<infer P>
    ? P
    : HTMLAttributes<T>

/**
 * Тип для пропсов компонента Dropdown.
 * Принимает обобщенный параметр `T`, который может быть ключом `ReactHTML` или компонентом.
 * Включает в себя общие пропсы стилизации (`IStyledComponentProps`) и атрибуты элемента (`CustomHTMLAttributes`).
 */
export type TDropdownProps<T extends keyof ReactHTML | ComponentType<any>> = {
  children: ReactNode
  wrapperTag?: T
} & IStyledComponentProps &
  CustomHTMLAttributes<T>

/**
 * Тип для пропсов компонента Content в Dropdown.
 * Включает в себя общие пропсы стилизации (`IStyledComponentProps`) и дочерние элементы.
 */
export type TDropdownContentProps = {
  children: ReactNode
} & IStyledComponentProps

export type TDropdownContextType = {
  isOpen: boolean
  toggle: () => void
}
