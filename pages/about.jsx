const AboutPage = () => {
  return (
    <>
      <h3>
        A Software Developer who is deeply interested in building world class
        products making huge impact on everyone.{" "}
      </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
