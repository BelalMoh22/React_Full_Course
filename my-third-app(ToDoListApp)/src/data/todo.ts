// https://www.npmjs.com/package/uuid : it is a package to generate unique id
import { v4 as uuidv4 } from 'uuid';

const todos = [
  {
    id: uuidv4(),
    title: "تعليم رياكت",
    description: "تعليم رياكت من صفر إلى ماستر رياكت",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "تعليم ويب",
    description: "تعليم ويب من صفر إلى ماستر ويب",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "تعليم نود",
    description: "تعليم نود من صفر إلى ماستر نود",
    isCompleted: false,
  },
];

export default todos;
