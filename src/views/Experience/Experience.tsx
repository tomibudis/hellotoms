import React, { useCallback, useState } from "react";

import { Container, Tabs, OccupationTitle, List } from "@components/index";
import { MENU, EXPERIENCE, COMPANY } from "@constants/index";

const Experience: React.FC = (): JSX.Element => {
  const [curretTab, setCurrentTab] = useState<string>(COMPANY.KW);

  const handleTab = useCallback((menu: string) => {
    setCurrentTab(menu);
  }, []);

  return (
    <Container id={MENU.EXPERIENCE} className="pt-24 md:mb-24">
      <div
        data-aos="fade-up"
        className="col-span-12 flex font-sans font-semibold text-2xl mb-4 text-gray-200 items-center justify-center"
      >
        <span className="text-lightGreen pr-2 font-mono text-lg">#2.</span>
        <h3>{`Where I've worked ⚡`}</h3>
      </div>
      <div data-aos="fade-up" className="col-span-12 mt-4">
        <div className="mx-auto">
          <div className="w-12/12 grid grid-cols-12 font-mono">
            <Tabs
              menu={EXPERIENCE}
              currentActive={curretTab}
              onChange={handleTab}
            />
            <div className="col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-8 xl:col-span-9 mt-5 sm:mt-0 font-sans text-gray-300">
              {curretTab === COMPANY.KW && (
                <div>
                  <OccupationTitle
                    title="Frontend Engineer"
                    company="@kw.com"
                    start="Apr 2019"
                    end="Mar 2024"
                  />
                  <div className="mt-4">
                    <List>
                      Create awesome features and maintaining commandmc applet
                      such as recruiting pipeline, recruit associates, report
                      goals, find recruit, commandmc smart-plans etc..
                    </List>
                    <List>
                      Development under micro front-end architecture, also work
                      on with modern technologies and tools, write code with a
                      good performance quality, and sustainable code with unit
                      test.
                    </List>
                    <List>
                      Communicate and collaborate with cross teams either
                      engineers and designer to handle new project or refinement
                      product.
                    </List>
                    <List>
                      Proficient in fostering a robust development culture
                      throughout the software lifecycle, encompassing daily
                      standup, grooming sessions, sprint planning, bi-weekly
                      retrospectives, thorough code reviews, desk checks, and
                      successful demonstration on demo days.
                    </List>
                    <List>
                      Proficient in identifying and resolving bugs as well as
                      implementing new features within software applications.
                      Skilled in conducting thorough analysis to diagnose
                      issues, devising effective solutions, and seamlessly
                      integrating new functionalities to enhance product
                      performance and user experience.
                    </List>
                    <List>
                      Work with a variety of different languages, frameworks
                      such as Javascript, Typescript, React, Nodejs, Express,
                      Nextjs, Graphql, Jest, Testing-library. and also take care
                      of implementation responsive design.
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.VIRTUALSPIRIT && (
                <div>
                  <OccupationTitle
                    title="Sr Front-end Web Engineer"
                    company="@virtualspirit"
                    start="April 2022"
                    end="Present"
                  />
                  <div className="mt-4">
                    <List>
                      Developed a Chat Application (VirtualSpace): Designed and
                      implemented real-time messaging features, ensuring
                      seamless integration within the VirtualSpace platform.
                    </List>
                    <List>
                      Created a UI Kit for VirtualSpace: Crafted intuitive user
                      interfaces and optimized UI components for performance and
                      consistency across the platform.
                    </List>
                    <List>
                      Developed Drag-and-Drop Form Module: Designed an intuitive
                      form builder with customizable features, enhancing
                      platform usability.
                    </List>
                    <List>
                      Maintained VTR (Real-Estate Platform): Troubleshot issues,
                      implemented performance enhancements, and introduced new
                      features to meet user needs and market demands.
                    </List>
                    <List>
                      Code Reviewer: Conducted thorough code reviews, ensuring
                      quality and fostering team collaboration.
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.BRIGHTY && (
                <div>
                  <OccupationTitle
                    title="Front-end Engineer"
                    company="@brighty"
                    start="Dec 2022"
                    end="Jan 2024"
                  />
                  <div className="mt-4">
                    <List>
                      Developed a new product order module using Vue.js for
                      internal system management at Brighty.
                    </List>
                    <List>
                      Contributed to code reviews for quality assurance.
                    </List>
                    <List>
                      Optimized development mode in Vue.js, enhancing speed and
                      resolving bugs for smoother workflow.
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.GREDU && (
                <div>
                  <OccupationTitle
                    title="Lead Front-end Engineer"
                    company="@gredu.asia"
                    start="June 2021"
                    end="April 2022"
                  />
                  <div className="mt-4">
                    <List>
                      Create a beautifull design system build with react based
                      to make it consistency component cross platform at
                      Greduasia. Made with modern stack typescript, rollup
                      (bundle), testing-library, storybook, and bunch of config
                      to get consistency code such as commit, automation
                      publish, linter etc..
                    </List>
                    <List>
                      Work on a variety applet at gredu such as Teacher,
                      Student, School Management System, Landing Page, OMS,
                      maintaining system, bug fix and, create a new stuff.
                    </List>
                    <List>
                      Worked closely with engineer manager and product manager
                      to develop new feature or refinement product. and make it
                      to a small piece stuff to being worked on by front-end
                      engineer.
                    </List>
                    <List>
                      Worked closely with engineer manager and product manager
                      to develop new feature or refinement product. and make it
                      to a small piece stuff to being worked on by front-end
                      engineer.
                    </List>
                    <List>
                      Develop pattern code regarding web application for new
                      project (boilerplate) built with nextjs, config, and there
                      are snippet code for starter
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.BTPN && (
                <div>
                  <OccupationTitle
                    title="Front-end Engineer"
                    company="@btpn"
                    start="Sept 2022"
                    end="Dec 2022"
                  />
                  <div className="mt-4">
                    <List>
                      Developed a customer relationship management module for
                      internal use at BTPN.
                    </List>
                    <List>
                      Designed and implemented reusable components to streamline
                      development processes.
                    </List>
                    <List>
                      Implemented unit testing to ensure code quality and
                      reliability.
                    </List>
                    <List>
                      Contributed to code reviews, ensuring adherence to coding
                      standards and best practices.
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.ASSETDATA && (
                <div>
                  <OccupationTitle
                    title="Lead Front-end Engineer"
                    company="@asset.io"
                    start="Jan 2021"
                    end="May 2021"
                  />
                  <div className="mt-4">
                    <List>
                      Spearheaded the architectural design and implementation of
                      the front-end infrastructure for a web-based asset
                      management platform.
                    </List>
                    <List>
                      Leveraged Next.js, Redux, and the Metronic theme to
                      develop a robust and scalable solution.
                    </List>
                    <List>
                      Oversaw task delegation and conducted comprehensive code
                      reviews for fellow front-end developers.
                    </List>
                    <List>
                      Led maintenance efforts and resolved complex workflow
                      system and asset management-related issues.
                    </List>
                    <List>
                      Delivered tailored new features to specific clients such
                      as Petronas and Sepura, ensuring their unique needs were
                      met.
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.ISITUP && (
                <div>
                  <OccupationTitle
                    title="Sr Front-end Engineer"
                    company="@asset.io"
                    start="Jan 2021"
                    end="May 2021"
                  />
                  <div className="mt-4">
                    <List>
                      Refactored an outdated platform from Vue.js to React,
                      initiating a complete redesign of the entire system.
                    </List>
                    <List>
                      Maintained and developed new features for essential
                      Software-as-a-Service solutions, specifically designed for
                      asset management.
                    </List>
                    <List>
                      Managed task assignments and conducted rigorous code
                      reviews within the front-end team.
                    </List>
                    <List>
                      Collaborated closely with system analysts to prioritize
                      features for development and ensure alignment with project
                      objectives.
                    </List>
                    <List>
                      Contributed to code reviews, ensuring adherence to coding
                      standards and best practices.
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.NOLIMIT && (
                <div>
                  <OccupationTitle
                    title="Front-end Engineer"
                    company="@nolimit.id"
                    start="Aug 2019"
                    end="Dec 2019"
                  />
                  <div className="mt-4">
                    <List>
                      Built and shipped the platform to monitoring sales used
                      React, Graphql for client Enesis Group enesis.com.
                      Collaboration for daily report with project manager at
                      NoLimit.
                    </List>
                    <List>
                      Conducted bug fixes and enhancements for ongoing platform
                      maintenance.
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.BACKUP_AND_PRINT && (
                <div>
                  <OccupationTitle
                    title="Front-end Developer"
                    company="@bapr.id"
                    start="Feb 2018"
                    end="June 2018"
                  />
                  <div className="mt-4">
                    <List>
                      Developed admin page to manage all of office operations.
                      the features inside are interactive dashboard, landing
                      Engineered an administrative page to streamline office
                      operations.
                    </List>
                    <List>
                      Designed and implemented a captivating landing page.
                    </List>
                    <List>
                      Integrated backup and print systems with a bare server for
                      enhanced functionality and reliability., backup and print
                      system and etc.
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.REKENINGKU && (
                <div>
                  <OccupationTitle
                    title="Front-end Developer"
                    company="@rekeningku.com"
                    start="Feb 2018"
                    end="June 2018"
                  />
                  <div className="mt-4">
                    <List>
                      Developed and revamp rekeningku platform with reactjs.
                      Handling tons of data real-time with socket communication.
                    </List>
                    <List>
                      Resolved bugs and improved platform stability for seamless
                      user experience.
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.AVOSKIN && (
                <div>
                  <OccupationTitle
                    title="Software Engineer Co-op"
                    company="@avoskinbeauty.com"
                    start="Aug 2017"
                    end="June 2018"
                  />
                  <div className="mt-4">
                    <List>
                      Developed and revamp sales platform web used codeigniter
                      (www.avoskinbeauty.com).
                    </List>
                    <List>
                      Maintained internal platform for sales activity built with
                      codeigniter.
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.FREELANCER && (
                <div>
                  <OccupationTitle
                    title="Web Developer"
                    start="2017"
                    end="Dec 2017"
                  />
                  <div className="mt-4">
                    <List>
                      As a freelancer in the several companies such as PT Rejeki
                      Abadi Teknik, CV CMP and also work through freelance.com
                      as web developer
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.PT_UNITED_TECHNOLOGY && (
                <div>
                  <OccupationTitle
                    title="Web Developer Intern"
                    company="@ptunitedtechnology"
                    start="Sept 2016"
                    end="Dec 2016"
                  />
                  <div className="mt-4">
                    <List>
                      Internship as IT Support managing data operation at PLTU
                      Cilacap using queries language. the software we use is a
                      special application from IBM
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.TINEP_INDONESIA && (
                <div>
                  <OccupationTitle
                    title="Web Developer"
                    company="@tinep.id"
                    start="Sept 2016"
                    end="Dec 2016"
                  />
                  <div className="mt-4">
                    <List>
                      As a web developer to built search platform rent room at
                      Yogyakarta
                    </List>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
