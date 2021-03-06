import React from 'react';
import Layout from '@theme/Layout';

function Legal() {
    return (
        <Layout title="Legal">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <p>
                    This is a community driven project, and not affiliated with AWS. <a href={'https://twitter.com/bahrdev'}>Reach out to Michael Bahr</a> for more information.
                </p>
            </div>
        </Layout>
    );
}

export default Legal;