import { Props } from "@/types/types"

const Posts = async ({ children }: Props) => {

    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await data.json()

    return (
        <div>
            {posts.map((item: { title: string }) => <p key={item.title}>{item.title}</p>)}

            <div>
                {children}
            </div>
        </div>
    )
}
export default Posts
