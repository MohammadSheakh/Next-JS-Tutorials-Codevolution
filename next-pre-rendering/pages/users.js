import User from "../components/user";

function UserList({ users }) {
    return (
        <>
            <h1>List of users</h1>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        {/* <p> {user.name}</p> */}
                        <User user={user} />
                    </div>
                );
            })}
        </>
    );
}

export default UserList;

export async function getStaticProps() {
    /**
     * when you export a page component you can also export async function called get static props.
     * if you do export that function it will run at build time in production and inside the function
     * you can fetch external data and send data as props to the
     */
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // make an api request
    const data = await response.json(); // json e convert korlam
    //   console.log(data)

    return {
        // ekta object return korte hoy..
        props: {
            // props property er moddheo ekta object thakbe ..
            users: data,
        },
    };
}
