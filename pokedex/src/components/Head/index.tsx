import { Helmet, HelmetProvider } from 'react-helmet-async';
import SeoTypes from '../../types/SeoTypes';
import BlogConfigService from '../../services/BlogConfigService';
import { useState, useEffect } from 'react';

interface Props {
  seo?: SeoTypes;
  statusCode?: '200' | '404';
}

function Head({ seo, statusCode = '200' }: Props) {
  const [blogName, setBlogName] = useState<string>('');

  useEffect(() => {
    async function fetchBlogName() {
      const name = await BlogConfigService.getBlogName();
      setBlogName(name);
    }

    fetchBlogName();
  }, []);

  const title = seo?.title || blogName;
  const description = seo?.description;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        {description && <meta name='description' content={description} />}
        <meta http-equiv='Status' content={statusCode} />
      </Helmet>
    </HelmetProvider>
  );
}

export default Head;
