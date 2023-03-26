import { useRouter } from "next/router";

function Post({ post }) {
    const router = useRouter();
    // we need post data corresponding post id

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h2>
                {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
        </>
    );
}

export default Post;

export async function getStaticProps(context) {
    const { params } = context; // it contains postId route parameter
    // context parameter is an object which contains a key called params
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    const data = await response.json(); // json e convert korlam ..

    if (!data.id) {
        // data object er jodi kono id nam  er property na paowa jay
        return {
            notFound: true, //notFound property true send korle next js automatic ekta 404 page generate kore dibe
        };
    }

    console.log(`Generating page for /posts/${params.postId}`);
    return {
        props: {
            post: data,
        },
    };
}

// ei function na likhle ekta error dibe ..
// postId jehetu dynamic .. next js er to kono idea e nai .. je value ta ki hoite pare ..
// so, amra next js ke ekta idea dibo arki .. kichu post id amra bole dibo .. jeno age theke she
// pre render korte pare ..
export async function getStaticPaths() {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await response.json() // list of 100 post .. now we map over it.. return an object
    /////////////////////////////////////// with params and the post id .
    // const paths = data.map(post => { /// for each post  we return an object with the key params
    //   return {
    //     params: { postId: `${post.id}` } // again an object, with the key postId
    //   }
    // })

    return {
        paths: [
            { params: { postId: "1" } }, // string hoite hobe ..
            { params: { postId: "2" } },
            { params: { postId: "3" } },
        ],
        // paths, // jodi dynamic ta follow korte chai .. tahole uporer static paths ke comment kore .. etake
        // run korte hobe
        fallback: true, // returned object er moddhe another key thakte hobe .. called .. fallback
        // false ->
        // true ->
        // 'blocking' ->
        // fallback key ta onek important .. 26, 27, 28 number video te ei ta niye kotha bola hoise ..
    };
}
/**
 * age post ke slice kore matro 3 ta post accept kortesilam .. so, amra shei 3 ta post er jonno pre render
 * kore rakhtesi ..
 * kintu eta to normal case senerio na .. normally amader kase .. onek gula post ashe .. like 100 ta ..
 * ekhon ei 100 tar jonno evabe next js ke janano to shomvob na ..
 *
 * the method to fetch all id's of post might vary depending on back-end.. if you have an API that
 * provides total count of post , you can use that to create an array of post id's.
 *
 * but for our senerio, we dont have any API ..  we use /posts API to fetch  all the 100 post along with the
 * post id's .. we can then extract ... just the post id  to create the path array .
 */
