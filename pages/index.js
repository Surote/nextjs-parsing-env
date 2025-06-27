export default function Home({ serverEnvVars }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Next.js Environment Variables Example</h1>
      
      <h2>Server-side Environment Variables (passed via getServerSideProps)</h2>
      <ul>
        <li>Database URL: {serverEnvVars.databaseUrl}</li>
        <li>Server Secret: {serverEnvVars.serverSecret}</li>
      </ul>

      <p>
        <strong>Note:</strong> Environment variables are only available on the server and must be passed via getServerSideProps or getStaticProps.
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