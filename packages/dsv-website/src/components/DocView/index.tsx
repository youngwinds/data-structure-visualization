import { useEffect, useState } from 'react';
import { getLocale } from 'umi';
import { useBoolean } from 'ahooks';
import { Skeleton } from 'antd';

const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
});

interface IDocView {
  path: string;
}

export function DocView({ path }: IDocView) {
  const [isLoading, { setFalse, setTrue }] = useBoolean();
  const [content, setContent] = useState('');
  useEffect(() => {
    setTrue();
    fetch(
      `${
        location.origin
      }/data-structure-visualization${path}/doc.${getLocale()}.md`,
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        setContent(data);
        setFalse();
      })
      .catch(function (e) {
        console.log(e);
      });
  }, [path]);

  return (
    <Skeleton active loading={isLoading}>
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }}></div>
    </Skeleton>
  );
}
