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
  return (
    <div className="relative flex h-[20rem] w-full flex-col 
    items-center justify-center scale-[1]">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) =>(
        <Icon key={index} src={`/src/assets/logos/${skill}.svg`}/>
        
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={0.5}>
      {skills.reverse().map((skill, index) =>(
        <Icon key={index} src={`/src/assets/logos/${skill}.svg`}/>
        
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon=({src}) => (
<img src={src} className="rounded-sm -hover:scale-100 duration-200"/>
)


export default Frameworks;
