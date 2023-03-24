/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  titleTemplate: '%s | Hans Kim',
  description: 'A big player in the comedy and social networking scene',
  canonical: 'https://djhanskim.com',
  openGraph: {
    url: 'https://djhanskim.com',
    title: 'Hans Kim',
    description: 'A big player in the comedy and social networking scene',
    images: [
      {
        url: 'https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
        alt: 'djhanskim.com og-image',
      },
    ],
    site_name: 'djhanskim.com',
  },
  twitter: {
    handle: '@djhanskim',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
