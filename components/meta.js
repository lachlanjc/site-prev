import Head from 'next/head'

const makeTitle = (title, name) =>
  title === name ? title : `${title} – ${name}`

const Meta = ({
  name = 'Lachlan Campbell', // site name
  title = '@lachlanjc', // page title
  description = 'Worldwide web design engineer in NYC, working on climate at Watershed. NYU ’25, Interactive Media Arts.',
  image = 'https://lachlanjc.com/card.jpg',
  color = '#ffaf26'
}) => (
  <Head>
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <meta key="og_url" property="og:url" content="https://lachlanjc.com/" />
    <meta key="tw_site" name="twitter:site" content="@lachlanjc" />

    <title>{makeTitle(title, name)}</title>
    <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />

    {description && [
      <meta key="desc" name="description" content={description} />,
      <meta key="og_desc" property="og:description" content={description} />,
      <meta key="tw_desc" name="twitter:description" content={description} />
    ]}

    {image && [
      <meta key="og_img" property="og:image" content={image} />,
      <meta key="tw_card" name="twitter:card" content="summary_large_image" />,
      <meta key="tw_img" name="twitter:image" content={image} />
    ]}

    <meta key="theme_color" name="theme-color" content={color} />
    <meta key="tile_color" name="msapplication-TileColor" content={color} />
  </Head>
)

export default Meta
