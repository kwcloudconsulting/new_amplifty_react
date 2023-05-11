// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, Todo, CommentTodo } = initSchema(schema);

export {
  Comment,
  Todo,
  CommentTodo
};