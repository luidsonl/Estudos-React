import { Helmet, HelmetProvider } from 'react-helmet-async';
import SeoTypes from '../../services/BlogConfigService/SeoTypes';
import BlogConfigService from '../../services/BlogConfigService';
import { useState, useEffect } from 'react';

interface Props {
  seo: SeoTypes;
}

function Head({ seo }: Props) {
  const [blogName, setBlogName] = useState<string>('');

  useEffect(() => {
    async function fetchBlogName() {
      const name = await BlogConfigService.getBlogName();
      setBlogName(name);
    }

    fetchBlogName();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        {seo.title ? <title>{seo.title}</title> : <title>{blogName}</title>}
        {seo.description && <meta name="description" content={seo.description} />}
      </Helmet>
    </HelmetProvider>
  );
}

export default Head;
