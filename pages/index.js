import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("e_key") && localStorage.getItem("a_key") && localStorage.getItem("user")) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <div className="">
      <Head>
        <title>0xNotes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex p-4 w-full text-white bg-gray-700">
        <div className="my-auto flex">
          <Image src="/logo/2rev.png" className="h-8 my-auto mx-1"/>
          <span className="my-auto text-2xl mx-1">0xNotes</span>
        </div>
        <div style={{ display: isLoggedIn ? 'none' : 'block' }} className="ml-auto">
          <Link href="/login">
            <a className="mx-1">Login</a>
          </Link>
          <Link href="/signup">
            <button className="accent my-auto mx-1 px-2 py-1 rounded-md">Sign Up</button>
          </Link>
        </div>
        <div style={{ display: isLoggedIn ? 'block' : 'none' }} className="ml-auto">
          <Link href="/dash">
            <button className="accent my-auto mx-1 px-2 py-1 rounded-md">Dashboard</button>
          </Link>
        </div>
      </header>

      <main className="">
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est. Ut eu sem integer vitae justo eget magna fermentum iaculis. Mauris vitae ultricies leo integer malesuada nunc vel risus. Integer vitae justo eget magna fermentum. Nulla porttitor massa id neque aliquam. Viverra suspendisse potenti nullam ac tortor. Commodo ullamcorper a lacus vestibulum sed arcu non. Molestie nunc non blandit massa enim nec dui nunc. Volutpat est velit egestas dui id ornare arcu odio ut. Lobortis elementum nibh tellus molestie nunc non blandit. Velit sed ullamcorper morbi tincidunt ornare massa eget. Non sodales neque sodales ut etiam sit amet nisl purus. Consectetur lorem donec massa sapien faucibus et molestie ac.
          <br></br>
          <br></br>
          Tristique senectus et netus et malesuada fames ac turpis. Odio facilisis mauris sit amet. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Maecenas sed enim ut sem viverra aliquet eget sit amet. Quis blandit turpis cursus in hac habitasse platea. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Volutpat ac tincidunt vitae semper quis lectus nulla. Pellentesque dignissim enim sit amet venenatis. Volutpat sed cras ornare arcu. Lorem ipsum dolor sit amet consectetur. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Scelerisque viverra mauris in aliquam sem fringilla ut. Mattis nunc sed blandit libero volutpat.
          <br></br>
          <br></br>
          Tristique senectus et netus et malesuada fames ac turpis. Risus at ultrices mi tempus imperdiet. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Dictumst quisque sagittis purus sit amet volutpat consequat. Elit sed vulputate mi sit amet mauris. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Risus quis varius quam quisque id. Libero id faucibus nisl tincidunt eget nullam. A scelerisque purus semper eget duis at tellus. Interdum posuere lorem ipsum dolor sit amet. Purus sit amet luctus venenatis lectus magna fringilla. Sed libero enim sed faucibus turpis in eu mi. Tempus quam pellentesque nec nam. Ipsum a arcu cursus vitae congue. Senectus et netus et malesuada fames ac turpis egestas sed. Ut diam quam nulla porttitor massa id neque aliquam. Quam id leo in vitae turpis massa sed elementum.
          <br></br>
          <br></br>
          Viverra accumsan in nisl nisi. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Morbi quis commodo odio aenean sed adipiscing. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Risus nec feugiat in fermentum posuere urna nec. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Vitae congue mauris rhoncus aenean. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Vitae et leo duis ut diam quam. Mattis rhoncus urna neque viverra justo nec ultrices dui. Facilisis mauris sit amet massa. Nec feugiat in fermentum posuere. Vulputate ut pharetra sit amet aliquam id diam maecenas. Aliquam sem et tortor consequat id porta nibh venenatis. Risus nec feugiat in fermentum posuere. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Pellentesque massa placerat duis ultricies lacus sed. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Iaculis nunc sed augue lacus viverra. Ac auctor augue mauris augue neque.
          <br></br>
          <br></br>
          Condimentum vitae sapien pellentesque habitant morbi. Consectetur libero id faucibus nisl tincidunt eget nullam non. Fames ac turpis egestas sed. Non odio euismod lacinia at. Nisi vitae suscipit tellus mauris a diam maecenas. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Nisi quis eleifend quam adipiscing vitae. Tempus quam pellentesque nec nam aliquam. Elementum facilisis leo vel fringilla est. Malesuada proin libero nunc consequat. Nullam vehicula ipsum a arcu cursus. Pretium aenean pharetra magna ac. Eu non diam phasellus vestibulum. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.
          <br></br>
          <br></br>
          Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Lorem ipsum dolor sit amet consectetur adipiscing. Purus viverra accumsan in nisl nisi. Tellus cras adipiscing enim eu turpis. Elit eget gravida cum sociis natoque penatibus et. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Fermentum leo vel orci porta non. Turpis egestas maecenas pharetra convallis. Quam pellentesque nec nam aliquam sem et tortor consequat. Metus vulputate eu scelerisque felis imperdiet.
          <br></br>
          <br></br>
          Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Nibh nisl condimentum id venenatis. Convallis aenean et tortor at risus viverra adipiscing at in. Gravida arcu ac tortor dignissim convallis. Lectus urna duis convallis convallis tellus. Egestas tellus rutrum tellus pellentesque eu. Ultrices dui sapien eget mi proin sed libero enim. Ultrices dui sapien eget mi proin sed libero enim sed. Elementum nisi quis eleifend quam adipiscing vitae. Nibh mauris cursus mattis molestie a iaculis. Vitae et leo duis ut diam quam nulla porttitor. Eu volutpat odio facilisis mauris sit amet massa. Sed risus ultricies tristique nulla aliquet enim tortor. Gravida in fermentum et sollicitudin ac orci. Sed turpis tincidunt id aliquet. Aliquet nibh praesent tristique magna sit amet purus. Non tellus orci ac auctor augue mauris augue.
          <br></br>
          <br></br>
          Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Euismod nisi porta lorem mollis aliquam ut. Et sollicitudin ac orci phasellus egestas. Enim facilisis gravida neque convallis a cras. Nibh nisl condimentum id venenatis. Amet tellus cras adipiscing enim eu. Mauris augue neque gravida in. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Urna nunc id cursus metus aliquam eleifend. Vitae auctor eu augue ut lectus. Arcu non odio euismod lacinia at quis risus sed. Vivamus at augue eget arcu dictum. Risus viverra adipiscing at in tellus. Sit amet facilisis magna etiam tempor orci eu. Vestibulum sed arcu non odio euismod lacinia.
          <br></br>
          <br></br>
          Et egestas quis ipsum suspendisse ultrices gravida. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Aliquam vestibulum morbi blandit cursus risus at. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Sit amet risus nullam eget felis eget nunc. Enim sed faucibus turpis in eu mi bibendum neque. Ultricies mi eget mauris pharetra. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Lectus nulla at volutpat diam ut venenatis. Dui ut ornare lectus sit amet est. Nam at lectus urna duis convallis convallis tellus id. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Arcu vitae elementum curabitur vitae nunc sed. Ipsum consequat nisl vel pretium lectus quam id leo. Lacus luctus accumsan tortor posuere ac.
          <br></br>
          <br></br>
          Commodo viverra maecenas accumsan lacus vel. Ultricies mi eget mauris pharetra. Tincidunt ornare massa eget egestas purus viverra accumsan in. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Eget dolor morbi non arcu. Vitae proin sagittis nisl rhoncus mattis rhoncus. Lacinia at quis risus sed vulputate odio. Velit laoreet id donec ultrices tincidunt. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Velit scelerisque in dictum non consectetur a erat nam.
        </p>

      </main>

      <footer className="bg-gray-700 relative pt-1">
        <div className="container mx-auto px-6">
          <div className="sm:flex">
            <div className="mt-8 sm:mb-8 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <Image src="/logo/1rev.png" alt="0xNotes logo" className="h-40" />
                <br></br>
                
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white mt-4 md:mt-0 mb-2">About Us</span>
                <span className="my-2"><a href="#" className="text-white  text-md hover:text-blue-500">About</a></span>
                <span className="my-2"><a href="#" className="text-white  text-md hover:text-blue-500">Terms</a></span>
                <span className="my-2"><a href="#" className="text-white  text-md hover:text-blue-500">Privacy</a></span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white mt-4 md:mt-0 mb-2">Resources</span>
                <span className="my-2"><a href="#" className="text-white  text-md hover:text-blue-500">FAQ</a></span>
                <span className="my-2"><a href="#" className="text-white  text-md hover:text-blue-500">GitHub</a></span>
                <span className="my-2"><a href="#" className="text-white  text-md hover:text-blue-500">Server Status</a></span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white mt-4 md:mt-0 mb-2">Contact Us</span>
                <span className="my-2"><a href="#" className="text-white  text-md hover:text-blue-500">Contact</a></span>
                <span className="my-2"><a href="#" className="text-white  text-md hover:text-blue-500">Report Bug</a></span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white text-center w-full pb-8">
               © Copyright 2021 0xNotes
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}
