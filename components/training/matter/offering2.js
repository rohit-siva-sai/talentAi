import React from "react";

const Offering2 = () => {
  return (
    <div className="text-gray-600 flex flex-col space-y-5">
      <p className="text-2xl text-gray-800 font-semibold">
      Data Engineering
      </p>
      <p className="text-gray-600">
        Your data is your most valuable asset. With our extensive experience,
        and technical expertise with emerging technologies, we&#39;ll build you
        a well-defined and integrated approach to identifying, managing, and
        using your internal and external structured and unstructured data.
      </p>
      <p className="text-gray-600">
        Enterprises understand that data is one of the most valuable assets they
        have. It&#39;s the key driver for the implementation of AI solutions
        that provide predictable outcomes. To get that implementation right, you
        need the right quality and quantity of data—in the hands of our
        experts—to train your AI models, including:
      </p>
      <ul className="flex flex-col space-y-4 list-disc list-inside ">
        <li>
          Identifying the right toolset for ingesting and processing your data
        </li>
        <li>Automating and implementing data pipelines for your models</li>
        <li>
          Identifying the need for synthetic data and create solutions for
          generating data
        </li>
      </ul>
      <p>
        We understand the importance of data diversity, security, and privacy to
        ensure enterprise production-grade quality for your AI deployments. And
        while a challenge for others, we ensure proper bias identification and
        fairness in the data used for your solutions.
      </p>
      <p>
        With Turing&#39;s AI Data Engineering services, we&#39;ll help you
        realize and identify the highest value opportunities from implementing
        AI solutions into your business.
      </p>
      <p>Our data engineering tools include:</p>
      <ul className="flex flex-col space-y-4 list-disc list-inside ">
        <li>
          Data warehouse: BigQuery, PostgreSQL, Azure Synapse Analytics, Amazon
          Redshift
        </li>
        <li>Data quality: Great Expectations, Google Dataplex, AWS Glue</li>
        <li>Data analytics: Mode, Google Data Studio/Looker, Amazon Kinesis</li>
        <li>
          Data pipelines: Vertex AI pipelines, Cloud Dataflow, AWS Data
          pipelines
        </li>
        <li>
          Data pipelines schedulers: Airflow, Cloud Scheduler, Amazon
          Codepipeline
        </li>
      </ul>
    </div>
  );
};

export default Offering2;
