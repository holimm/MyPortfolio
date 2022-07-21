import React from 'react';
import ReactDOM from 'react-dom/client';
import TypeAnimation from 'react-type-animation';

const App = () => {
  function Wallpaper(){
    return(
      <div className="container-fluid z-30">
        <div className="w-full h-fit">
          <div className="bg-cover bg-center w-full" style={{backgroundImage: `url('./img/wallpaper.jpg')`, height: '100vh'}}>
            <Header/>
            <div className="h-fit mt-80 w-full md:w-7/12 float-right">
              <h2 className="text-4xl text-center md:text-left md:text-5xl font-semibold" style={{fontFamily: 'Julius Sans One'}}>Hello, I'm <a className="font-bold text-cyan-500">Nguyen Lim Thai Ho</a></h2>
              <p className="text-4xl mx-auto md:mx-0 md:text-5xl w-fit my-5 font-semibold" style={{fontFamily: 'Julius Sans One'}}>I am into&nbsp;
              <a className="text-4xl mx-auto md:mx-0 md:text-5xl w-fit my-5 font-semibold text-white box-decoration-clone bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500" style={{fontFamily: 'Gantari'}}>
              <TypeAnimation
                cursor={true}
                sequence={['Web Development', 1000, 'Front-End Development',1000,'Back-End Development',1000]}
                wrapper="b"
                repeat={Infinity}
              />             
              </a>
              </p>
              <div className="flex justify-start items-center">
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
    return (
      <>
      <nav className="flex justify-start items-center w-full h-20 fixed bg-white">
            <ul className="flex justify-between items-center ml-12">
              <li className="mx-5 text-xl px-3 py-2 uppercase cursor-pointer font-semibold">&#60; HoLim /&#62;</li>
            </ul>
      </nav>
      <nav className="flex justify-end items-center w-full h-20 fixed bg-transparent">
            <ul className="flex justify-between items-center mr-12">
              <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer">Home</li>
              <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer">About</li>
              <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer">Skills</li>
              <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer">Education</li>
              <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer">Project</li>
              <li className="mx-5 text-xl px-3 py-2 uppercase hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 hover:text-white cursor-pointer">Contact</li>
            </ul>
      </nav>
      </>
    );
  }
  function RenderHome(){
    return (
      <div className='container-fluid bg-slate-100'>
        <div className="h-fit w-5/6 mx-auto pt-10 pb-28">
            <h2 className="font-mono font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center box-decoration-clone bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500">About Me</h2>
            <div className="w-full h-fit inline-block mt-12">
              <div className='w-3/12 h-full float-left'>
                <img className='rounded-xl shadow-xl shadow-slate-500' src="./img/avatar.jpg"></img>
              </div>
              <div className='w-8/12 h-full float-right'>
                <h2 className='text-3xl font-extrabold' style={{fontFamily: 'Gantari'}}>I'm <a className='text-blue-500'>Nguyen Lim Thai Ho</a></h2>
                <h2 className='text-xl font-semibold' style={{fontFamily: 'Gantari'}}>Web Developer</h2>
                <p className='text-lg font-bold mt-5' style={{fontFamily: 'Gantari'}}>I'm a Software Engineering undergraduate at Saigon University. I'm pursuing a career as a front-end web developer. To understand more about ReactJS and NodeJS, I'm currently working on several projects to improve my skills, this is one of them. You can see some of my work in this portfolio. Thank you for visiting.</p>
                <div className='grid grid-cols-2'>
                  <div className='mt-3'>
                    <a className='text-lg font-bold mt-5 text-blue-500' style={{fontFamily: 'Gantari'}}>Name: </a><a className='text-lg'>Nguyễn Lim Thái Hồ</a>
                  </div>
                  <div className='mt-3'>
                    <a className='text-lg font-bold mt-5 text-blue-500' style={{fontFamily: 'Gantari'}}>Age: </a><a className='text-lg'>21</a>
                  </div>
                  <div className='mt-3'>
                    <a className='text-lg font-bold mt-5 text-blue-500' style={{fontFamily: 'Gantari'}}>Email: </a><a className='text-lg'>kahn12345678@gmail.com</a>
                  </div>
                  <div className='mt-3'>
                    <a className='text-lg font-bold mt-5 text-blue-500' style={{fontFamily: 'Gantari'}}>From: </a><a className='text-lg'>Ho Chi Minh City, Viet Nam</a>
                  </div>
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
            <img className='w-20 h-20 mt-5 mx-auto' src={props.url}/>
          </div>
          <div className='w-full h-1/4 inline-block'>
            <p className='text-2xl text-center font-semibold'>{props.name}</p>
          </div>
        </div>
      );
    }
    return (
      <div className='container-fluid bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500'>
        <div className="h-fit w-5/6 mx-auto pt-10 pb-28">
            <h2 className="font-mono font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center box-decoration-clone ">Skills 	&amp; Abilities</h2>
            <div className='w-full h-fit mx-auto bg-neutral-800 bg-opacity-40 mt-10 rounded-xl'>
              <div className="container w-full h-fit py-10 px-10 grid grid-cols-6 gap-10">
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
        <div className='w-full h-52 mt-10 bg-white shadow-lg shadow-gray-400'>
          <div className='w-2/6 h-full bg-cover bg-center float-left' style={{backgroundImage: `url('${props.url}')`}}></div>
          <div className='w-4/6 h-full float-left'>
            <div className='flex-row justify-between items-center mt-12'>
                <p className='text-2xl mt-2 ml-5 font-semibold'>{props.name}</p>
                <p className='text-2xl mt-2 ml-5'>{props.period}</p>
                <p className='text-2xl mt-2 ml-5 font-semibold'>{props.major}</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='container-fluid bg-slate-100'>
        <div className="h-fit w-4/6 mx-auto pt-10 pb-20">
            <h2 className="font-mono font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center box-decoration-clone bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500">My Education</h2>
            <div className="w-full h-fit inline-block">
              <RenderEducationSchool url={'./img/saigonuni.jpg'} name={'Saigon University'} period={'2019 - Present | Pursuing'} major={''}/>
              <RenderEducationSchool url={'./img/mariecurie.jpg'} name={'Marie Curie High School'} period={'2016 - 2019 | Completed'} major={''}/>
            </div>
        </div>
      </div>
    );  
  }
  function RenderMyWork(){
    function RenderWorkTab(props){
      return(
        <div className='bg-cover bg-center w-full h-64 pb-3 mx-auto rounded-lg relative' style={{backgroundImage: `url('${props.url}')`}}>
          <div className='flex w-full bg-white h-1/4 hover:transition-all hover:h-3/4 hover:duration-300 duration-300 hover:ease-in-out rounded-b-lg bottom-0 absolute'>
            <p className='text-2xl text-center font-semibold mt-3 ml-3' style={{fontFamily: 'Gantari'}}>{props.name}</p>
          </div>
        </div>
      );
    }
    return (
      <div className='container-fluid bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500'>
        <div className="h-fit w-5/6 mx-auto pt-10 pb-28">
            <h2 className="font-mono font-extrabold w-fit px-4 mx-auto text-4xl text-white text-center box-decoration-clone ">Projects Made</h2>
            <div className='w-full h-fit mx-auto bg-opacity-40 mt-10 rounded-md grid grid-cols-3 gap-6'>
                <RenderWorkTab url={'./img/work/blog.png'} name={'Blog Website'}/>
                <RenderWorkTab url={'./img/work/ecommerce.png'} name={'Ecommerce Website'}/>
                <RenderWorkTab url={'./img/work/mineinus.png'} name={'Mine In Us'}/>
            </div>
        </div>
      </div>
    );  
  }
  return <>
    <Wallpaper/>
    <RenderHome/>
    <RenderSkills/>
    <RenderEducation/>
    <RenderMyWork/>
  </>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
