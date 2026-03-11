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
      <div className="container text-center mx-auto max-w-7xl px-6 md:px-10">
        <div className="my-12 md:my-16">
          <h2>
            <strong className="text-4xl">Nuestro Equipo</strong>
          </h2>
          <p className="text-xl">the &ldquo;spec-ops&rdquo;</p>
        </div>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 lg:gap-16 pointer-events-none justify-items-center items-center justify-center mx-auto">
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
          <Member
            name="Luis"
            image="/team/janic-face.svg"
            socialId="Full-stack"
          />
          <Member
            name="Alejandro"
            image="/team/matei-face.svg"
            socialId="Diseño"
          />
        </section>
      </div>
    </section>
  );
};

export default AboutTeam;
