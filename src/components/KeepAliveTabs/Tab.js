import { useHistory, useLocation } from 'umi'
import { useAliveController } from 'react-activation'
import { CloseCircleOutlined } from '@ant-design/icons'

import styles from './index.less'

export default function Tab({ node }) {
  const history = useHistory()
  const location = useLocation()
  const { getCachingNodes, dropScope } = useAliveController()
  const cachingNodes = getCachingNodes()
  const closable = cachingNodes.length > 1

  function dropTab(e) {
    e.stopPropagation()
    const currentName = node.name

    if (location.pathname === node.name) {
      dropScope(currentName)
      // 前往排除当前 node 后的最后一个 tab
      history.push(
        cachingNodes.filter((node) => node.name !== currentName).pop().name
      )
    } else {
      dropScope(currentName)
    }
  }

  return (
    <li
      className={location.pathname === node.name ? styles['active'] : ''}
      onClick={() => {
        history.push(node.name)
      }}
    >
      {node.name}
      {closable && (
        <CloseCircleOutlined
          className={styles['close-btn']}
          onClick={dropTab}
        />
      )}
    </li>
  )
}
