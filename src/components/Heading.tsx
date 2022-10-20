import { Slot } from '@radix-ui/react-slot'; 

import clsx from 'clsx';

export interface HeadingProps {
  size?: 'sm' | 'md' |'lg',
  children: React.ReactNode;
  asChild?: boolean;
}

export function Heading({ size = 'md', children, asChild = false }: HeadingProps) {
  const TagRendered = asChild ? Slot : 'h2'

  return (
    <TagRendered 
      className={clsx(
        'text-gray-100 font-bold font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        }
      )}
    >
      {children}
    </TagRendered>
  )
}