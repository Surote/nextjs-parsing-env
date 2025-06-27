import { GetServerSideProps } from 'next';
import getConfig from 'next/config';

export default function Home({ serverEnvVars }) {
  const { publicRuntimeConfig } = getConfig();
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Next.js Environment Variables Example</h1>
      
      <h2>Client-side Environment Variables (NEXT_PUBLIC_*)</h2>
      <ul>
        <li>API URL: {process.env.NEXT_PUBLIC_API_URL || publicRuntimeConfig?.NEXT_PUBLIC_API_URL || 'Not set'}</li>
        <li>App Name: {process.env.NEXT_PUBLIC_APP_NAME || publicRuntimeConfig?.NEXT_PUBLIC_APP_NAME || 'Not set'}</li>
        <li>Version: {process.env.NEXT_PUBLIC_VERSION || publicRuntimeConfig?.NEXT_PUBLIC_VERSION || 'Not set'}</li>
      </ul>

      <h2>Server-side Environment Variables (passed via getServerSideProps)</h2>
      <ul>
        <li>Database URL: {serverEnvVars.databaseUrl}</li>
        <li>Server Secret: {serverEnvVars.serverSecret}</li>
      </ul>

      <p>
        <strong>Note:</strong> NEXT_PUBLIC_* variables are available on both client and server.
        Other environment variables are only available on the server and must be passed via getServerSideProps or getStaticProps.
      </p>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      serverEnvVars: {
        databaseUrl: process.env.DATABASE_URL || 'Not set',
        serverSecret: process.env.SERVER_SECRET || 'Not set',
      },
    },
  };
};