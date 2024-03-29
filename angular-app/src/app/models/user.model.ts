export interface User {
  id: string;
  email: string;
  name?: string;
  about?: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  courseUsers: CourseUser[];
}
