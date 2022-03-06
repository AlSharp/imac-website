import React, { useEffect } from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from "@theme/Layout";

const BackgroundImage = props => (
  <div className="homeWrapperBgImg">
    <img
      src={props.img_src} alt="Home Wrapper Image"
    />
  </div>
)

const ProjectTitle = ({ siteConfig }) => (
  <div className="project-title-wrapper">
    <h1 className="project-title">
      {siteConfig.title}
    </h1>
    <h2 className="project-title-sub">
      {siteConfig.tagline}
    </h2>
  </div>
);

const PromoSection = props => (
  <div className="promo-section">
    {props.children}
  </div>
);

const Button = props => (
  <a
    className="button button--lg button--outline button--primary margin--sm"
    href={props.href}
    target={props.target}
  >
    {props.children}
  </a>
);

class HomeTopContainer extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    return (
      <div className="home-top-container">
        <ProjectTitle siteConfig={siteConfig} />
        <PromoSection>
          <Button href="https://imacdemolive.ngrok.io" target="_blank">Try it now!</Button>
          <Button href="/blog/">Tutorials</Button>
          <Button href={docUrl('docs/intro')}>Manual</Button>
          <Button href="http://www.intellidrives.com/">intellidrives.com</Button>
        </PromoSection>
        <BackgroundImage
          img_src="/img/imac-background-img-edited.jpg"
        />
      </div>
    );
  }
}

const DemoSection = () => {

  useEffect(() => {

    const videoEl = document.getElementById('imac-video');
    const sourceEl = document.createElement('source');
    sourceEl.src = 'video/imac-demo-1.mp4';
    sourceEl.setAttribute('type', 'video/mp4');

    const videoWidth = 1544;
    const htmlWidth = document.documentElement.clientWidth;
    if (htmlWidth - videoWidth < 0) {
      videoEl.setAttribute('width', htmlWidth);
    } else {
      videoEl.setAttribute('width', videoWidth);
    }

    videoEl.appendChild(sourceEl);

    const onResize = () => {
      const videoWidth = 1544;
      const htmlWidth = document.documentElement.clientWidth;
      const el = document.getElementById('imac-video');
      if (htmlWidth - videoWidth < 0) {
        el.setAttribute('width', htmlWidth);
      } else {
        el.setAttribute('width', videoWidth);
      }
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [])

  return (
    <div id="demo-section-container" className="demo-section-container">
      <video id="imac-video" autoPlay muted loop />
    </div>
  )
}

const YoutubeVideoSection = props => (
  <div className="youtube-video-section">
    <div className="youtube-video-section-content">
      {
        [
          props.title ?
          <h2 key="h2">
            <div>
              <span>
                <p>
                  {props.title}
                </p>
              </span>
            </div>
          </h2> :
          null,
          <div key="div">
            <span>
              {
                props.questions.map((question, index) =>
                  <p
                    key={index}
                    style={{marginBottom: 20}}
                  >
                    {question}
                  </p>  
                )
              }
            </span>
          </div>
        ]
      }
    </div>
    <div
      className="youtube-wrapper"
    >
      <iframe
        src={props.video_src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)

const WhatIsIMAC = () => (
  <div className="why-imac-container">
    <YoutubeVideoSection
      id="learnMore"
      background="light"
      video_src="https://www.youtube.com/embed/cnlVry2UYLw"
      title="Why IMAC?"
      questions={[
        "Have you been tasked to create motion control and automation project?",
        "Concerned about complexity of the project?",
        "Lacking motion control expertise, software knowledge or programming resourses?",
        "Consider IMAC!"
      ]}
    />
  </div>
);

const HomePage = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
        <HomeTopContainer siteConfig={siteConfig} />
        <DemoSection />
        <WhatIsIMAC />
    </Layout>
  )
}

export default HomePage;
      