import { OrbitingCircles } from "./orbitingCircles";

export function Frameworks() {
    const skills = [
        "html5", 
        "css3",
        "javascript",
        "php",
        "mysql",
        "bootstrap",
        "react",
        "tailwindcss",
        "vscode",
        "arduino",
        "framer",
        "figma"
    ];

      const logos = import.meta.glob('../assets/logos/*.svg', { eager: true });

    return (
      <div className="relative flex h-[20rem] w-full flex-col items-center justify-center scale-[1]">
        <OrbitingCircles iconSize={40}>
          {skills.map((skill, index) => {
            const logo = logos[`../assets/logos/${skill}.svg`];
            return <Icon key={index} src={logo?.default} />;
          })}
        </OrbitingCircles>

        <OrbitingCircles iconSize={30} radius={100} reverse speed={0.5}>
          {skills
            .slice()
            .reverse()
            .map((skill, index) => {
              const logo = logos[`../assets/logos/${skill}.svg`];
              return <Icon key={index} src={logo?.default} />;
            })}
        </OrbitingCircles>
      </div>
    );

    }

const Icon=({src}) => (
<img src={src} className="rounded-sm -hover:scale-100 duration-200"/>
)


export default Frameworks;
