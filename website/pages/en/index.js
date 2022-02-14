/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const VideoGridBlock = props => (
  <div className="gridBlock">
    <div
      className="blockElement alignLeft imageAlignSide imageAlignRight twoByGridBlock"
    >
      <div className="blockContent" style={{minWidth: 300, marginRight: 30}}>
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
  </div>
)

const DemoSection = () => {
  return (
    <div id="demo-section-container" className="demo-section-container">
      <script
        dangerouslySetInnerHTML={{
          __html: `window.onresize = function() {
            const videoWidth = 1544;
            const htmlWidth = document.documentElement.clientWidth;
            const el = document.getElementById('imac-video');
            if (htmlWidth - videoWidth < 0) {
              el.setAttribute('width', htmlWidth);
            } else {
              el.setAttribute('width', videoWidth);
            }
          }
          window.onload = function() {
            const container = document.getElementById('demo-section-container');
            const videoEl = document.createElement('video');
            videoEl.setAttribute('autoPlay', true);
            videoEl.setAttribute('muted', true);
            videoEl.setAttribute('loop', true);
            videoEl.id = 'imac-video';
            const sourceEl = document.createElement('source');
            sourceEl.src = 'video/imac-demo-1.mp4';
            sourceEl.setAttribute('type', 'video/mp4');
            videoEl.appendChild(sourceEl);
            container.appendChild(videoEl);

            const videoWidth = 1544;
            const htmlWidth = document.documentElement.clientWidth;
            const el = document.getElementById('imac-video');
            if (htmlWidth - videoWidth < 0) {
              el.setAttribute('width', htmlWidth);
            } else {
              el.setAttribute('width', videoWidth);
            }
          }`
        }}
      />
    </div>
  )
}

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const BackgroundImage = props => (
      <div className="homeWrapperBgImg">
        <img
          src={props.img_src} alt="Home Wrapper Image"
        />
      </div>
    )

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="https://imacdemolive.ngrok.io" target="_blank">Try it now!</Button>
            <Button href="/blog/">Tutorials</Button>
            <Button href={docUrl('intro.html')}>Manual</Button>
            <Button href="http://www.intellidrives.com/">intellidrives.com</Button>
          </PromoSection>
          <BackgroundImage
            img_src="/img/imac-background-img-edited.jpg"
          />
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock
      align="center"
      contents={props.children}
      layout={props.layout}
    />
  </Container>
);

const VideoBlock = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}
  >
    <VideoGridBlock
      title={props.title}
      questions={props.questions}
      video_src={props.video_src}
    />
  </Container>
)

const WhatIsIMAC = () => (
  <div className="mainContainer" style={{padding: 0}}>
    <VideoBlock
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

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;

    return (
      <section className='content'>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <DemoSection />
        <WhatIsIMAC />
      </section>
    );
  }
}

module.exports = Index;