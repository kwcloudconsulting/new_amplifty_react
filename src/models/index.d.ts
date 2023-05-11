import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly Todos?: (CommentTodo | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly Todos: AsyncCollection<CommentTodo>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly comments?: (CommentTodo | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly comments: AsyncCollection<CommentTodo>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerCommentTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommentTodo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly commentId?: string | null;
  readonly todoId?: string | null;
  readonly comment: Comment;
  readonly todo: Todo;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommentTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommentTodo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly commentId?: string | null;
  readonly todoId?: string | null;
  readonly comment: AsyncItem<Comment>;
  readonly todo: AsyncItem<Todo>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommentTodo = LazyLoading extends LazyLoadingDisabled ? EagerCommentTodo : LazyCommentTodo

export declare const CommentTodo: (new (init: ModelInit<CommentTodo>) => CommentTodo) & {
  copyOf(source: CommentTodo, mutator: (draft: MutableModel<CommentTodo>) => MutableModel<CommentTodo> | void): CommentTodo;
}