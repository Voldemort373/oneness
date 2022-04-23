import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {},
        redirect: {
            permanent: true,
            destination: "/app/posts"
        }
    }
}

const AppPage: NextPage = () => {
    return (
        <></>
    )
}

export default AppPage;