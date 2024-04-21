import Avatars from "@components/avatars/avatars";
import Calendar from "@components/calendar/calendar";
import Instruction from "@components/instruction/instruction";

const Aside = () => {
  return (
    <div className='w-full md:w-2/5 md:px-0'>
      <Instruction></Instruction>
      <Avatars></Avatars>
      <Calendar></Calendar>
    </div>

  );
};

export default Aside;
