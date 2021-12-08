export const taskBuilder = function (
  title,
  description,
  dueDate,
  priority,
  taskCompleteStatus
) {
  return { title, description, dueDate, priority, taskCompleteStatus };
};
