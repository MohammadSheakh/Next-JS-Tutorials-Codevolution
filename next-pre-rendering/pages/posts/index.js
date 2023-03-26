import Link from "next/link";
/**
 * we first need the post data . we could of course make use of the useEffect hook to fetch the data but
 * that would not help pre-render a list of posts . what we need is the get static props function .
 */
function PostList({ posts }) {
    return (
        <>
            <h1>List of Posts</h1>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`}>
                            {/* // what is passHref here */}

                            <h2>
                                {post.id} {post.title}
                            </h2>
                        </Link>
                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default PostList;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // we make our API call
    const data = await response.json();

    return {
        // from the function , we must return an object which must contains a props key .
        props: {
            //posts: data.slice(0, 3), // it returns 100 post , so, lets keep it minimum .
            posts: data, // it returns all posts of API / database
        },
    };
}
