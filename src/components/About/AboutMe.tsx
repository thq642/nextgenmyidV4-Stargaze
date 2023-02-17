import React from 'react'
import styled from 'styled-components'

const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${props => props.theme.colors.lighter};
  ${props => props.theme.media.max.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }
`

const AboutMe: React.FC = () => {
  return (
    <Content>
      <p>
      A computer science student at 🏫 Gunadarma University. Problem solver and ☁️ Enthusiast. 
      </p>
      
      <p>
      Based in Depok, West Java, 🇮🇩 Indonesia 
      </p>

      <p>
      In my free time, I enjoy playing games such as Valorant and Forza Horizon I also watching anime, blockbuster films, and reading manga.
      </p>

      <p>
      I am always open to new opportunities and willing to work with others to achieve common goals.
      </p>
      
      <p>
      I use this website as a place to share what I
      learn and do.
      </p>

      <p>
      I am excited to see what the future holds for me in the field of computer science and technology.
      </p>
      {/* <p>
        <a
          href="../../../files/mikailthoriq-resume.pdf" or https://bucket.riqcdn.eu.org/file/riqcdn/mikailthoriq-resume.pdf
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my resume
        </a>
        &nbsp;in case you want to have a look.
      </p> */}
      <p> Sometimes I share&nbsp;
        <a
          href="https://www.instagram.com/mikail.thoriq/"
          target="_blank"
          rel="noopener noreferrer"
        >
          moments
        </a>
        &nbsp;on Instagram.
      </p>
      <p>
        You can contact me through them or sending an email to&nbsp;
        <a
          rel="noopener"
          href="mailto:ilmail@mail.com?subject=Hi%20there!"
        >
          ilmail@mail.com
        </a>
      </p>
    </Content>
  )
}

export default AboutMe
