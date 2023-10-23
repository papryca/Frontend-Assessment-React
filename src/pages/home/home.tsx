import Menu from "@components/menu/menu";
import Header from "@components/header/header";
import Main from "@components/main/main";
import Aside from "@components/aside/aside";
import HeaderPart from "@components/header-part/header-part";

const Home = () => {
  return (
    <div className='bg-page-background'>
      <div className='flex'>
        <div>
          <Menu></Menu>
        </div>
        <div>
          <Header props={<HeaderPart />}></Header>
          <div className='flex-none md:flex my-5 box-border'>
            <Main></Main>
            <Aside></Aside>
          </div>
        </div>
      </div>

    </div>

  )
};

export default Home;
