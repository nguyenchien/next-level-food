"use server";

export async function ShareMeal(formData) {
  const meal = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    title: formData.get('title'),
    sumary: formData.get('sumary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
  }
  console.log(meal);
}