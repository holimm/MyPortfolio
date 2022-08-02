import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import TypeAnimation from 'react-type-animation';
import ReactPlayer from 'react-player';
import {motion} from 'framer-motion';
import Particle from './particles/particles';
import "./css/scrollbar.css";

const App = () => {
  const [particle] = useState(<Particle/>); 
  const [youtubeWallpaper] = useState(<ReactPlayer className='react-player' url={`//www.youtube.com/embed/5_Blq9W9cT8?autoplay=1&mute=0&start=1`} width={"100%"} height={"100vh"} playing={true} loop={true} muted={true}/>);
  const [tab,setTab] = useState('Home');
  const executeTabEvent = (label) => {
    label == ('Home') ? setTab('Home') :
    label == ('About') ? setTab('About') :
    label == ('Skills') ? setTab('Skills') :
    label == ('Projects') ? setTab('Projects') :
    label == ('Education') ? setTab('Education') :
    label == ('Contact') ? setTab('Contact') : setTab('')
  }
  function Wallpaper(){
    function TabChanger(props){
        switch(props.tab){
          case 'Home':{
            return <RenderHome/>
            break;
          }
          case 'About':{
            return <RenderAbout/>
            break;
          }
          case 'Skills':{
            return <RenderSkills/>
            break;
          }
          case 'Projects':{
            return <RenderMyProject/>
            break;
          }
          case 'Education':{
            return <RenderEducation/>
            break;
          }
        }
    }
    return(
      <>
      <div className='h-full w-full overflow-hidden absolute bg-black opacity-10 top-0'></div>
      <div className="container-fluid z-30 relative">
        <div className="w-full h-fit">
            <Header/>
            <div className='w-full h-fit mt-0 md:mt-2 lg:mt-6'>   
              <TabChanger tab={tab}/>            
            </div>
        </div>
      </div>
      </>
    );   
  }
  function Header() {
    function showMenuTab(document,state){
      state ? (document.style.display = 'block') && (document.style.position = 'fixed') : document.style.display = 'none';
    };
    function HeaderTab(props){
      return( 
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:1}} className="mx-0 lg:mx-5 text-xl text-white hover:scale-110 px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-violet-800 hover:via-fuchsia-800 hover:to-pink-700 rounded-lg cursor-pointer" onClick={()=>executeTabEvent(props.label)}>{props.label}</motion.div>
      );
    }
    function HeaderTabResponsive(props){
      return(
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:1}} className="mx-5 my-2 text-xl text-white px-3 py-4 uppercase hover:bg-gradient-to-r hover:from-violet-500 hover:via-fuchsia-500 hover:to-pink-500 rounded-lg cursor-pointer" onClick={()=>executeTabEvent(props.label)}>{props.label}</motion.div>
      );
    }
    return (
      <>
      <div className='container-fluid w-full h-fit mx-auto relative'>  
        <nav className="md:flex text-white hidden justify-end items-center w-full h-20 z-40">
          <ul className="flex justify-between items-center mr-12">            
            <HeaderTab label="Home"/>
            <HeaderTab label="About"/>
            <HeaderTab label="Skills"/>
            <HeaderTab label="Projects"/>
            <HeaderTab label="Education"/>
            <HeaderTab label="<Hide>"/>
            <li className="mx-0 lg:mx-5 text-xl px-3 py-2 uppercase cursor-pointer font-semibold">&#60; HoLim /&#62;</li>
          </ul>
        </nav>
        <nav className="md:hidden flex justify-start items-center w-full h-20 bg-transparent">
            <ul className="flex justify-between items-center mr-12 ml-8">
              <motion.div whileHover={{scale:1.1}} whileTap={{scale:1}} className="mx-5 text-xl text-white px-4 py-2 uppercase hover:bg-gradient-to-r hover:from-violet-500 hover:via-fuchsia-500 hover:to-pink-500 rounded-lg cursor-pointer" onClick={()=>showMenuTab(document.getElementById('menutab'),true)}>Menu</motion.div>
            </ul>
        </nav>
        <div className='w-full hidden h-screen absolute z-50 top-0 bg-slate-300 bg-opacity-70 backdrop-blur-md' id='menutab'>
          <ul className="flex-row justify-between items-center mx-5 mt-12">
            <li className="mx-5 my-2 text-xl text-white px-3 py-4 uppercase cursor-pointer font-semibold">&#60; HoLim /&#62;</li>
            <HeaderTabResponsive label="Home"/>
            <HeaderTabResponsive label="About"/>
            <HeaderTabResponsive label="Skills"/>
            <HeaderTabResponsive label="Projects"/>
            <HeaderTabResponsive label="Education"/>
            <HeaderTabResponsive label="<Hide>"/>
            <motion.div whileHover={{scale:1.1}} whileTap={{scale:1}} className="mx-5 my-2 text-xl text-white px-3 py-4 uppercase hover:bg-gradient-to-r hover:from-violet-500 hover:via-fuchsia-500 hover:to-pink-500 rounded-lg cursor-pointer" onClick={()=>showMenuTab(document.getElementById('menutab'),false)}>&larr; Go Back</motion.div>
          </ul>
        </div>
      </div>
      </>
    );
  }
  function RenderHome(){
    function RenderSocialMedia(props){
      return(
        <motion.div className="w-16 h-16 ml-10 first:ml-0 hover:bg-gradient-to-r hover:from-violet-500 hover:via-fuchsia-500 hover:to-pink-500 cursor-pointer rounded-full"
          whileHover={{scale: 1.2}}
          whileTap={{scale:1}}
        >
          <a href={`${props.url}`} target={'_blank'} rel='noreferrer'><div className="bg-cover bg-center mx-auto mt-2 w-12 h-12" style={{backgroundImage: `url(${props.image})`}}></div></a>
        </motion.div>
      );
    }
    return(
      <motion.div drag className='container-fluid mt-10 lg:mt-32 w-10/12 h-fit mx-auto relative cursor-pointer'
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      >  
        <div className='w-full h-full absolute z-30 rounded-3xl'>     
          <motion.div className='w-full rounded-3xl'
              initial={{height: '-60%', opacity: 0,border: 'solid 1px white', borderBottom: 'none', borderTop: 'none'}}
              animate={{height: '100%', opacity: 1,border: 'solid 1px white'}}
              transition={{duration:1, ease:'easeInOut'}}             
            >
          </motion.div>
        </div>
        <motion.div className='w-full h-full bg-black bg-opacity-50 backdrop-blur-sm relative z-40 border-l border-r rounded-3xl'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 1, ease: 'easeIn'}}
        >
        <div className="h-fit w-5/6 mx-auto py-20">       
              <div className="h-fit w-full">
                <h2 className="text-3xl text-center md:text-left md:text-5xl text-white font-semibold" style={{fontFamily: 'Julius Sans One'}}>Hello, I'm <font className="font-bold text-pink-500">Nguyen Lim Thai Ho</font></h2>
                <p className="text-2xl mx-auto md:mx-0 md:text-5xl w-fit my-5 text-white font-semibold" style={{fontFamily: 'Julius Sans One'}}>I am into&nbsp;
                <font className="text-xl mx-auto md:mx-0 sm:text-2xl md:text-5xl w-fit my-5 font-semibold text-white box-decoration-clone bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" style={{fontFamily: 'Gantari'}}>
                <TypeAnimation
                  cursor={true}
                  sequence={['Web Development', 1000, 'Front-End Development',1000,'Back-End Development',1000]}
                  wrapper="b"
                  repeat={Infinity}
                />             
                </font>
                </p>
                <div className="w-full mx-auto md:w-full md:mx-0 flex justify-between md:justify-start items-center">
                  <RenderSocialMedia url="https://github.com/holimm" image="./img/icon/github.svg"/>
                  <RenderSocialMedia url="https://www.facebook.com/tea.limho" image="./img/icon/facebook.svg"/>
                  <RenderSocialMedia url="https://www.instagram.com/millohh_/" image="./img/icon/instagram.svg"/>                  
                </div>
              </div>
            </div>
        </motion.div>
      </motion.div>
      
    );
  }
  function RenderAbout(){
    var date = new Date();
    var age = date.getFullYear() - 2001;
    function MyInfo(props){
      return(
        <div className='mt-3'>
          <font className='text-lg font-bold mt-5 text-fuchsia-300' style={{fontFamily: 'Gantari'}}>{props.label}</font><font className='text-lg text-white'>{props.content}</font>
        </div>
      );
    }
    return (
      <div className='container-fluid w-10/12 h-fit lg:h-fit mx-auto relative'>  
        <div className='w-full h-full absolute z-30 rounded-3xl'>     
          <motion.div className='w-full rounded-3xl'
              initial={{height: '-60%', opacity: 0,border: 'solid 1px white', borderBottom: 'none', borderTop: 'none'}}
              animate={{height: '100%', opacity: 1,border: 'solid 1px white'}}
              transition={{duration:1, ease:'easeInOut'}}             
            >
          </motion.div>
        </div>
        <motion.div className='w-full h-96 lg:h-full bg-black bg-opacity-50 backdrop-blur-sm relative z-40 border-l border-r rounded-3xl overflow-y-auto'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 1, ease: 'easeIn'}}
        >
        <div className="h-fit w-5/6 mx-auto pt-7 pb-20">
            <h2 className="font-mono font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center" style={{fontFamily: 'Gantari'}}>About Me</h2>
            <div className="w-full h-fit inline-block mt-10">
              <div className='w-2/4 mx-auto md:mx-0 md:w-3/12 h-full md:float-left'>
                <img className='rounded-xl shadow-xl shadow-slate-500' src="./img/avatar.jpg" alt='AboutMeAvatar'></img>
              </div>
              <div className='w-full mt-12 md:mt-0 md:w-8/12 h-full float-right'>
                <h2 className='text-3xl text-white font-extrabold' style={{fontFamily: 'Gantari'}}>I'm <font className='text-violet-300 font-bold'>Nguyen Lim Thai Ho</font></h2>
                <h2 className='text-xl text-white font-semibold' style={{fontFamily: 'Gantari'}}>Web Developer</h2>
                <p className='text-lg text-white font-bold mt-5' style={{fontFamily: 'Gantari'}}>I'm a Software Engineering undergraduate at Saigon University. I'm pursuing a career as a front-end web developer. To understand more about ReactJS and NodeJS, I'm currently working on several projects to improve my skills, this is one of them. You can see some of my work in this portfolio. Thank you for visiting.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 mt-5'>
                  <MyInfo label={'Name: '} content={'Nguyễn Lim Thái Hồ'}/>
                  <MyInfo label={'Age: '} content={age}/>
                  <MyInfo label={'Email: '} content={'kahn12345678@gmail.com'}/>
                  <MyInfo label={'From: '} content={'Ho Chi Minh City, Viet Nam'}/>
                </div>
              </div>
            </div>
        </div>
        </motion.div>
      </div>
    );  
  }
  function RenderSkills(){
    function RenderSkillsTab(props){
      return(
        <div className='bg-black opacity-80 backdrop-blur-lg hover:bg-slate-300 transition duration-300 ease-in-out w-full h-36 pb-3 mx-auto rounded-xl cursor-pointer'>
          <div className='w-full h-3/4 inline-block'>
            <img className='w-20 h-20 mt-5 mx-auto' src={props.url} alt='SkillsTab'/>
          </div>
          <div className='w-full h-1/4 inline-block'>
            <p className='text-2xl text-center text-white font-semibold'>{props.name}</p>
          </div>
        </div>
      );
    }
    return (
      <div className='container-fluid w-10/12 h-fit mx-auto relative'>
        <div className='w-full h-full absolute z-30 rounded-3xl'>     
          <motion.div className='w-full rounded-3xl'
              initial={{height: '-60%', opacity: 0,border: 'solid 1px white', borderBottom: 'none', borderTop: 'none'}}
              animate={{height: '100%', opacity: 1,border: 'solid 1px white'}}
              transition={{duration:1, ease:'easeInOut'}}             
            >
          </motion.div>
        </div>
        <motion.div className='bg-black bg-opacity-50 backdrop-blur-sm rounded-3xl relative z-40 border-l border-r' 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 1, ease: 'easeIn'}}
        >
        <div className="h-fit w-11/12 mx-auto pt-7 pb-12">
            <h2 className="font-mono font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center box-decoration-clone" style={{fontFamily: 'Gantari'}}>Skills 	&amp; Abilities</h2>
              <div className="container w-full mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 overflow-x-auto" style={{height: '27rem'}}>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} name={'HTML'}/>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'} name={'CSS'}/>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} name={'Javascript'}/>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'} name={'PHP'}/>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} name={'ReactJS'}/>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'} name={'NodeJS'}/>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'} name={'TailwindCSS'}/>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'} name={'Bootstrap'}/>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'} name={'Git'}/>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} name={'Github'}/>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'} name={'MySQL'}/>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'} name={'MongoDB'}/>
                <RenderSkillsTab url={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'} name={'Java'}/>
              </div>
        </div>
        </motion.div>
      </div>
    );  
  }
 
  function RenderMyProject(){
    function RenderProjectTab(props){
      return(
        <div className='bg-cover bg-center w-full h-52 mx-auto rounded-lg relative' style={{backgroundImage: `url('${props.image}')`}}>
          <div className='inline-block h-full w-full bg-black opacity-0 hover:transition-all hover:bg-opacity-80 hover:opacity-100 hover:backdrop-blur-md hover:duration-300 duration-300 hover:ease-in-out rounded-lg'>
            <a href={`${props.url}`} target={'_blank'} rel='noreferrer'><motion.div className='w-fit h-fit mx-auto cursor-pointer'
              whileHover={{scale: 1.2}}
              whileTap={{scale: 1}}
            >
              <p className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-14 truncate' style={{fontFamily: 'Gantari'}}>{props.name}</p>
            </motion.div></a>
            <a href={`${props.preview}`} target={'_blank'} rel='noreferrer'>
            <motion.div className='w-fit h-fit mx-auto cursor-pointer bg-gradient-to-r from-violet-800 via-fuchsia-800 to-pink-700 rounded-xl'
              whileHover={{scale: 1.2}}
              whileTap={{scale: 1}}
            >
              <p className='text-lg sm:text-xl md:text-2xl px-2 py-2 text-white font-semibold mt-6 truncate' style={{fontFamily: 'Gantari'}}>&lt;Preview/&gt;</p>
            </motion.div></a>
          </div>
        </div>
      );
    }
    return (
      <div className='container-fluid w-10/12 mx-auto h-fit relative rounded-3xl'>
        <div className='w-full h-full absolute z-30 rounded-3xl'>     
          <motion.div className='w-full rounded-3xl'
              initial={{height: '-60%', opacity: 0,border: 'solid 1px white', borderBottom: 'none', borderTop: 'none'}}
              animate={{height: '100%', opacity: 1,border: 'solid 1px white'}}
              transition={{duration:1, ease:'easeInOut'}}             
            >
          </motion.div>
        </div>
        <motion.div className='bg-black bg-opacity-50 backdrop-blur-sm rounded-3xl relative z-40 border-l border-r' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 1, ease: 'easeIn'}}
          >
          <div className="h-fit w-5/6 mx-auto pt-6 pb-10">
              <h2 className="font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center" style={{fontFamily: 'Gantari'}}>Projects</h2> 
                <div className='container w-full h-80 lg:h-96 mx-auto bg-opacity-40 mt-6 rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-x-auto'>
                    <RenderProjectTab image={'./img/work/mysimpleradio.png'} name={'My Simple Radio'} url={'https://github.com/holimm/MySimpleRadio'} preview={'https://holimm.github.io/MySimpleRadio/'}/>
                    <RenderProjectTab image={'./img/work/resume.png'} name={'Resume Generator'} url={'https://github.com/holimm/MyResume'} preview={'https://holimm.github.io/MyResume/'}/>
                    <RenderProjectTab image={'./img/work/blog.png'} name={'Blog Website'} url={'https://github.com/holimm/MyBlog'} preview={'#'}/>
                    <RenderProjectTab image={'./img/work/ecommerce.png'} name={'Ecommerce Website'} url={'https://github.com/holimm/Ecommerce-Project'} preview={'#'}/>
                    <RenderProjectTab image={'./img/work/mineinus.png'} name={'Mine In Us'} url={'#'} preview={'#'}/>
                </div>
              <a href='https://github.com/holimm?tab=repositories' target={'_blank'} rel="noreferrer"><button className='flex px-6 py-3 mx-auto mt-8 text-xl font-semibold bg-slate-100 rounded-lg'>See all &rarr;</button></a>
          </div>
        </motion.div>
      </div>
    );  
  }

  function RenderEducation(){
    function RenderEducationSchool(props){
      return(
        <div className='w-full h-48 mt-6 bg-black bg-opacity-40 backdrop-blur-md transition duration-300 ease-in-out rounded-2xl'>
          <div className='w-2/6 h-full bg-cover bg-center float-left rounded-2xl' style={{backgroundImage: `url('${props.url}')`}}></div>
          <div className='w-4/6 h-full float-left'>
            <div className='flex-row justify-between items-center mt-10'>
                <p className='text-lg text-white sm:text-xl md:text-2xl mt-2 ml-5 font-semibold break-normal' style={{fontFamily: 'Gantari'}}>{props.name}</p>
                <p className='text-lg text-white sm:text-xl md:text-2xl mt-2 ml-5 break-normal' style={{fontFamily: 'Gantari'}}>{props.period}</p>
                <p className='text-lg text-white sm:text-xl md:text-2xl mt-2 ml-5 break-normal' style={{fontFamily: 'Gantari'}}>{props.major}</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='container-fluid w-10/12 h-fit mx-auto relative rounded-3xl'>
        <div className='w-full h-full absolute z-30 rounded-3xl'>     
          <motion.div className='w-full rounded-3xl'
              initial={{height: '-60%', opacity: 0,border: 'solid 1px white', borderBottom: 'none', borderTop: 'none'}}
              animate={{height: '100%', opacity: 1,border: 'solid 1px white'}}
              transition={{duration:1, ease:'easeInOut'}}             
            >
          </motion.div>
        </div>
          <motion.div className='bg-black bg-opacity-50 backdrop-blur-sm rounded-3xl relative z-40 border-l border-r' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 1, ease: 'easeIn'}}
          >
          <div className="h-fit w-5/6 md:w-4/6 mx-auto pt-6 pb-10 lg:pb-16">
              <h2 className="font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center" style={{fontFamily: 'Gantari'}}>Education</h2>
              <div className="w-full h-fit inline-block">
                <RenderEducationSchool url={'./img/saigonuni.jpg'} name={'Saigon University'} period={'2019 - Present | Pursuing'} major={'Studying Software Engineering'}/>
                <RenderEducationSchool url={'./img/mariecurie.jpg'} name={'Marie Curie High School'} period={'2016 - 2019 | Completed'} major={''}/>
              </div>
          </div>
          </motion.div>
      </div>
    );  
  }
  return <>
    <div className='h-full w-full overflow-hidden absolute scale-custom md:scale-150 lg:scale-125 top-0'>
        {youtubeWallpaper}
    </div>   
    <div className='h-full w-full right-12 overflow-hidden absolute scale-150 lg:scale-125 top-0'>
        {particle}
    </div>   
    <Wallpaper/>    
  </>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
