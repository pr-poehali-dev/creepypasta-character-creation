
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Navbar from '@/components/ui/navbar'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { toast } from '@/components/ui/use-toast'

// Схема валидации формы
const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }).max(50),
  type: z.string({ required_error: "Выберите тип персонажа" }),
  origin: z.string().min(5, { message: "История происхождения должна содержать не менее 5 символов" }),
  appearance: z.string().min(10, { message: "Опишите внешность подробнее" }),
  abilities: z.string().optional(),
  scaryFactor: z.number().min(1).max(10),
  vulnerabilities: z.string().optional(),
  motivations: z.string().min(10, { message: "Опишите мотивацию персонажа" }),
  preferredVictims: z.string().optional(),
  hauntingLocation: z.string().optional(),
  typeOfThreat: z.enum(["Физическая", "Психологическая", "Сверхъестественная"], {
    required_error: "Выберите тип угрозы",
  }),
})

type FormValues = z.infer<typeof formSchema>

const CreateCharacter = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      origin: "",
      appearance: "",
      abilities: "",
      scaryFactor: 5,
      vulnerabilities: "",
      motivations: "",
      preferredVictims: "",
      hauntingLocation: "",
      typeOfThreat: "Физическая",
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    toast({
      title: "Персонаж создан!",
      description: `${data.name} добавлен в мир ужасов.`,
    })
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-200">
      <Navbar />
      
      <main className="container mx-auto max-w-4xl py-10 px-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-red-500">Создание персонажа</h1>
        <p className="text-xl text-center mb-10">
          Придумайте зловещего персонажа для мира Creepypasta
        </p>
        
        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Основные сведения */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-red-400">Основные сведения</h2>
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Имя персонажа</FormLabel>
                      <FormControl>
                        <Input placeholder="Например: Безликий" {...field} className="bg-zinc-800 border-zinc-700" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Тип персонажа</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-zinc-800 border-zinc-700">
                            <SelectValue placeholder="Выберите тип" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-zinc-800 border-zinc-700">
                          <SelectItem value="ghost">Призрак</SelectItem>
                          <SelectItem value="monster">Монстр</SelectItem>
                          <SelectItem value="demon">Демон</SelectItem>
                          <SelectItem value="psychopath">Психопат</SelectItem>
                          <SelectItem value="unknown">Неизвестное существо</SelectItem>
                          <SelectItem value="cryptid">Криптид</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Внешность и происхождение */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-red-400">Внешность и происхождение</h2>
                
                <FormField
                  control={form.control}
                  name="appearance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Внешность</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Опишите как выглядит ваш персонаж..."
                          className="min-h-[100px] bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="origin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>История происхождения</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Расскажите, откуда появился ваш персонаж..."
                          className="min-h-[100px] bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Способности и характеристики */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-red-400">Способности и характеристики</h2>
                
                <FormField
                  control={form.control}
                  name="abilities"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Способности</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Какими способностями обладает ваш персонаж?"
                          className="bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="scaryFactor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Фактор страха (1-10)</FormLabel>
                      <FormControl>
                        <div className="space-y-2">
                          <Slider
                            min={1}
                            max={10}
                            step={1}
                            defaultValue={[field.value]}
                            onValueChange={(vals) => field.onChange(vals[0])}
                            className="py-4"
                          />
                          <div className="flex justify-between text-xs text-zinc-400">
                            <span>1 - Слегка жуткий</span>
                            <span>5 - Пугающий</span>
                            <span>10 - Ужасающий</span>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="vulnerabilities"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Уязвимости</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Есть ли у персонажа уязвимости или слабости?"
                          className="bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Поведение */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-red-400">Поведение</h2>
                
                <FormField
                  control={form.control}
                  name="motivations"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Мотивации</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Что движет вашим персонажем?"
                          className="bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="preferredVictims"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Предпочитаемые жертвы</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Например: дети, одинокие путники и т.д."
                          className="bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="hauntingLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Место обитания</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Где можно встретить вашего персонажа?"
                          className="bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="typeOfThreat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Тип угрозы</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Физическая" id="threat-physical" />
                            <FormLabel htmlFor="threat-physical" className="font-normal cursor-pointer">
                              Физическая угроза
                            </FormLabel>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Психологическая" id="threat-psychological" />
                            <FormLabel htmlFor="threat-psychological" className="font-normal cursor-pointer">
                              Психологическая угроза
                            </FormLabel>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Сверхъестественная" id="threat-supernatural" />
                            <FormLabel htmlFor="threat-supernatural" className="font-normal cursor-pointer">
                              Сверхъестественная угроза
                            </FormLabel>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full bg-red-700 hover:bg-red-600 text-white">
                  Создать персонажа
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
      
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-6">
        <div className="container mx-auto max-w-6xl text-center text-zinc-400">
          <p>© 2025 CreepyTales. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default CreateCharacter
