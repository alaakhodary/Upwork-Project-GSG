import { Styledskill } from "./style";

const Skills = ({ technologiesOfItem }) => {
  return (
    <>
      {technologiesOfItem?.map((techItem, index) => (
        <Styledskill key={index}>{techItem}</Styledskill>
      ))}
    </>
  );
};

export default Skills;
