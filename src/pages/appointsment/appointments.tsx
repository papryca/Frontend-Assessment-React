import Menu from "@components/menu/menu";
import Header from "@components/header/header";
import HeaderPart from "@components/header-part/header-part";
import Payment from "@components/schedule/schedule";
import Schedule from "@components/schedule/schedule";

const Appointments = () => {
  return (
    <div className='bg-page-background dark:bg-page-background-dark min-h-screen w-full'>
      <div className='flex'>
        <div>
          <Menu></Menu>
        </div>
        <div className='w-screen mx-10'>
          <Header props={<HeaderPart/>}></Header>
          <div className='my-5 flex-none w-full box-border'>
            <Schedule></Schedule>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Appointments;
