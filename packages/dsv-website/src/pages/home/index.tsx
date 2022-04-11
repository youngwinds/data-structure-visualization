import { Banner } from './banner';
import { Content } from './content';

export default function Page() {
  return (
    <div style={{ background: '#ffffff' }}>
      <div
        style={{
          paddingTop: 100,
          paddingBottom: 80,
          textAlign: 'center',
          background: '#f0f2f5',
        }}
      >
        <Banner />
      </div>
      <div
        style={{
          minHeight: '100vh',
          maxWidth: 1140,
          margin: '0 auto',
          padding: '80px 40px',
        }}
      >
        <Content />
      </div>
    </div>
  );
}
