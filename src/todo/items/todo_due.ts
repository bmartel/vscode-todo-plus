
/* IMPORT */

import Consts from '../../consts';
import Item from './item';
import Todo from './todo';

/* TODO DUE */

class TodoDue extends Todo {

  static is ( str: string ) {

    return Item.is ( str, Consts.regexes.tagDue );

  }

}

/* EXPORT */

export default TodoDue;
