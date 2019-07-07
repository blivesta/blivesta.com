import * as React from 'react';
import styled from 'styled-components';
import Octicon, { Star, RepoForked } from '@primer/octicons-react';

import Lists from '../atoms/lists';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 32px;

  &:nth-child(odd) {
    padding-right: 12px;
  }
  &:nth-child(even) {
    padding-left: 12px;
  }
`;

const A = styled.a`
  display: flex;
  text-decoration: none;
`;

const Number = styled.p`
  margin: 0;
  margin-right: 16px;
`;

const H3 = styled.h3`
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: capitalize;
  line-height: 1.3;
`;

const P = styled.p`
  margin-bottom: 8px;
`;

interface RepositoryProps {
  data: any;
  isLoading: boolean;
}

const Repository = ({ data, isLoading }: RepositoryProps) => (
  <Wrapper>
    {isLoading ? (
      <div>Loading ...</div>
    ) : (
      data.map((item: any, i: number) => {
        return (
          <Item key={i}>
            <A href={item.url} target="_blank" rel="noopener">
              <Number>{`0${i + 1}`}</Number>
              <div>
                <H3>{item.name}</H3>
                <P>{item.description}</P>
                <Lists isNotPipeline>
                  <li>
                    <Octicon icon={Star} />
                    {item.stargazers.totalCount}
                  </li>
                  <li>
                    <Octicon icon={RepoForked} /> {item.forkCount}
                  </li>
                </Lists>
              </div>
            </A>
          </Item>
        );
      })
    )}
  </Wrapper>
);

export default Repository;
