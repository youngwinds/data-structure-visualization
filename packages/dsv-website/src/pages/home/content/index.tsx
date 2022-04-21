import { Link, useIntl } from 'umi';
import { Typography, Divider } from 'antd';
import { dataStructureMenu } from '@dsv-website/routes/data-structure';
import { galleryMenu } from '@dsv-website/routes/gallery';
import { apiMenu } from '@dsv-website/routes/api';

const { Title, Paragraph } = Typography;

export function Content() {
  const intl = useIntl();

  return (
    <Typography>
      <Title level={2}>
        {intl.formatMessage({
          id: 'Goal',
        })}
      </Title>
      <Paragraph>
        {intl.formatMessage({
          id: 'GoalContent',
        })}
      </Paragraph>

      <Divider></Divider>

      <Title level={2}>
        {intl.formatMessage({
          id: 'Api',
        })}
      </Title>

      <Paragraph>
        {intl.formatMessage({
          id: 'ApiContent',
        })}
      </Paragraph>

      <Paragraph>
        <ul>
          {apiMenu.map(({ key, children }) => {
            return (
              <li key={key}>
                {intl.formatMessage({ id: key })}
                <ul>
                  {children?.map((child) => {
                    return (
                      <li key={child.key}>
                        <Link to={child.path}>
                          {intl.formatMessage({
                            id: child.key,
                          })}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </Paragraph>

      <Divider></Divider>

      <Title level={2}>
        {intl.formatMessage({
          id: 'DataStructure',
        })}
      </Title>
      <Paragraph>
        {intl.formatMessage({
          id: 'DataStructureContent',
        })}
      </Paragraph>
      <Paragraph>
        <ul>
          {dataStructureMenu.map(({ key, children }) => {
            return (
              <li key={key}>
                {intl.formatMessage({ id: key })}
                <ul>
                  {children?.map((child) => {
                    return (
                      <li key={child.key}>
                        <Link to={child.path}>
                          {intl.formatMessage({
                            id: child.key,
                          })}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </Paragraph>

      <Divider></Divider>

      <Title level={2}>
        {intl.formatMessage({
          id: 'Gallery',
        })}
      </Title>
      <Paragraph>
        {intl.formatMessage({
          id: 'GalleryContent',
        })}
      </Paragraph>

      <Paragraph>
        <ul>
          {galleryMenu.map(({ key, children }) => {
            return (
              <li key={key}>
                {intl.formatMessage({ id: key })}
                <ul>
                  {children?.map((child) => {
                    return (
                      <li key={child.key}>
                        <Link to={child.path}>
                          {intl.formatMessage({
                            id: child.key,
                          })}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </Paragraph>

      <Divider></Divider>

      <Title level={2}>
        {intl.formatMessage({
          id: 'Precautions',
        })}
      </Title>
      <Paragraph>
        {intl.formatMessage({
          id: 'PrecautionsContent',
        })}
      </Paragraph>
    </Typography>
  );
}
