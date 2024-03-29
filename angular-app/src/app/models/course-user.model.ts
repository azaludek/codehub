export interface CourseUser {
  id: string;
  userId: string;
  courseId: string;
  user: User;
  course: Course;
  createdAt: Date;
  updatedAt: Date;
}
