import { getSession } from "next-auth/react";

function Blog({ data }) {
    return <h1>Blog page - {data}</h1>
}

export default Blog;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`, // when the signin is confirmed(with the query flag), it will then redirect to the callback url. env variable should be used for the callback url.
                permanent: false
            }
        }
    }
    return {
        props: {
            session, //es6
            data: session ? 'List of 100 personalized blogs' : 'List of free blogs'
        },
    }
}