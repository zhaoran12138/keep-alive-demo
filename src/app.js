import { notification } from 'antd'
import KeepAliveTabs from '@/components/KeepAliveTabs'

notification.config({
  placement: 'bottomRight',
  duration: 2
})

export const layout = () => ({
  disableMobile: true,
  headerRender: () => <KeepAliveTabs />
})
