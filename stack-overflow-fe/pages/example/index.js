import Head from 'next/head';
import useAxios from 'axios-hooks';

export default function Example() {
    const [{ data, loading, error }] = useAxios(
        '/users?delay=1'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </main>
        </>
    );
}