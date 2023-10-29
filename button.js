class Button {
  constructor(width, height, type, color) {
    this.props = {
      width: width,
      height: height,
      type: type,
      color: color,
    };
  }

  onClick() {
    console.log(this.props);
  }
}
const myButton = new Button(100, 40, "button", "green");
myButton.onClick();

function testButton(myButton) {
  if (
    myButton.props.width === 100 &&
    myButton.props.height === 40 &&
    myButton.props.type === "button" &&
    myButton.props.color === "green"
  ) {
    console.log("Свойства кнопки соответствуют заданным значениям.");
  } else {
    console.log("Свойства кнопки не соответствуют заданным значениям.");
  }
}

testButton(myButton);
