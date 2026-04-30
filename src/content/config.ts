import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

const image = z.object({ image: z.string(), caption: z.string() });
const document = z.object({ name: z.string(), doc: z.string() });
const teacher = z.object({
  name: z.string(),
  image: z.string(),
  image_alt: z.string(),
  description: z.string(),
});
const materia = z.object({
  title: z.string(),
  text: z.string(),
  image: z.string(),
  file: z.string(),
});

const veranoCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),
    images: z.array(image).optional(),
    teachers: z.array(teacher).optional(),
    documents: z.array(document).optional(),
    materias: z.array(materia).optional(),
  }),
});

export const collections = { posts: postsCollection, verano: veranoCollection };
