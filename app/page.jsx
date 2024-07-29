import Feed from "./_components/Feed";

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center mb-sm:text-4xl">
        Discover & Share
        <br />
        <span className="orange_gradient text-center mb-sm:text-[40px]">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center mb-sm:text-base">
        Promptopia is an open source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  );
}

export default Home;
