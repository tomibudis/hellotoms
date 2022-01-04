import React, { useCallback, useState } from "react";

import { Container, Tabs, OccupationTitle, List } from "@components/index";
import { MENU, EXPERIENCE, COMPANY } from "@constants/index";

const Experience: React.FC = (): JSX.Element => {
  const [curretTab, setCurrentTab] = useState<string>(COMPANY.KW);

  const handleTab = useCallback((menu: string) => {
    setCurrentTab(menu);
  }, []);

  return (
    <Container id={MENU.EXPERIENCE} className="pt-24">
      <div className="col-span-12 flex font-sans font-semibold text-2xl mb-4 text-gray-200 items-center justify-center">
        <span className="text-lightGreen pr-2 font-mono text-lg">#2.</span>
        <h3>{`Where I've worked ⚡`}</h3>
      </div>
      <div className="col-span-12 mt-4">
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
                    end="Present"
                  />
                  <div className="mt-4">
                    <List>
                      Create awesome features and maintaining commandmc applet
                      such as recruiting pipeline, recruit associates, report
                      goals, find recruit, commandmc smart-plans etc..
                    </List>
                    <List>
                      Development under Micro Front-end architecture, also work
                      on with modern technologies and tools, write code with
                      perfomance quality, and sustainable code with unit test.
                    </List>
                    <List>
                      Communicate and collaborate with cross teams, engineers,
                      designeer, product. to handle new project or refinement
                      product.
                    </List>
                    <List>
                      Healthy culture during lifecycle development, daily
                      standup, grooming, refinement, sprint planing,
                      retrospective per bi-weekly, code review, desk check, demo
                      day and etc..
                    </List>
                    <List>
                      Work with a variety of different languages, frameworks
                      such as Javascript, Typescript, React, Nodejs, Express,
                      Nextjs, Graphql, Jest, Testing-library. and also take care
                      of implementation responsive design
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
                    end="Present"
                  />
                  <div className="mt-4">
                    <List>
                      Create beautifull design system built with react based to
                      make it consistency component cross platform at Greduasia.
                      Made with modern stack typescript, rollup (bundle),
                      testing-library, storybook, and bunch of config to get
                      consistency code such as commit, automation publish,
                      linter etc..
                    </List>
                    <List>
                      Work on a veriety applet at gredu such as Teacher,
                      Student, School Management System, Landing Page, OMS,
                      maintaining system, bugfix and, create a new stuff.
                    </List>
                    <List>
                      Worked closely with engineer manager and product manager
                      to manage develop new feature or refinement product. and
                      make it to a small piece stuff to being worked on by
                      front-end engineer.
                    </List>
                    <List>
                      Develop pattern code regarding web application for new
                      project (boilerplate) built with nextjs, config, and there
                      are snippet code for starter
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
                      Architected and Implemented the front-end for asset
                      management platform web based. built using nextjs, redux
                      and material theme
                    </List>
                    <List>
                      Delegate task and review code from other front-end dev
                    </List>
                    <List>
                      Maintanance and bug fixing the platform related complex
                      workflow system asset management
                    </List>
                    <List>
                      Shipped and develop new feature to particular client such
                      as Petronas and Sepura
                    </List>
                  </div>
                </div>
              )}
              {curretTab === COMPANY.ISITUP && (
                <div>
                  <OccupationTitle
                    title="Senior Front-end Engineer"
                    company="@asset.io"
                    start="Jan 2021"
                    end="May 2021"
                  />
                  <div className="mt-4">
                    <List>
                      Refactoring old platform from vuejs to react and redesign
                      entire platform
                    </List>
                    <List>
                      Maintained and developed new feature for basic software as
                      services particular for asset management
                    </List>
                    <List>
                      Manage task and code review on Front-end team and work
                      closely with system analyst to determine what feature will
                      shipped and develop
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
                      Collaboration report status with project manager at
                      NoLimit
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
                      page, backup and print system and etc.
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
                      Handling tons of data real-time with socket communication
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
                      (www.avoskinbeauty.com)
                    </List>
                    <List>
                      Maintained internal platform for sales activity built with
                      codeigniter
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
                      As a freelancer on the several companies such as PT Rejeki
                      Abadi Teknik, CV CMP and also work in freelance.com as web
                      developer
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
