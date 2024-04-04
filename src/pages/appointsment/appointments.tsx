import Menu from "@components/menu/menu";
import Header from "@components/header/header";
import HeaderPart from "@components/header-part/header-part";
import Payment from "@components/schedule/schedule";

const Appointments = () => {
  return (
    <div className='bg-page-background dark:bg-page-background-dark h-full w-full'>
      <div className='flex'>
        <div>
          <Menu></Menu>
        </div>
        <div className='w-screen h-screen'>
          <Header props={<HeaderPart/>}></Header>
          <div className='flex-none w-full mr-5 box-border'>
            <Payment></Payment>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Appointments;
