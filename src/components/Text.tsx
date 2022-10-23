import { Slot } from '@radix-ui/react-slot'; 

import clsx from 'clsx';

/** 
 * Esse slot que vem do radix, é um cara que vai "transforamr" o nosso componente no primeiro filho dele
 * como assim? se eu chamar o meu Text em algum lugar, e passar asChild: true, ele vira a tag Slot, e eu preciso
 * renderizar um filho, então eu também passo a tag children: ( <p>tag aq</p> ) por ex, e agora o meu componente text
 * que antes era um span, agora virou um paragrafo, assim eu consigo deixar o meu componente ainda mais dinâmico
 * passando até qual tag eu quero utilizar nesse text, como por ex um text, um paragrafo um título
 *  basicamente o slot pega todas as nossas props q estamos passando, e passa para o primeiro componente que vem dentro do children
*/

export interface TextProps {
  size?: 'sm' | 'md' |'lg',
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = 'md', children, asChild = false, className }: TextProps) {
  const TagRendered = asChild ? Slot : 'span'

  return (
    <TagRendered 
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className
      )}
    >
      {children}
    </TagRendered>
  )
}