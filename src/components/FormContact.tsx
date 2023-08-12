'use client'

import Inpunt from "@/atoms/Inpunt";
import Label from "@/atoms/Label";
import TextArea from "@/atoms/TextArea";
import { FormEvent } from "react";

export default function FormContact() {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const description = formData.get("description") as string
    console.log({ name, email, description });
  }

  return (
    <div className="col-span-2 p-4 md:px-14 mb-20">
      <form onSubmit={handleSubmit} className='w-full p-9 pb-11 flex flex-col gap-5'>
        <div className="flex flex-col">
          <Label htmlFor='name' text="Name" />
          <Inpunt
            type="text"
            id="name"
            placeholder="Jesús"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor='email' text="Email" />
          <Inpunt
            type="email"
            id="email"
            placeholder="jesus@email.com"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor='description' text="Description" />
          <TextArea
            id="description"
            placeholder="Hola quetal, me gustaria contactarte..."
          />
        </div>
        <div className="flex justify-center">
          <button className="rounded-2xl w-32 p-3 bg-blue-aqua text-black hover:bg-blue-aqua-h" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
