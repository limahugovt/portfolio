import Header from "../components/Header";
import BlurredBackground from "../components/BlurredBackground";
import Footer from "../components/Footer";
import OpacityImage from "../components/OpacityImage";

export default function Home() {
  const githubLink = "https://github.com/limahugovt";
  return (
    <div className="w-full h-screen sm:p-[70px] p-4">
      <div className="bg-slate-900 w-full h-full rounded-lg border border-slate-700">
        <Header />
        <section className="w-full h-[calc(100%-112px)] flex justify-center items-center gap-5 2xl:gap-[143px] overflow-hidden px-6 lg:px-0">
          <BlurredBackground
            width="254px"
            height="292px"
            background="#00D5BE"
            top="180px"
            left="17px"
            className="lg:hidden"
          />
          <BlurredBackground
            width="254px"
            height="292px"
            background="#615FFF"
            bottom="180px"
            right="17px"
            className="lg:hidden"
          />
          <div className="gap-[75px] flex flex-col w-max lg:w-[541px] z-10">
            <div>
              <p className="text-lg/7 text-slate-400 ">Olá a todos. Eu sou</p>
              <div>
                <h1 className="text-5xl lg:text-6xl/[66px] text-slate-50">
                  Victor Hugo
                </h1>
                <h2 className="text-xl  lg:text-3xl/10 text-indigo-500">
                  {">"} Desenvolvedor Front-end
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-slate-400 text-lg/6 hidden lg:block">
                {"//"} complete o jogo para continuar
              </p>
              <p className="text-slate-400 text-sm lg:text-lg/6">
                {"//"} encontre meu perfil no Github:
              </p>
              <p className="text-indigo-500 text-sm lg:text-lg/6">
                const <span className="text-teal-400">githubLink</span>{" "}
                <span className="text-slate-50">=</span>{" "}
                <a href={githubLink} target="_blank" className="text-rose-300">
                  “https://github.com/limahugovt”
                </a>
              </p>
            </div>
          </div>
          <div className="flex-col gap-4 relative hidden lg:flex">
            <BlurredBackground
              width="454px"
              height="492px"
              background="#00D5BE"
              top="0px"
              left="-100px"
            />
            {[20, 90, 100, 90, 20].map((opacity, index) => (
              <OpacityImage
                key={index}
                src="code-snippet 2.svg"
                alt=""
                width={560}
                height={182}
                opacity={opacity}
                className={opacity === 100 ? "z-10" : ""}
              />
            ))}
            <BlurredBackground
              width="454px"
              height="492px"
              background="#615FFF"
              bottom="0px"
              right="-100px"
            />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
