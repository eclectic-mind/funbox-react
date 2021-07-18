
import React, { Component } from 'react';

const countMouses = (quantity) => {
  const str = quantity.toString();
  const lastChar = str[str.length - 1];
  const lastNumber = parseInt(lastChar, 10);
  if (lastNumber === 1) {
    return `мышь`;
  } else if (lastNumber > 1 && lastNumber < 5) {
    return ` мыши`;
  } else {
    return ` мышей`;
  }
}

const countPortions = (quantity) => {
  const str = quantity.toString();
  const lastChar = str[str.length - 1];
  const lastNumber = parseInt(lastChar, 10);
  if (lastNumber === 1) {
    return ` порция`;
  } else if (lastNumber > 1 && lastNumber < 5) {
    return ` порции`;
  } else {
    return ` порций`;
  }
}

const makeAdditionalClass = (isChosen, available) => {
  if (available === 0) return 'disabled';
  if (!!isChosen) return 'selected';
  else return '';
}
  
class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.children.id,
      ingredient: this.props.children.ingredient,
      portions: parseInt(this.props.children.portions, 10),
      mouses: parseInt(this.props.children.mouses, 10), 
      weight: this.props.children.weight, 
      comment: this.props.children.comment, 
      description: this.props.children.description, 
      available: parseInt(this.props.children.available, 10),
      isChosen: false
    };
  }
  
  render() {

    const giftText = countMouses(this.state.mouses);
    const portionsText = countPortions(this.state.portions);
    const additional = makeAdditionalClass(this.state.isChosen, this.state.available);
    const classNames = 'card ' + additional;

    return (
        <div className={classNames} onClick={this.choose.bind(this)}>
          <div className='inner'>
            <div className='content'>
              <p className='pre-name'>Сказочное заморское яство</p>
              <h3 className='product-name'>Нямушка</h3>
              <h4 className='ingredient'>{this.state.ingredient}</h4>
              <p className='details'>
                <span className='portions'><strong>{this.state.portions}</strong> {portionsText}</span>
                <span className='mouses'>
                  { this.state.mouses > 1 ? <strong>{this.state.mouses}</strong> : null }
                  {giftText} в подарок</span>
                <span className='comment'>{this.state.comment}</span>
              </p>
            </div>
            <span className='weight'>
              <big>{this.state.weight}</big> кг
            </span>
          </div>
          { !!this.state.isChosen && this.state.available > 0 ? <p className='description text-default'>{this.state.description}</p> : null }
          { !this.state.isChosen && this.state.available > 0 ? <p className='description text-chosen'>Чего сидишь? Порадуй котэ, <span className='buy'>купи.</span></p> : null }
          { this.state.available === 0 ? <p className='description text-out'>Печалька, {this.state.ingredient} закончился.</p> : null }
        </div>
      )
    }

    choose(evt) {
      evt.preventDefault();
      if (this.state.available > 0) {
        !!this.state.isChosen ? this.setState({isChosen: false}) : this.setState({isChosen: true})
      } else return;
    }

}

export default Card;