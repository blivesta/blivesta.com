import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  flex-wrap: wrap;
  text-decoration: underline;
`;

interface TotalStarProps {
  data: any;
  isLoading: boolean;
}

const TotalStar = ({ data, isLoading }: TotalStarProps) => (
  <Wrapper>
    {!isLoading
      ? data
          .map((item: any) => {
            return item.stargazers.totalCount;
          })
          .reduce((total: number, data: number) => {
            return total + data;
          }, null)
      : '---'}
  </Wrapper>
);

export default TotalStar;
