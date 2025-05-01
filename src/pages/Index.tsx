
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/ui/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const Index = () => {
  const featuredStories = [
    {
      id: 1,
      title: "Улыбающийся человек",
      excerpt: "Я видел его каждую ночь, стоящего у окна с неестественной улыбкой...",
      image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Существо из шкафа",
      excerpt: "Когда я был ребенком, я всегда знал, что в моем шкафу что-то живет...",
      image: "https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Последний автобус",
      excerpt: "Никогда не садитесь в последний автобус, особенно если вы единственный пассажир...",
      image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-200">
      <Navbar />
      
      <main>
        {/* Hero section */}
        <section className="py-20 px-6 bg-gradient-to-b from-zinc-900 to-zinc-950">
          <div className="container mx-auto max-w-6xl text-center">

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-red-500">
              XoppopsladyH: мир ужасов
            </h1>

            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Погрузись в мир мрачных историй, создай своего зловещего персонажа и стань частью кошмара
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-700 hover:bg-red-600">
                <Icon name="BookOpen" className="mr-2" size={20} />
                Читать истории
              </Button>
              <Button asChild size="lg" variant="outline" className="border-red-700 text-red-400 hover:text-red-300">
                <Link to="/create-character">
                  <Icon name="UserPlus" className="mr-2" size={20} />
                  Создать персонажа
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured stories */}
        <section className="py-16 px-6 bg-zinc-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-10 text-center">Популярные истории</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredStories.map(story => (
                <Card key={story.id} className="bg-zinc-800 border-zinc-700 overflow-hidden hover:border-red-800 transition-colors">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="h-48 w-full object-cover"
                  />
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-red-400">{story.title}</h3>
                    <p className="text-gray-300 mb-4">{story.excerpt}</p>
                    <Button variant="link" className="text-red-400 p-0 hover:text-red-300">
                      Читать полностью <Icon name="ArrowRight" className="ml-1" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="outline" className="border-red-700 text-red-400 hover:text-red-300">
                Смотреть все истории
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-16 px-6 bg-gradient-to-t from-zinc-950 to-zinc-900">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Создай своего персонажа</h2>
            <p className="text-xl mb-8">
              Дай волю своему воображению — создай уникального персонажа для мира страшных историй
            </p>
            <Button asChild size="lg" className="bg-red-700 hover:bg-red-600">
              <Link to="/create-character">
                <Icon name="UserPlus" className="mr-2" size={20} />
                Начать создание
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-6">
        <div className="container mx-auto max-w-6xl text-center text-zinc-400">
          <p>© 2025 CreepyTales. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default Index
