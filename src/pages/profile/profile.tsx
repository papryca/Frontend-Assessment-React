import Menu from "@components/menu/menu";
import Header from "@components/header/header";
import HeaderPart from "@components/header-part/header-part";
import Profile from "@components/profile/profile";
import MainProfile from "@components/profile/main-profile";

const ProfilePage = () => {
  return (
    <div className='bg-page-background dark:bg-page-background-dark min-h-screen'>
      <div className='flex'>
        <div>
          <Menu></Menu>
        </div>
        <div className='w-full'>
          <Header props={<HeaderPart/>}></Header>
          <div className='flex-none md:flex box-border'>
            <MainProfile></MainProfile>
            <Profile></Profile>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProfilePage;
