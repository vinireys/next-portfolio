import { Project } from "@/src/types/Home";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectProps) => {
  return(
    <article>
      <h2>Projetos Recentes</h2>

      <ul>
        {projects.map(({slug, name, image}, index) => (
          <Link href={`/projects/${slug}`} key={name + index}>
            <li>
              <Image src={image.url} alt={image.alt} width={300} height={300} className=""/>
              <span>{name}</span>
              <div>
                <span></span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
}; 
