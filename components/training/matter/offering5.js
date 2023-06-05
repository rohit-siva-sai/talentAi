import React from "react";

const Offering5 = () => {
  return (
    <div className="text-gray-600 flex flex-col space-y-5">
      <p className="text-2xl text-gray-800 font-semibold">ML Model Development</p>
      <p className="text-gray-600">
        The right model makes all the difference. With our significant
        experience in building, training, and deploying AI models, we know how
        to take the right data and produce accurate, usable results for lifetime
        value for your business.
      </p>
      <p className="text-gray-600">
        When it comes to model development, establishing the value of invested
        effort is critical in your AI implementation journey. Your business
        goals may require simpler prediction models using established
        technologies, or emerging technology implementation and complex model
        development. Regardless, we take into account your full life cycle view
        to make sure the models we develop and deploy for your business provide
        value for years to come.
      </p>
      <p className="text-gray-600">
        With Turing’s ML Model Development service, you’ll get accurate, usable
        results from your models—built, trained, tested, and deployed using
        best-in-class open source and commercial tools.
      </p>

      <p>
        Our model development, training, testing, and deployment tools include:
      </p>

      <ul className="flex flex-col space-y-4 list-disc list-inside ">
        <li>ML version control: DVC, Pachyderm</li>
        <li>
          Hyperparameter optimization: Oputna, SigOpt, Vertex AI, Amazon
          Sagemaker, Azure ML
        </li>
        <li>
          ML pipeline scheduler: Airflow, Kubeflow, Amazon Sagemaker pipelines,
          Azure ML pipelines
        </li>
        <li>ML training: Vertex AI, Amazon Sagemaker, Azure ML</li>
      </ul>
    </div>
  );
};

export default Offering5;
