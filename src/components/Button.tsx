import { Slot } from '@radix-ui/react-slot'; 

import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ children, asChild = false, className, ...props }: ButtonProps) {
  const TagRendered = asChild ? Slot : 'button'

  return (
    <TagRendered 
      className={clsx(
        'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        className
        )}
      {...props}
    >
      {children}
    </TagRendered>
  )
}