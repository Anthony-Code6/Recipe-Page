import Card from './components/Card/Card'
import ImagenLogo from './assets/images/image-omelette.jpeg'
import Imagen from './components/Imagen/Imagen'
import './App.css';
import Descriptions from './components/Descriptions/Descriptions';
import { useState } from 'react';
import List from './components/List/List';
import Table from './components/Table/table';

function App() {

  const [prepatarion, setPreparation] = useState([
    {
      subtitulo: 'Total',
      descripcion: 'Approximately 10 minutes'
    },
    {
      subtitulo: 'Preparation',
      descripcion: '5 minutes'
    },
    {
      subtitulo: 'Cooking',
      descripcion: '5 minutes'
    }
  ])

  const [ingredients, setIngredients] = useState([
    {
      subtitulo: '',
      descripcion: '2-3 large eggs'
    },
    {
      subtitulo: '',
      descripcion: 'Salt, to taste'
    },
    {
      subtitulo: '',
      descripcion: 'Pepper, to taste'
    },
    {
      subtitulo: '',
      descripcion: '1 tablespoon of butter or oil'
    },
    {
      subtitulo: '',
      descripcion: 'Optional fillings: cheese, diced vegetables, cooked meats, herbs'
    }
  ])

  const [instructions, setInstructions] = useState([
    {
      subtitulo: 'Beat the eggs',
      descripcion: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.'
    },
    {
      subtitulo: 'Heat the pan',
      descripcion: 'Place a non-stick frying pan over medium heat and add butter or oil.'
    },
    {
      subtitulo: 'Cook the omelette',
      descripcion: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.'
    },
    {
      subtitulo: 'Add fillings (optional)',
      descripcion: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.'
    },
    {
      subtitulo: 'Fold and serve',
      descripcion: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.'
    },
    {
      subtitulo: 'Enjoy',
      descripcion: 'Serve hot, with additional salt and pepper if needed.'
    }
  ])

  const [nutrition, setNutrition] = useState([
    {
      titulo: 'Calories',
      descriptcion: '277kcal'
    },
    {
      titulo: 'Carbs',
      descriptcion: '0g'
    },
    {
      titulo: 'Protein',
      descriptcion: '20g'
    }, {
      titulo: 'Fat',
      descriptcion: '22g'
    }
  ])

  return (
    <>
      <div className="content-recipe">
        <Card>
          <div className="logo">
            <Imagen url={ImagenLogo} alt={'Imagen'} />
          </div>
          <div className="content">
            <Descriptions title={'Simple Omelette Recipe'} colorText={'hsl(30, 10%, 34%)'}
              descriptions={'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.'} />

            <section className="preparation">
              <List color={'hsl(332, 51%, 32%)'} colorSubtitle={'hsl(24, 5%, 18%)'}
                colorText={'hsl(30, 10%, 34%)'} ulOl={true} normal={true} title={'Preparation time'} list={prepatarion} />
            </section>

            <section className="ingredients">
              <List color={'hsl(14, 45%, 36%)'} colorSubtitle={'hsl(24, 5%, 18%)'}
                colorText={'hsl(30, 10%, 34%)'} ulOl={true} normal={false} title={'Ingredients'} list={ingredients} />
            </section>

            <hr />

            <section className="instructions">
              <List color={'hsl(14, 45%, 36%)'} colorSubtitle={'hsl(24, 5%, 18%)'}
                colorText={'hsl(30, 10%, 34%)'} ulOl={false} section={false} title={'Intructions'} list={instructions} />
            </section>

            <hr />

            <section className='nutrition'>
              <h4 className='nutrition-title'>Nutrition</h4>
              <p className='nutrition-description'>The table below shows nutritional values per serving without the additional fillings.</p>
              <Table tabla={nutrition} colorText={'hsl(30, 10%, 34%)'} color={'hsl(14, 45%, 36%)'} />
            </section>
          </div>



        </Card>
      </div>
    </>
  )
}

export default App
