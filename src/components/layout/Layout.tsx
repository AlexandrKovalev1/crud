import { ReactNode } from 'react'
import s from './layout.module.scss'
import { LinearProgress } from '../linearProgress'

type Props = {
  children?: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <LinearProgress />
      </header>

      <main className={s.main}>{children}</main>
    </>
  )
}
