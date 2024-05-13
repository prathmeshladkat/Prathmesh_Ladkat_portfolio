"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { projects } from "@/data/Project";
import { SpecificProject } from "@/components/reusable component/specificProject";
import Bounded from "@/components/Bounded";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="w-full lg:max-w-[1440px] xl:mx-auto h-auto  mt-12"
        id="projects"
      >
        <h2 className="text-center underline text-3xl lg:text-5xl font-extrabold capitalize my-5 text-white py-4">
          Projects
        </h2>
        {projects.map((project) => (
          <SpecificProject
            key={project.id}
            projectTitle={project.projectTitle}
            id={project.id}
            projectDescription={project.projectDescription}
            projectSource={project.projectSource}
            projectDemo={project.projectDemo}
            projectDesktopPreview={project.projectDesktopPreview}
            projectMobilePreview={project.projectMobilePreview}
            isReverse={project.isReverse}
          />
        ))}
      </div>
    </Bounded>
  );
};

export default Projects;
