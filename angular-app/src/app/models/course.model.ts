export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  categoryId: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
  courseUsers: CourseUser[];
}
