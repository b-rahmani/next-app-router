import { Props } from "@/types/types"

const Layout = ({ children }:Props) => {

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <div>
        this is a layout for blog page
      </div>
      <div>
        {children}
      </div>

    </div>
  )
}
export default Layout
