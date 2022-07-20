export const taskBuilder = function (
  title,
  description,
  dueDate,
  priority,
  isDone
) {
  return { title, description, dueDate, priority, isDone };
};
