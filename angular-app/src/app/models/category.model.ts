export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  courses: Course[];
}
