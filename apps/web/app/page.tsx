'use client'
import { MyHome } from "@/components/MyHome"
import { RecoilRoot } from "recoil"

const Home = () => {
  return (
    <RecoilRoot>
      <MyHome />  
    </RecoilRoot>  
  )
}

export default Home 