const Page = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await data.json()
    return (<div>
        this is blog
        <p>

        این فونت یکان است
        </p>
        {posts.map(item => <p>{item.title}</p>)}
    </div>)
}

export default Page
