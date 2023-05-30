"use client"
import { BasicCard } from '../components/Cards/BasicCard/BasicCard'
import { Featured } from '../components/Featured/Featured'
import { Navbar } from '../components/Navbar/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import './page.css';

export default function Home() {
  return (
    <main>
      <div>
       <Navbar/>
       <div style={{padding:'92px',display: 'flex'}}>
        <Swiper modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} loop={true} height={'1000px'}>
          <SwiperSlide>
            <Featured title="Hello World" image="/pneu.png">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, tempore. 
              Eius consequuntur dolorem optio error illo! Veritatis nemo commodi, 
              optio non quas, placeat est delectus modi ipsum error recusandae ducimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, numquam non quos 
              soluta laboriosam praesentium ullam earum magnam ipsa recusandae maxime 
              facere repellat illum veniam in omnis dicta animi eaque!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, 
              illum quidem aliquam eos vitae ducimus voluptate perferendis beatae 
              voluptates adipisci? Facilis laborum minima odit, rem consectetur iusto a eveniet non.
            </Featured> 
          </SwiperSlide>
          <SwiperSlide>
            <Featured title="Hello World" image="/pneu.png">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, tempore. 
              Eius consequuntur dolorem optio error illo! Veritatis nemo commodi, 
              optio non quas, placeat est delectus modi ipsum error recusandae ducimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, numquam non quos 
              soluta laboriosam praesentium ullam earum magnam ipsa recusandae maxime 
              facere repellat illum veniam in omnis dicta animi eaque!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, 
              illum quidem aliquam eos vitae ducimus voluptate perferendis beatae 
              voluptates adipisci? Facilis laborum minima odit, rem consectetur iusto a eveniet non.
            </Featured> 
          </SwiperSlide>
          <SwiperSlide>
            <Featured title="Hello World" image="/pneu.png">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, tempore. 
              Eius consequuntur dolorem optio error illo! Veritatis nemo commodi, 
              optio non quas, placeat est delectus modi ipsum error recusandae ducimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, numquam non quos 
              soluta laboriosam praesentium ullam earum magnam ipsa recusandae maxime 
              facere repellat illum veniam in omnis dicta animi eaque!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, 
              illum quidem aliquam eos vitae ducimus voluptate perferendis beatae 
              voluptates adipisci? Facilis laborum minima odit, rem consectetur iusto a eveniet non.
            </Featured> 
          </SwiperSlide>
        </Swiper>
       </div>
       <div style={{padding:'20px',display: 'flex', alignItems: 'center',marginLeft: '100px'}}>
        <h1>Latest Products</h1>
       </div>
        <div style={{padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
          <BasicCard title='Kit distribution Blablabla'
            subtitle='Pièces peugeot, 3008'
            note={3}
            raters={263}
          />
          <BasicCard title='Kit distribution Blablabla'
            subtitle='Pièces peugeot, 3008'
            note={3}
            raters={263}
          />
          <BasicCard title='Kit distribution Blablabla'
            subtitle='Pièces peugeot, 3008'
            note={3}
            raters={263}
          />
          <BasicCard title='Kit distribution Blablabla'
            subtitle='Pièces peugeot, 3008'
            note={3}
            raters={263}
          />
        </div>
      </div>
    </main>
  )
}