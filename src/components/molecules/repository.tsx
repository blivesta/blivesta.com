import * as React from 'react';
import styled from 'styled-components';
import Octicon, { Star, RepoForked } from '@primer/octicons-react';

import { vars } from '../../styles';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  width: 50%;
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
                <p>{item.description}</p>
                <p>
                  <Octicon icon={Star} />
                  {item.stargazers.totalCount}
                </p>
                <p>
                  <Octicon icon={RepoForked} /> {item.forkCount}
                </p>
              </div>
            </A>
          </Item>
        );
      })
    )}
  </Wrapper>
);

export default Repository;
