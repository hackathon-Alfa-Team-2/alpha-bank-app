type Props = {
  position: 'up' | 'down'
}

const SortIcon = ({ position }: Props) => {
  const transform = position === 'up' ? 'rotate(180deg) scaleX(-1)' : ''

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ transform }}
    >
      <g clipPath='url(#clip0)'>
        <path
          d='M4 6H8C8.55 6 9 6.45 9 7C9 7.55 8.55 8 8 8H4C3.45 8 3 7.55 3 7C3 6.45 3.45 6 4 6ZM3 17C3 16.45 3.45 16 4 16H20C20.55 16 21 16.45 21 17C21 17.55 20.55 18 20 18H4C3.45 18 3 17.55 3 17ZM4 11H14C14.55 11 15 11.45 15 12C15 12.55 14.55 13 14 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11Z'
          fill='#2A77EF'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SortIcon
