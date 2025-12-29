import {assets} from '../assets/assets'
const FooterCom = () => {
  return (
    <div className='flex items-center justify-between
    gap-4 mt-20 py-3'>

        <img src={assets.logo} width={150}/>

        <p className='flex-1 border-l border-gray-500 pl-4
         text-sm text-gray-500 max-sm:hidden'>
            Copyright @Showmick.dev | All right reserved
        </p>

        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} width={35}/>
            <img src={assets.instagram_icon} width={35}/>
            <img src={assets.twitter_icon} width={35}/>


        </div>
    </div>
  )
}

export default FooterCom