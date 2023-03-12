import classes from './CourseGoal.module.css';

function CourseGoal({ icon, text }) {
  return (
    <li data-test-id={'course-goal-item'} className={classes.goal}>
      <span className={classes.icon}>{icon}</span>
      <span>{text}</span>
    </li>
  );
}

export default CourseGoal;
