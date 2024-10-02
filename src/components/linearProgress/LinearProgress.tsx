import s from './linearProgress.module.scss'
import { useAppSelector } from '../../services/store.ts'
import { selectAppStatus } from '../../app/appSlice.ts'

export const LinearProgress = () => {
  const status = useAppSelector(selectAppStatus)

  return <>{status === 'loading' && <progress className={s.progress}></progress>}</>
}
