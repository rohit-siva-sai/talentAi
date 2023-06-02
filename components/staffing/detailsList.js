import React from "react";
import Details from "./details";
const array = [
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0O2m8GmmhsKtX9WPJF0_Ri8cM3jnIT-ra7afRcy7WLk7PZPJUC16dRMxyz9t1DVvR8oI&usqp=CAU",
    name: "Dong",
    work: "Ml engineer",
    experience: "4 years",
    availability: "ful-time",
    matter:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum cumque eligendi, sapiente aliquam maxime ipsam fuga excepturi aut? Quas quasi ipsum ullam sed illo fuga, pariatur sunt eveniet natus.",
    skills: ["ML", "Java", "SQL", "C", "React Js", "Python"],
    worked: ["Artificial Neural Networks", "Linux", "OpenStack"],
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0O2m8GmmhsKtX9WPJF0_Ri8cM3jnIT-ra7afRcy7WLk7PZPJUC16dRMxyz9t1DVvR8oI&usqp=CAU",
    name: "Dong",
    work: "Ml engineer",
    experience: "4 years",
    availability: "ful-time",
    matter:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum cumque eligendi, sapiente aliquam maxime ipsam fuga excepturi aut? Quas quasi ipsum ullam sed illo fuga, pariatur sunt eveniet natus.",
    skills: ["ML", "Java", "SQL", "C", "React Js", "Python"],
    worked: ["Artificial Neural Networks", "Linux", "OpenStack"],
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0O2m8GmmhsKtX9WPJF0_Ri8cM3jnIT-ra7afRcy7WLk7PZPJUC16dRMxyz9t1DVvR8oI&usqp=CAU",
    name: "Dong",
    work: "Ml engineer",
    experience: "4 years",
    availability: "ful-time",
    matter:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum cumque eligendi, sapiente aliquam maxime ipsam fuga excepturi aut? Quas quasi ipsum ullam sed illo fuga, pariatur sunt eveniet natus.",
    skills: ["ML", "Java", "SQL", "C", "React Js", "Python"],
    worked: ["Artificial Neural Networks", "Linux", "OpenStack"],
  },
];

const DetailsList = () => {
  return (
    <div className="flex flex-col space-y-4">
      {array.map((item) => {
        return (
          <Details
            imgUrl={item.imgUrl}
            name={item.name}
            work={item.work}
            experience={item.experience}
            availability={item.availability}
            matter={item.matter}
            skills={item.skills}
            worked={item.worked}
          />
        );
      })}
    </div>
  );
};

export default DetailsList;
