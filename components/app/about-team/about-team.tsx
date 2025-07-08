import Member from "components/app/about-team/member/member";
import ChristophFace from "public/team/christoph-face.svg";
import JanicFace from "public/team/janic-face.svg";
import MateiFace from "public/team/matei-face.svg";
import ViktoriaFace from "public/team/viktoria-face.svg";

const AboutTeam = async () => {
  return (
    <section className="bg-white text-black text-3xl flex flex-col py-10 md:py-20">
      <div className="container mx-auto px-11">
        <p className="text-3xl leading-tight tracking-tight mx-auto lg:text-4xl">
          <strong>Nos dedicamos a crear aplicaciones web.</strong>
          Somos un equipo apasionado por el desarrollo y el aprendizaje
          constante.
        </p>
      </div>
      <div className="container text-center mx-auto">
        <div className="my-10">
          <h2>
            <strong className="text-4xl">Nuestro Equipo</strong>
          </h2>
          <p className="text-xl">the &ldquo;spec-ops&rdquo;</p>
        </div>
        <section className="grid grid-cols-2 gap-8 sm:grid-cols-12 md:grid-cols-4 lg:grid-cols-4 lg:gap-20">
          <Member name="Jesus" image={ChristophFace} socialId="Full Stack" />
          <Member name="Alejandro" image={JanicFace} socialId="Full Stack" />
          <Member name="Daniela" image={ViktoriaFace} socialId="Marketing" />
          <Member name="Francisco" image={MateiFace} socialId="Frontend" />
        </section>
      </div>
    </section>
  );
};

export default AboutTeam;
