import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
    /* Box model */
    display: flex;
    flex-direction: column;
    max-width: 230px;

    /* Visual */
    background-color: ${props => props.theme.grayLight};
    border-radius: 3px;
`;

const Content = styled.div`
    /* Box model */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .6rem;
`;

const Title = styled.h3`
    /* Box model */
    margin: .6rem 0 0;

    /* Typography */
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1;
`;

const Link = styled.a`
    /* Visual */
    color: ${props => props.theme.gray};
    text-decoration: none;
`;

const Copy = styled.p`
    /* Box model */
    margin: 0 0 1.2rem;

    /* Typography */
    font-size: 1rem;
    font-weight: 300;

    /* Visual */
    color: ${props => props.theme.gray};
`;

const List = styled.ul `
    /* Box model */
    margin: 0;
    padding: 0 0 .6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 60px;
    overflow: hidden;

    /* Visual */
    list-style: none;
`;

const Item = styled.li`
    /* Box model */
    margin-bottom: .6rem;
    padding: .2rem .8rem;
    height: 20px;

    /* Visual */
    color: #ffffff;
    background-color: ${props => props.theme.yellow};
    border-radius: 3px;

    /* Typography */
    font-size: .8rem;
    font-weight: 600;

    &:not(:first-child) {
        margin-left: .4rem;
    }
`;

const Card = ({avatar_url, name, html_url, login, location, languages}) => (
  <StyledCard>
      <img src={avatar_url} alt={name} width='230' height='230' />
      <Content>
          <Title>
              <Link href={html_url}>{name ? name : login}</Link>
          </Title>
          <Copy>{location}</Copy>
          <List>
            {
              languages.map((language, index) => (<Item key={index}>{language}</Item>))
            }
        </List>
    </Content>
  </StyledCard>
);

Card.defaultProps = {
    img: '',
    name: '',
    login: '',
    html_url: '',
    location: '',
    languages: []
};

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
    html_url: PropTypes.string,
    location: PropTypes.string,
    languages: PropTypes.array
};

export default Card;
