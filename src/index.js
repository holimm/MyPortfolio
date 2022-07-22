import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import TypeAnimation from 'react-type-animation';

const App = () => {
  const refHeader = useRef(null);
  const refAboutme = useRef(null);
  const refSkills = useRef(null);
  const refProjects = useRef(null);
  const refEducation = useRef(null);
  const refJourney = useRef(null);
  const executeScrollEvent = (ref) => ref.current?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  function Wallpaper(){
    return(
      <div className="container-fluid z-30" ref={refHeader}>
        <div className="w-full h-fit">
          <div className="bg-cover bg-center w-full" style={{backgroundImage: `url('./img/wallpaper.jpg')`, height: '100vh'}}>
            <Header/>
            <div className="h-fit mt-80 w-full md:w-7/12 float-right">
              <h2 className="text-3xl text-center md:text-left md:text-5xl font-semibold" style={{fontFamily: 'Julius Sans One'}}>Hello, I'm <font className="font-bold text-cyan-500">Nguyen Lim Thai Ho</font></h2>
              <p className="text-2xl mx-auto md:mx-0 md:text-5xl w-fit my-5 font-semibold" style={{fontFamily: 'Julius Sans One'}}>I am into&nbsp;
              <font className="text-lg mx-auto md:mx-0 sm:text-2xl md:text-5xl w-fit my-5 font-semibold text-white box-decoration-clone bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500" style={{fontFamily: 'Gantari'}}>
              <TypeAnimation
                cursor={true}
                sequence={['Web Development', 1000, 'Front-End Development',1000,'Back-End Development',1000]}
                wrapper="b"
                repeat={Infinity}
              />             
              </font>
              </p>
              <div className="w-1/4 mx-auto md:w-full md:mx-0 flex justify-between md:justify-start items-center">
                <div className="w-14 h-14 hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 cursor-pointer rounded-full">
                  <div className="bg-cover bg-center mx-auto mt-2 w-10 h-10" style={{backgroundImage: `url(./img/icon/facebook.svg)`}}></div>
                </div>
                <div className="w-14 h-14 ml-8 hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 cursor-pointer rounded-full">
                  <div className="bg-cover bg-center mx-auto mt-2 w-10 h-10" style={{backgroundImage: `url(./img/icon/instagram.svg)`}}></div>
                </div>
                <div className="w-14 h-14 ml-8 hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 cursor-pointer rounded-full">
                  <div className="bg-cover bg-center mx-auto mt-2 w-10 h-10" style={{backgroundImage: `url(./img/icon/github.svg)`}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );   
  }
  function Header() {
    function showMenuTab(document,state){
      state ? (document.style.display = 'block') && (document.style.position = 'fixed') : document.style.display = 'none';
    };
    return (
      <>
      <nav className="md:flex hidden justify-start items-center w-full h-20 fixed bg-white bg-opacity-80 backdrop-blur-md z-50">
            <ul className="flex justify-between items-center ml-12">
              <li className="mx-5 text-xl px-3 py-2 uppercase cursor-pointer font-semibold">&#60; HoLim /&#62;</li>
            </ul>
      </nav>
      <nav className="md:flex hidden justify-end items-center w-full h-20 fixed bg-transparent z-50">
            <ul className="flex justify-between items-center mr-12">
              <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>executeScrollEvent(refHeader)}>Home</li>
              <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>executeScrollEvent(refAboutme)}>About</li>
              <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>executeScrollEvent(refSkills)}>Skills</li>
              <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>executeScrollEvent(refEducation)}>Education</li>
              <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>executeScrollEvent(refProjects)}>Project</li>
              <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>executeScrollEvent(refAboutme)}>Contact</li>
            </ul>
      </nav>
      <nav className="md:hidden flex justify-start items-center w-full h-20 fixed bg-white bg-opacity-80 backdrop-blur z-50">
          <ul className="flex justify-between items-center mr-12">
            <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>showMenuTab(document.getElementById('menutab'),true)}>Menu</li>
          </ul>
      </nav>
      <div className='w-full hidden md:hidden h-screen absolute z-50 bg-slate-300 bg-opacity-70 backdrop-blur-md' id='menutab'>
        <ul className="flex-row justify-between items-center mr-12 mt-20">
          <li className="mx-5 text-xl px-3 py-2 uppercase cursor-pointer font-semibold">&#60; HoLim /&#62;</li>
          <li className="mx-5 my-2 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>executeScrollEvent(refHeader)}>Home</li>
          <li className="mx-5 my-2 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>executeScrollEvent(refAboutme)}>About</li>
          <li className="mx-5 my-2 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>executeScrollEvent(refSkills)}>Skills</li>
          <li className="mx-5 my-2 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>executeScrollEvent(refEducation)}>Education</li>
          <li className="mx-5 my-2 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>executeScrollEvent(refProjects)}>Project</li>
          <li className="mx-5 my-2 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>executeScrollEvent(refAboutme)}>Contact</li>
          <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer" onClick={()=>showMenuTab(document.getElementById('menutab'),false)}>&larr; Go Back</li>
        </ul>
      </div>
      </>
    );
  }
  function RenderHome(){
    var date = new Date();
    var age = date.getFullYear() - 2001;
    function MyInfo(props){
      return(
        <div className='mt-3'>
          <font className='text-lg font-bold mt-5 text-blue-500' style={{fontFamily: 'Gantari'}}>{props.label}</font><font className='text-lg'>{props.content}</font>
        </div>
      );
    }
    return (
      <div className='container-fluid bg-slate-100' ref={refAboutme}>
        <div className="h-fit w-5/6 mx-auto pt-10 pb-20">
            <h2 className="font-mono font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center box-decoration-clone bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500">About Me</h2>
            <div className="w-full h-fit inline-block mt-12">
              <div className='w-2/4 mx-auto md:mx-0 md:w-3/12 h-full md:float-left'>
                <img className='rounded-xl shadow-xl shadow-slate-500' src="./img/avatar.jpg" alt='AboutMeAvatar'></img>
              </div>
              <div className='w-full mt-12 md:mt-0 md:w-8/12 h-full float-right'>
                <h2 className='text-3xl font-extrabold' style={{fontFamily: 'Gantari'}}>I'm <font className='text-blue-500'>Nguyen Lim Thai Ho</font></h2>
                <h2 className='text-xl font-semibold' style={{fontFamily: 'Gantari'}}>Web Developer</h2>
                <p className='text-lg font-bold mt-5' style={{fontFamily: 'Gantari'}}>I'm a Software Engineering undergraduate at Saigon University. I'm pursuing a career as a front-end web developer. To understand more about ReactJS and NodeJS, I'm currently working on several projects to improve my skills, this is one of them. You can see some of my work in this portfolio. Thank you for visiting.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 mt-5'>
                  <MyInfo label={'Name: '} content={'Nguyễn Lim Thái Hồ'}/>
                  <MyInfo label={'Age: '} content={age}/>
                  <MyInfo label={'Email: '} content={'kahn12345678@gmail.com'}/>
                  <MyInfo label={'From: '} content={'Ho Chi Minh City, Viet Nam'}/>
                </div>
              </div>
            </div>
        </div>
      </div>
    );  
  }
  function RenderSkills(){
    function RenderSkillsTab(props){
      return(
        <div className='bg-white hover:bg-slate-200 w-full h-36 pb-3 mx-auto rounded-xl'>
          <div className='w-full h-3/4 inline-block'>
            <img className='w-20 h-20 mt-5 mx-auto' src={props.url} alt='SkillsTab'/>
          </div>
          <div className='w-full h-1/4 inline-block'>
            <p className='text-2xl text-center font-semibold'>{props.name}</p>
          </div>
        </div>
      );
    }
    return (
      <div className='container-fluid bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500' ref={refSkills}>
        <div className="h-fit w-5/6 mx-auto pt-10 pb-28">
            <h2 className="font-mono font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center box-decoration-clone ">Skills 	&amp; Abilities</h2>
            <div className='w-full h-fit mx-auto bg-neutral-800 bg-opacity-40 mt-10 rounded-xl'>
              <div className="container w-full h-fit py-10 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
                <RenderSkillsTab url={'./img/icon/skills/html.svg'} name={'HTML'}/>
                <RenderSkillsTab url={'./img/icon/skills/css.svg'} name={'CSS'}/>
                <RenderSkillsTab url={'./img/icon/skills/javascript.svg'} name={'Javascript'}/>
                <RenderSkillsTab url={'./img/icon/skills/php.svg'} name={'PHP'}/>
                <RenderSkillsTab url={'./img/icon/skills/react.svg'} name={'ReactJS'}/>
                <RenderSkillsTab url={'./img/icon/skills/nodejs.svg'} name={'NodeJS'}/>
                <RenderSkillsTab url={'./img/icon/skills/tailwind.svg'} name={'TailwindCSS'}/>
                <RenderSkillsTab url={'./img/icon/skills/bootstrap.svg'} name={'Bootstrap'}/>
                <RenderSkillsTab url={'./img/icon/skills/github.svg'} name={'Github'}/>
                <RenderSkillsTab url={'./img/icon/skills/mysql.svg'} name={'MySQL'}/>
                <RenderSkillsTab url={'./img/icon/skills/java.svg'} name={'Java'}/>
              </div>
            </div>
        </div>
      </div>
    );  
  }

  function RenderEducation(){
    function RenderEducationSchool(props){
      return(
        <div className='w-full h-52 mt-10 bg-white hover:bg-slate-100 shadow-lg shadow-gray-400'>
          <div className='w-2/6 h-full bg-cover bg-center float-left' style={{backgroundImage: `url('${props.url}')`}}></div>
          <div className='w-4/6 h-full float-left'>
            <div className='flex-row justify-between items-center mt-12'>
                <p className='text-lg sm:text-xl md:text-2xl mt-2 ml-5 font-semibold break-normal'>{props.name}</p>
                <p className='text-lg sm:text-xl md:text-2xl mt-2 ml-5 break-normal'>{props.period}</p>
                <p className='text-lg sm:text-xl md:text-2xl mt-2 ml-5 break-normal'>{props.major}</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='container-fluid bg-slate-100' ref={refEducation}>
        <div className="h-fit w-5/6 md:w-4/6 mx-auto pt-10 pb-20">
            <h2 className="font-mono font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center box-decoration-clone bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500">My Education</h2>
            <div className="w-full h-fit inline-block">
              <RenderEducationSchool url={'./img/saigonuni.jpg'} name={'Saigon University'} period={'2019 - Present | Pursuing'} major={'Studying Software Engineering'}/>
              <RenderEducationSchool url={'./img/mariecurie.jpg'} name={'Marie Curie High School'} period={'2016 - 2019 | Completed'} major={''}/>
            </div>
        </div>
      </div>
    );  
  }
  function RenderMyProject(){
    function RenderProjectTab(props){
      return(
        <div className='bg-cover bg-center w-full h-64 mx-auto rounded-lg relative' style={{backgroundImage: `url('${props.image}')`}}>
          <div className='inline-block h-full w-full bg-white opacity-0 hover:transition-all hover:bg-opacity-80 hover:opacity-100 hover:backdrop-blur-md hover:duration-300 duration-300 hover:ease-in-out rounded-lg'>
            <div className='w-full h-fit'>
              <p className='w-full text-lg sm:text-xl md:text-2xl text-sky-500 text-center font-semibold mt-20 truncate'>{props.name}</p>
            </div>
            <div className='w-fit h-fit mx-auto mt-10 grid grid-cols-1'>
              <a href={props.url} target={'_blank'} rel="noreferrer">
                <button className='px-6 py-3 text-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-lg'>&lt; Code /&gt;</button>
              </a>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='container-fluid bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500' ref={refProjects}>
        <div className="h-fit w-5/6 mx-auto pt-10 pb-20">
            <h2 className="font-mono font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center box-decoration-clone ">Projects Made</h2>
            <div className='w-full h-fit mx-auto bg-opacity-40 mt-10 rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <RenderProjectTab image={'./img/work/blog.png'} name={'Blog Website'} url={'https://github.com/holimm/MyBlogProject'}/>
                <RenderProjectTab image={'./img/work/ecommerce.png'} name={'Ecommerce Website'} url={'https://github.com/holimm/Ecommerce-Project'}/>
                <RenderProjectTab image={'./img/work/mineinus.png'} name={'Mine In Us'} url={'#'}/>
            </div>
            <a href='https://github.com/holimm?tab=repositories' target={'_blank'} rel="noreferrer"><button className='flex px-6 py-3 mx-auto mt-10 text-xl font-semibold bg-slate-100 rounded-lg'>See all &rarr;</button></a>
        </div>
      </div>
    );  
  }
  function RenderMyJourney(){
    function DialogBox(props){
      var margin = '';
      var background = '';
      var float = '';
      var text = '';
      var pos = '';
      if(props.position === 'left'){
        pos = 'left';
        margin = 'mr-5';
        background = 'bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500';
        float = '';
        text = 'text-end';
      }
      else {
        pos = 'right';
        margin = 'ml-5';
        background = 'bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500';
        float = 'float-right';
        text = 'text-start';
      };
      return(
        <div className='w-full h-20 mt-10'>
          <div className={`w-1/2 px-8 h-fit bg-transparent z-10 absolute inline-block ${pos}-0`}>
            <div className={`w-full px-5 py-2 h-full ${background} ${float} rounded-lg`}>
              <p className={`${text} ${margin} text-sm sm:text-md md:text-xl`}>{props.title}</p>
              <p className={`${text} ${margin} text-xs sm:text-sm md:text-lg`}>{props.period}</p>
            </div>
          </div>
          <div className='h-10 w-10 rounded-full bg-white z-40 mx-auto relative border-4 border-sky-600'>
            <div className='h-6 w-6 bg-cover bg-center mx-auto mt-1' style={{backgroundImage: `url('./img/icon/briefcase.svg')`}}></div>  
          </div> 
        </div>
      );
    }
    return (
      <div className='container-fluid bg-slate-100' ref={refJourney}>
        <div className="h-full w-11/12 sm:w-8/12 md:w-3/4 mx-auto pt-10 pb-16 relative">
        <h2 className="font-mono font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center box-decoration-clone bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500">My Journey</h2>
            <div className='w-full h-fit relative'>
                  <div className='w-1/12 h-fit mx-auto'>
                    <div className='w-1/12 h-fit mx-auto'>
                      <div className='w-2 h-full bg-neutral-800 mx-auto z-10 absolute'></div>
                    </div>     
                  </div>
                  <DialogBox position={'left'} title='Began my journey at Saigon University' period='9/2019 - Present'/>
                  <DialogBox position={'right'} title='Started with PHP, MySQL' period='2/2021'/>
                  <DialogBox position={'left'} title='Started developing MineInUs website version 1, using Bootstrap,PHP.' period='8/2021'/>
                  <DialogBox position={'right'} title='Updated MineInUs website to version 2, using JQuery AJAX, PHP.' period='4/2022'/>
                  <DialogBox position={'left'} title='Started with ReactJS,NodeJS and TailwindCSS' period='7/2022'/>
            </div>
          <button className='flex px-6 py-3 mt-28 md:mt-10 mx-auto text-white text-xl font-semibold bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-lg'>See all &rarr;</button>
        </div>
      </div>
    );  
  }
  function RenderFooter(){
    return (
      <div className='container-fluid bg-gradient-to-r from-blue-700 via-sky-700 to-cyan-700 relative'>
        <div className="h-fit w-5/6 mx-auto pt-8 pb-8">
            <div className='w-full h-full mx-auto rounded-md grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6'>
                <div className='h-full w-full md:ml-3'>
                  <p className='text-3xl text-white text-start font-semibold mt-3 '>Ho Lim's Portfolio</p>
                  <p className='text-md md:text-lg text-white text-start mt-3' style={{fontFamily: 'Gantari'}}>Thank you for visiting my personal portfolio website</p>
                </div>
                <div className='h-full w-full md:ml-3'>
                  <p className='text-3xl text-white text-start font-semibold mt-3'>Quick Links</p>
                  <p onClick={()=>executeScrollEvent(refHeader)} className='text-md md:text-lg text-white text-start mt-3 ml-3 cursor-pointer' style={{fontFamily: 'Gantari'}}>&rarr; Home</p>
                  <p onClick={()=>executeScrollEvent(refAboutme)} className='text-md md:text-lg text-white text-start mt-3 ml-3 cursor-pointer' style={{fontFamily: 'Gantari'}}>&rarr; About</p>
                  <p onClick={()=>executeScrollEvent(refSkills)} className='text-md md:text-lg text-white text-start mt-3 ml-3 cursor-pointer' style={{fontFamily: 'Gantari'}}>&rarr; Skills</p>
                  <p onClick={()=>executeScrollEvent(refEducation)} className='text-md md:text-lg text-white text-start mt-3 ml-3 cursor-pointer' style={{fontFamily: 'Gantari'}}>&rarr; Education</p>
                  <p onClick={()=>executeScrollEvent(refProjects)} className='text-md md:text-lg text-white text-start mt-3 ml-3 cursor-pointer' style={{fontFamily: 'Gantari'}}>&rarr; Projects</p>
                  <p onClick={()=>executeScrollEvent(refJourney)} className='text-md md:text-lg text-white text-start mt-3 ml-3 cursor-pointer' style={{fontFamily: 'Gantari'}}>&rarr; Journey</p>
                </div>
                <div className='h-full w-full md:ml-3'>
                  <p className='text-3xl text-white text-start font-semibold mt-3'>Contact Info</p>
                  <p className='text-md md:text-lg text-white text-start mt-3 truncate' style={{fontFamily: 'Gantari'}}>Email: kahn12345678@gmail.com</p>
                  <p className='text-md md:text-lg text-white text-start mt-3' style={{fontFamily: 'Gantari'}}>From: Ho Chi Minh City, Viet Nam</p>
                  <div className="w-full flex justify-start items-center mt-5">
                    <div className="w-10 h-10 bg-white hover:bg-slate-200 cursor-pointer rounded-full">
                      <div className="bg-cover bg-center mx-auto mt-1 w-8 h-8" style={{backgroundImage: `url(./img/icon/facebook.svg)`}}></div>
                    </div>
                    <div className="w-10 h-10 bg-white hover:bg-slate-200 ml-8 cursor-pointer rounded-full">
                      <div className="bg-cover bg-center mx-auto mt-1 w-8 h-8" style={{backgroundImage: `url(./img/icon/instagram.svg)`}}></div>
                    </div>
                    <div className="w-10 h-10 bg-white hover:bg-slate-200 ml-8 cursor-pointer rounded-full">
                      <div className="bg-cover bg-center mx-auto mt-1 w-8 h-8" style={{backgroundImage: `url(./img/icon/github.svg)`}}></div>
                    </div>
                  </div>
                </div>
            </div>
            <hr className='my-8'></hr>
            <p className='text-lg text-center text-white mt-3 ml-3 font-bold' style={{fontFamily: 'Gantari'}}>Design By Nguyen Lim Thai Ho</p>
        </div>
      </div>
    );  
  }
  return <>
    <Wallpaper/>
    <RenderHome/>
    <RenderSkills/>
    <RenderEducation/>
    <RenderMyProject/>
    <RenderMyJourney/>
    <RenderFooter/>
  </>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
