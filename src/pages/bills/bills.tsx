import Menu from "@components/menu/menu";
import Header from "@components/header/header";
import HeaderPart from "@components/header-part/header-part";
import Main from "@components/main/main";
import Statistic from "@components/statistic/statistic";

const Bills = () => {
  return (
    <div className='bg-page-background dark:bg-page-background-dark'>
      <div className='flex'>
        <div className='dark:bg-page-background-dark'>
          <Menu></Menu>
        </div>
        <div className='w-full mx-10'>
          <Header props={<HeaderPart/>}></Header>
          <div className=' my-5 gap-10 lg:flex-row lg:pb-2 box-border dark:bg-page-background-dark sm:flex sm:flex-col md:flex-col'>
            <Main></Main>
            <Statistic></Statistic>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Bills;
