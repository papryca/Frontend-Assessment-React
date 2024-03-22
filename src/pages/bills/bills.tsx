import Menu from "@components/menu/menu";
import Header from "@components/header/header";
import HeaderPart from "@components/header-part/header-part";
import Main from "@components/main/main";
import Aside from "@components/aside/aside";
import Statistic from "@components/statistic/statistic";

const Bills = () => {
  return (
    <div className='bg-page-background'>
      <div className='flex'>
        <div>
          <Menu></Menu>
        </div>
        <div>
          <Header props={<HeaderPart/>}></Header>
          <div className='flex-none md:flex my-5 box-border'>
            <Main></Main>
            <Statistic></Statistic>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Bills;
