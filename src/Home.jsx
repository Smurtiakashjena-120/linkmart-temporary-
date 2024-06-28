import {SlideBar} from './components/SlideBar'
import {Popular} from './components/Popular'
import {FeatureProduct} from './components/FeatureProducts'



export function Home() {
  return (
    <div>
      <SlideBar></SlideBar>
      <Popular></Popular>
      <FeatureProduct></FeatureProduct>
    </div>
  );
}


