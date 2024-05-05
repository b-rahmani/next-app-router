import { Props } from "@/types/types"
import Posts from "./Posts"
import Views from "./Views"

const Page = async ({ children }: Props) => {

    return (
        <div>
            this is blog
            <div>

                این فونت یکان است
                <Posts>
                    <Views />
                </Posts>
            </div>
        </div>
    )
}

export default Page
