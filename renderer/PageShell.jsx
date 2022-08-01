import { Button } from 'antd'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

import 'antd/dist/antd.less'

export { PageShell }

function PageShell() {
  return (
    <ConfigProvider locale={zh_CN} autoInsertSpaceInButton={false}>
      <Button>antd</Button>
    </ConfigProvider>
  )
}
