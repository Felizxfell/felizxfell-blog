'use client'

import Button from "@/atoms/Button";
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
    <section className="col-span-2 md:px-14 mt-5 mb-10">
      <div className="p-2 rounded-md bg-slate-700">
        <form onSubmit={handleSubmit} className='rounded-2xl bg-shadow w-full p-9 pb-11 flex flex-col gap-5' aria-label="form-contact">
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
              placeholder="Hola que tal, me gustaria contactarte..."
            />
          </div>
          <div className="flex justify-center">
            <Button>
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
