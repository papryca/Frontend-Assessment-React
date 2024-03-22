import Menu from "@components/menu/menu";
import Header from "@components/header/header";
import HeaderPart from "@components/header-part/header-part";
import Payment from "@components/schedule/schedule";

const Appointments = () => {
  return (
    <div className='bg-page-background'>
      <div className='flex'>
        <div>
          <Menu></Menu>
        </div>
        <div className='w-full'>
          <Header props={<HeaderPart/>}></Header>
          <div className='flex-none my-5 mr-5 box-border'>
            <Payment></Payment>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Appointments;
