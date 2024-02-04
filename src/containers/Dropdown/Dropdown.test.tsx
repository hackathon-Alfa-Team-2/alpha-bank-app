import { waitFor } from '@testing-library/react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Dropdown from './Dropdown'
import { useDropdownContext } from './Dropdown.hooks'

describe('Dropdown component', () => {
  // Перед запуском тестов, мокаем глобальный объект window.scrollTo
  beforeAll(() => {
    window.scrollTo = jest.fn()
  })

  // Мокаем модуль useDropdownContext, чтобы изолировать его поведение в тестах
  jest.mock('./Dropdown.hooks', () => ({
    useDropdownContext: jest.fn(),
  }))

  // Тест: проверяем, что Dropdown корректно отображает Trigger и Content
  test('отображает Dropdown с Trigger и Content', () => {
    render(
      <Dropdown>
        <Dropdown.Trigger>Открыть Dropdown</Dropdown.Trigger>
        <Dropdown.Content>Содержимое Dropdown</Dropdown.Content>
      </Dropdown>,
    )

    // Проверяем, что текст "Открыть Dropdown" отображается на странице
    expect(screen.getByText('Открыть Dropdown')).toBeInTheDocument()
    // Проверяем, что текст "Содержимое Dropdown" не отображается на странице
    expect(screen.queryByText('Содержимое Dropdown')).not.toBeInTheDocument()
  })

  // Тест: проверяем, что при клике на Trigger отображается Content
  test('отображает содержимое при клике на Trigger', () => {
    render(
      <Dropdown>
        <Dropdown.Trigger>Открыть Dropdown</Dropdown.Trigger>
        <Dropdown.Content>Содержимое Dropdown</Dropdown.Content>
      </Dropdown>,
    )

    // Имитируем клик на элементе Trigger
    fireEvent.click(screen.getByText('Открыть Dropdown'))
    // Проверяем, что текст "Содержимое Dropdown" отображается на странице
    expect(screen.getByText('Содержимое Dropdown')).toBeInTheDocument()
  })

  // Тест: проверяем, что при клике вне компонента, Content скрывается
  test('скрывает содержимое при клике вне компонента', async () => {
    render(
      <Dropdown>
        <Dropdown.Trigger>Открыть Dropdown</Dropdown.Trigger>
        <Dropdown.Content>Содержимое Dropdown</Dropdown.Content>
      </Dropdown>,
    )

    // Имитируем клик на элементе Trigger
    fireEvent.click(screen.getByText('Открыть Dropdown'))
    // Проверяем, что текст "Содержимое Dropdown" отображается на странице
    expect(screen.getByText('Содержимое Dropdown')).toBeInTheDocument()

    // Имитируем клик вне компонента (по телу документа)
    fireEvent.mouseDown(document.body)

    // Асинхронное ожидание, чтобы дать компоненту время на обновление DOM.
    await waitFor(() => {
      // Проверяем, что текст "Содержимое Dropdown" больше не отображается на странице
      expect(screen.queryByText('Содержимое Dropdown')).not.toBeInTheDocument()
    })
  })

  // Тест: проверяем, что при повторном клике на Trigger, Content скрывается
  test('скрывает содержимое при повторном клике на Trigger', () => {
    render(
      <Dropdown>
        <Dropdown.Trigger>Открыть Dropdown</Dropdown.Trigger>
        <Dropdown.Content>Содержимое Dropdown</Dropdown.Content>
      </Dropdown>,
    )

    // Имитируем первый клик на элементе Trigger
    const trigger = screen.getByText('Открыть Dropdown')
    fireEvent.click(trigger)
    // Проверяем, что текст "Содержимое Dropdown" отображается на странице
    expect(screen.getByText('Содержимое Dropdown')).toBeInTheDocument()

    // Имитируем второй клик на элементе Trigger
    fireEvent.click(trigger)

    // Ожидание скрытия контента.
    waitFor(() => {
      // Проверяем, что текст "Содержимое Dropdown" больше не отображается на странице
      expect(screen.queryByText('Содержимое Dropdown')).not.toBeInTheDocument()
    })
  })

  // Тест: проверяем, что компонент корректно получает значение isOpen из контекста
  test('получает значение isOpen из контекста', () => {
    // Создаем компонент DropdownStatusIndicator, который использует useDropdownContext
    const DropdownStatusIndicator = () => {
      const { isOpen } = useDropdownContext()

      return <span>{isOpen ? 'открыт' : 'закрыт'}</span>
    }

    render(
      <Dropdown>
        <Dropdown.Trigger>
          <button>Открыть Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <DropdownStatusIndicator />
        </Dropdown.Content>
      </Dropdown>,
    )

    // Имитируем клик на элементе Trigger
    fireEvent.click(screen.getByText('Открыть Dropdown'))

    // Проверяем, что на странице отображается текст "открыт"
    const statusIndicator = screen.getByText('открыт')
    expect(statusIndicator).toBeInTheDocument()
  })
})
