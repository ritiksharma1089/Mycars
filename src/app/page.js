
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './compoments/Hero/Hero';
import Crousel from './compoments/Crousel/Crousel';
import Chooseus from './compoments/Whychosseus/chooseus';
import Scrolldiv from './compoments/scrollpicdiv/Scrolldiv';
import CardList from './compoments/CardList/CardList';
import Commentcard from './compoments/extrass/Commentcard';
import Comment from './compoments/extrass/Comment';

export default function Home() {
  return (

    <div>
     
      <Scrolldiv/>
      <CardList/>
      <Hero/>
      <Chooseus/>
      <Crousel/>
      <Comment/>

    </div>
      
  );
}
