/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Manual</h5>
            <a href={this.docUrl('intro.html', this.props.language)}>
              Introduction
            </a>
            <a href={this.docUrl('get_started.html', this.props.language)}>
              Get Started
            </a>
            <a href={this.docUrl('guideuserblock.html', this.props.language)}>
              Guides
            </a>
            <a href={this.docUrl('tutorial_1.html', this.props.language)}>
              Tutorial videos
            </a>
          </div>
        </section>

        <a
          href="https://www.intellidrives.com"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/favicon.png`}
            alt="IMAC Controller"
            width="64"
            height="64"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
