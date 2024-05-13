import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import clsx from "clsx";

interface specificProject {
  id: number;
  projectTitle: string;
  projectDescription: string;
  projectSource: string;
  projectDemo: string;
  projectDesktopPreview: string;
  projectMobilePreview: string;
  isReverse: boolean;
}

export const SpecificProject: React.FC<specificProject> = ({
  projectTitle,
  projectDescription,
  projectSource,
  projectDemo,
  projectDesktopPreview,
  projectMobilePreview,
  isReverse,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <div
        className={`flex h-full  flex-col-reverse overflow-hidden lg:h-[650px] ${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } my-4 items-center justify-between gap-4 px-5  py-4 shadow-md`}
      >
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 76 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.5, delay: 0.25 }}
          className="w-full lg:w-1/2"
        >
          <h3
            className={`my-2 text-[32px] font-bold lg:text-[45px] ${isReverse ? "ml-10" : ""}`}
          >
            {projectTitle}
          </h3>
          <p
            className={`my-4 w-[90%] py-4 text-lg text-gray-600  lg:text-xl ${isReverse ? "ml-10" : ""}`}
          >
            {projectDescription}
          </p>
          {/*<p className="text-gray-600 text-lg lg:text-xl py-4 my-4 ml-5 w-[90%]">
            {projectDescription}
        </p>*/}

          <div
            className={`flex items-center gap-4 py-4 ${isReverse ? "ml-10" : ""}`}
          >
            <Link href={projectDemo} target="_blank">
              <button className="rounded-lg bg-yellow-300 px-10 py-4 text-lg text-black shadow-md sm:w-[180px]">
                Demo
              </button>
            </Link>
            <Link href={projectSource} target="_blank">
              <button className="rounded-lg bg-yellow-300 px-10 py-4 text-lg text-black shadow-md sm:w-[180px]">
                Source
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 my-4 w-full py-4 lg:w-1/2"
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 76 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src={projectDesktopPreview}
            height={600}
            width={600}
            alt="project-1"
            className="h-full w-full"
          />

          <Image
            src={projectMobilePreview}
            height={200}
            width={100}
            alt="project-1"
            className="absolute  bottom-0 "
          />
        </motion.div>
      </div>
    </div>
  );
};
