import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          The app should be a functional web-based pokedex app that uses Next JS
          and Fast API. 2 CSVs 1 with the Pokemon data set and the other with
          the Pokemon Stats data set were shared with you when we had our Fast
          API sessions. You need to import these two files into your database
          and have your database connected using Fast API. You can refer to the
          Fast API session where we created Drums API. You need to create a
          similar thing for Pokemon where you will have 2 primary API endpoints
          one to get all Pokemon and the other to get a specific Pokemon. You
          then need to render this data in the form of UI using your Next JS
          app.
        </p>
      </div>
    </>
  );
};

export default About;
