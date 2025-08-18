import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Accessing Your Airbnb',
    Svg: require('@site/static/img/key-svgrepo-com.svg').default,
    description: (
      <>
        Effortless Check-In: Retrieving Your Keys from a Nearby Locker
      </>
    ),
  },
  {
    title: 'Location',
    Svg: require('@site/static/img/location-pin-svgrepo-com.svg').default,
    description: (
      <>
        Finding Your Airbnb: A Step-by-Step Guide to Your New Home. Use <code>Map</code> on the top right corner.
      </>
    ),
  },
  {
    title: 'Guide',
    Svg: require('@site/static/img/wifi-svgrepo-com.svg').default,
    description: (
      <>
        Welcome Guide: Your Key to Easy Navigation and WiFi Access will be availabe as soon as you enter your Home.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
