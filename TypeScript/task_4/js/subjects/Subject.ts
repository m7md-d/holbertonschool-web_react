// ========== Task 9: Namespace & Declaration merging - Subject ==========

namespace Subjects {
  export class Subject {
    teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
