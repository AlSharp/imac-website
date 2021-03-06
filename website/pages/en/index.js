/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
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

    const YoutubeVideo = props => (
      <div className="youtube-video">
        <iframe width="560px" height="315px" src={props.video_src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
          {/* <YoutubeVideo
            video_src="https://www.youtube.com/embed/cnlVry2UYLw"
          /> */}
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

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

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: 'Talk about trying this out',
            image: `${baseUrl}img/favicon.png`,
            imageAlign: 'left',
            title: 'Try it Out',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/favicon.png`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const WhatIsIMAC = () => (
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
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/favicon.png`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/favicon.png`,
            imageAlign: 'top',
            title: 'Feature Two',
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer" style={{padding: 0}}>
          {/* <Features /> */}
          <WhatIsIMAC />
          {/* <TryOut />
          <Description /> */}
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;