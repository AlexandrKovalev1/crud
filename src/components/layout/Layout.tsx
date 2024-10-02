import { ReactNode } from 'react'
import s from './layout.module.scss'

type Props = {
  children?: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <main className={s.main}>{children}</main>
    </>
  )
}
