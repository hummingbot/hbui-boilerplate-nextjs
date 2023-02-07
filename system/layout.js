import tw from 'twin.macro'

import '@hummingbot/hbui/assets/fonts/inter/inter.css'
import '@hummingbot/hbui/assets/fonts/satoshi/satoshi.css'
import '@hummingbot/hbui/assets/fonts/sfmono/sfmono.css'

const DefaultLayout = ({ children }) => (
  <div tw='bg-body' >
    {children}
  </div>
)

export default DefaultLayout
