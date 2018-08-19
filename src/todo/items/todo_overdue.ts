
/* IMPORT */

import Consts from '../../consts';
import Item from './item';
import Todo from './todo';

/* TODO OVERDUE */

class TodoOverdue extends Todo {

  static is ( str: string ) {

    return Item.is ( str, Consts.regexes.tagOverdue );

  }

}

/* EXPORT */

export default TodoOverdue;
