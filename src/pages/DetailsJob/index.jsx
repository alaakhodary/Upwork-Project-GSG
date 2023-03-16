import React from "react";
import DetailsJobs from "../../components/DetailsJobs";

import Layout from "../../components/Layout";

import { Container } from "../../global/Container";

const DetailsJob = () => {
  return (
    <div>
      <Layout>
        <Container>
          <DetailsJobs />
        </Container>
      </Layout>
    </div>
  );
};

export default DetailsJob;
