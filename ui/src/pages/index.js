import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_Instant_information_re_c5v5.svg',
    description: (
      <>
        The goal of this project is to collect and reference information and guides about AWS Cognito,
          to make the knowledge easily accessible for everyone. We're just getting started, so expect some
          improvements and overhauls soon.
      </>
    ),
  },
  {
    title: 'Share Content',
    imageUrl: 'img/undraw_Sharing_articles_re_jnkp.svg',
    description: (
      <>
        We need your help and your knowledge! Do you know a great article that you want to
          share? <a href={'/docs/submit-content'}>Check out the docs</a> and send a pull request.
      </>
    ),
  },
  {
    title: 'Collaborate',
    imageUrl: 'img/undraw_Co_workers_re_1i6i.svg',
    description: (
      <>
        Would you like to help with this project? Please <a href={'https://twitter.com/bahrdev'}>reach out to Michael on Twitter</a>!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Find all the content about AWS Cognito in one curated place.">
      <Head defaultTitle={siteConfig.title}>
        <script src="https://seahorse.cognito.wiki/script.js" data-spa="auto" data-site="EPNTTRPR" defer/>
        <title>{siteConfig.title}</title>
      </Head>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('feed/')}>
              Start Learning
            </Link>
            <Link
                className={clsx(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted,
                )}
                style={{marginLeft: '10px'}}
                to={useBaseUrl('docs/submit-content/')}>
              Share Content
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
