function scuberGreetingForFeet(feet){
  // Write your code here!
    if (feet <= 400) {
      return "This one is on me!";
    } else if (feet > 2000 && feet <= 2500) {
      return "I will gladly take your thirty bucks.";
    } else if (feet > 2500) {
      return "No can do.";
    } else {
      return "Please enter a valid distance.";
    }
  }
  

function ternaryCheckCity(){
  // Write your code here!
  function ternaryCheckCity(destination) {
    return destination === 'NYC' ? 'Welcome to your desired destination!' : 'Sorry, we can\'t take you there.';
  }
}

function switchOnCharmFromTip(){
  // Write your code here!
  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case 'generous':
        return 'Thank you so much!';
      case 'average':
        return 'Thank you.';
      case 'cheap':
        return 'Thanks, I guess.';
      default:
        return 'Bye.';
    }
  }
}


