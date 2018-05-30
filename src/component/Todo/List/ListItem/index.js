import React from 'react';
import { observer } from 'mobx-react';

const style = {
  display: 'flex',
  alignItems: 'center'
}

const checkBoxStyle = {
  padding: '8px'
}

const titleStyle = {
  margin: '8px 0',
  fontWeight: 'bold'
}

const descriptionStyle = {
  margin: '8px 0'
}

const ListItem = observer(({ todo }) => (
  <div style={style}>
    <div style={checkBoxStyle}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => todo.toggle()}
      />
    </div>
    <div>
      <p style={titleStyle}>{ todo.title }</p>
      <p style={descriptionStyle}>{ todo.description }</p>
    </div>
  </div>
));

export default ListItem;