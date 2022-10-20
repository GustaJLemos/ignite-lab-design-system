import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
  // estamos falando q o texto pro padrãp desse componente vai ser esse carinha ai
  args: { 
    children: 'Lorem Ipsum.' 
  },
  // aq vamos "configurar" as nossas props para que lá no storybook o usuário consiga ver quais são as props que aquele componente espera
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>
        Testando
      </p>
    )
  },
  // argTypes: {
  //   children: {
  //     table: {
  //       disable: true
  //     }
  //   }
  // }
}