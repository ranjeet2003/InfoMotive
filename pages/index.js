import { Container } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container className="homeContainer">
      <Head>
        <title>InfoMotive</title>
        <meta
          name="description"
          content="One stop solution for all jobs and results notification"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mainWrapper">
        <p>Welcome! Get updates to all the jobs and result notification here</p>
      </div>
    </Container>
  );
}
