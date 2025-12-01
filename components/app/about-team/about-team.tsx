import Member from "components/app/about-team/member/member";

const AboutTeam = async () => {
  return (
    <section
      id="about-team"
      className="bg-white text-black text-3xl flex flex-col py-10 md:py-20"
    >
      <div className="container mx-auto px-11">
        <p className="text-xl leading-tight tracking-tight mx-auto lg:text-4xl text-center">
          Somos un equipo apasionado por el desarrollo y el aprendizaje
          constante.
        </p>
      </div>
      <div className="container text-center mx-auto max-w-4xl px-4 md:px-6">
        <div className="my-10">
          <h2>
            <strong className="text-4xl">Nuestro Equipo</strong>
          </h2>
          <p className="text-xl">the &ldquo;spec-ops&rdquo;</p>
        </div>
        <section className="grid grid-cols-2 gap-8 sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-2 lg:gap-20 pointer-events-none justify-items-center items-center justify-center mx-auto">
          <Member
            name="Jesus"
            image="/team/christoph-face.svg"
            socialId="Product Developer"
          />
          <Member
            name="Daniela"
            image="/team/viktoria-face.svg"
            socialId="Marketing"
          />
        </section>
      </div>
    </section>
  );
};

export default AboutTeam;
