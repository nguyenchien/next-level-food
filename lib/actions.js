"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInValid(text) {
  return !text || text.trim() === '';
}
export async function ShareMeal(previewState, formData) {
  const meal = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
  }
  if (
    isInValid(meal.creator) ||
    isInValid(meal.creator_email) ||
    isInValid(meal.title) ||
    isInValid(meal.summary) ||
    isInValid(meal.instructions) ||
    !meal.image ||
    meal.image.size === 0 ||
    !meal.creator_email.includes('@')
  ) {
    return {
      message: 'Invalid input'
    }
  }
  await saveMeal(meal);
  redirect('/meals');
}