import Menu from "@components/menu/menu";
import Header from "@components/header/header";
import Aside from "@components/aside/aside";
import HomeSection from "@components/home-section/home-section";
import HeaderPart from "@components/header-part/header-part";

const Home = () => {
  return (
    <div className='bg-page-background dark:bg-page-background-dark'>
      <div className='flex'>
        <div>
          <Menu></Menu>
        </div>
        <div className='bg-page-background dark:bg-page-background-dark mx-10'>
          <Header props={<HeaderPart />}></Header>
          <div className='flex-none gap-8 md:flex md:flex-row md:justify-between sm:flex sm:flex-col my-5 box-border bg-page-background dark:bg-page-background-dark'>
            <HomeSection></HomeSection>
            <Aside></Aside>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Home;
