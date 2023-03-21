import Link from "next/link";
import { useRouter } from "next/router";

// scenario -1
function Home() {
    const router = useRouter();

    const handleClick = () => {
        console.log("Placing your order");
        router.push("/product"); // programmatically navigate
        // router.replace ("/product");
    };
    return (
        <>
            <h1>Welcome Home</h1>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/product">
                <a>Products</a>
            </Link>
            <button onClick={handleClick}>Place Order</button>
        </>
    );
}

export default Home;
