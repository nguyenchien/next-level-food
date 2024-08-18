"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function ShareMeal(formData) {
  const meal = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
  }
  saveMeal(meal);
  redirect('/meals')
}