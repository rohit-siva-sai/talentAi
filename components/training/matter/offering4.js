import React from "react";

const Offering4 = () => {
  return (
    <div className="text-gray-600 flex flex-col space-y-5">
      <p className="text-2xl text-gray-800 font-semibold">ML Operations</p>
      <p className="text-gray-600">
        Discover automated processes that scale. Our experts can help you
        automate your models for continuous, repeatable processes and free up
        your resources for building and training—eliminating infrastructure
        setup, management, and maintenance concerns.
      </p>
      <p className="text-gray-600">
        A key machine learning best practice is establishing scalable,
        repeatable, continuous, automated processes so productivity is spent on
        building and training models, not on infrastructure setup, management,
        and maintenance.
      </p>
      <p className="text-gray-600">
        Our experts can automate the entire process of model development,
        training, testing, validation, and deployment for your
        business—identifying the right technology set and implementing a robust
        solution that effortlessly scales to your business requirements.
      </p>

      <p>Our MLOps tools include:</p>

      <ul className="flex flex-col space-y-4 list-disc list-inside ">
        <li>
          ML feature monitoring: Arize, Great expectations, Amazon Cloudwatch
        </li>
        <li>
          ML model monitoring: Arize, Vertex AI model monitoring, Sagemaker
          Model monitor
        </li>
      </ul>
    </div>
  );
};

export default Offering4;
