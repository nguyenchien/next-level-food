import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("Loading meals failed.");
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

// Save meal to DB
export async function saveMeal(meal) {
  // Generate slug from title by slugify package
  meal.slug = slugify(meal.title, {lower: true});

  // Protect xss against by xss package
  meal.instructions = xss(meal.instructions);

  // Get file name image
  const extention = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extention}`;
  
  // Save image to Server
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Save image failed');
    }
  });

  // Save image to DB
  meal.image = `/images/${fileName}`;

  // Save meal to DB
  db.prepare(`
    INSERT INTO meals
    (
      'slug',
      'title',
      'image',
      'summary',
      'instructions',
      'creator',
      'creator_email'
    )
    values(
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `).run(meal);
}