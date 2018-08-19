
/* IMPORT */

import Consts from '../../consts';
import Item from './item';
import Todo from './todo';

/* TODO ONTIME */

class TodoOntime extends Todo {

  static is ( str: string ) {

    return Item.is ( str, Consts.regexes.tagOntime );

  }

}

/* EXPORT */

export default TodoOntime;
