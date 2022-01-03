import React from 'react';

import { Container, Card } from '@components/index';
import { MENU } from "@constants/index";

const AdditionalProject: React.FC = (): JSX.Element => {
  return (
    <Container id={MENU.ADDITIONAL_PROJECT}>
      <div className="col-span-12 flex font-sans font-bold text-xl mb-4 md:mb-10 text-gray-200 items-center justify-center">
        <h3>Other Noteworthy Projects</h3>
      </div>
      <div className='col-span-12 grid grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-4'>
          <Card
            title='Galaxy-Labs'
            description='UI Component created by react to simplify and easily development'
            tags={['React', 'Typescript', 'Rollup', 'Jest']}
            github="https://github.com/tomibudis/galaxy-labs"
            link="https://tomibudis.github.io/galaxy-labs/?path=/story/introduction-get-started--page"
          />
        </div>
        <div className='col-span-12 md:col-span-4'>
          <Card
            title='Boilerplate nextjs'
            description='Built boilerplate to aims starter nextjs app to building web platform at gredu-asia'
            tags={['Nextjs', 'react-query', 'unleash']}
            link="https://www.npmjs.com/package/@gredu-asia/template-next-app"
          />
        </div>
        <div className='col-span-12 md:col-span-4'>
          <Card
            title='Moflix'
            description='Mobile application built with flutter to shows list of trend movie, favorite movie and furthermore.'
            tags={['flutter', 'dart']}
            github="https://github.com/tomibudis/movie-app-flutter"
          />
        </div>
      </div>
    </Container>
  )
}

export default AdditionalProject;
