import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

//Nav Styles - Start
const Nav = styled.nav`
grid-column: 1 / -1;
grid-row: 2 / 3;
justify-self: end;
align-self: center;

@media (min-width: ${props => props.theme.screen.tablet}) {
grid-column: 2 / 3;
grid-row: 1 / 2;
}
`;

const AnchorList = styled(Scrollspy)`
display: none;
list-style: none;
margin: 0;

@media (min-width: ${props => props.theme.screen.tablet}) {
display: flex;
flex-direction: row;
}

${({ mobileMenuOpen }) =>
  mobileMenuOpen &&
  `
    margin-right: 1rem;
    display: flex;
    flex-direction: column;

    > ${AnchorListItem} {
      margin: 0;
      margin-top: 1rem;
    }
  `};
`;

const AnchorListItem = styled.li`
margin: 0 0.75em;
`;

const ALink = styled(AnchorLink)`
color: ${props => props.theme.color.textBlack};
padding: 1rem 0.5rem;
text-decoration: none;

@media (min-width: ${props => props.theme.screen.tablet}) {
font-size: 90%;
}

@media (min-width: ${props => props.theme.screen.laptop}) {
font-size: 100%;
}
`
//Nav Styles - End

const siteNav = (props) => {

  return (
    <StaticQuery
      query={graphql`
      query {
        site {
          siteMetadata {
            anchorLinks {
              name
              link
            }
          }
        }
      }
      `}
      render={data => (
        <Nav>
          <AnchorList items={data.site.siteMetadata.anchorLinks.map(spy => {return spy.link.replace(/#/g,"")})} mobileMenuOpen={props.open} offset={80}>
            {data.site.siteMetadata.anchorLinks.map(link => (
            <AnchorListItem key={link.name}>
              <ALink href={link.link} onClick={props.action} offset='80'>
                {link.name}
              </ALink>
            </AnchorListItem>
            ))}
          </AnchorList>
      </Nav>
    )}
    />
    );
  }

export default siteNav;
