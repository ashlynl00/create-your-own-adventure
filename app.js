const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
console.log("Welcome to the Race to Space Adventure. \nAfter decades of scientists warning the world about climate change, the time has finally come. The world is ending, and located in Sydney, Australlia is the last rocket to be sent off to space, where you and other survivors can make a new life. But there's a small problem. You are currently in New York, so you have to find a way to get to Sydney ASAP, before the last seat is taken. But be careful about not only avoiding the disastrous things that climate change brings, but also of those trying to compete for the remaining seats. And most of all, remember to stay close to loved ones and friends. Good luck!");


//starting status
const status = {
    lives: 1,
    friends: 1,
    enemies: 0,
    money: 100,
    food: 10
}

console.log(`\nYou begin with ${status.lives} lives, ${status.friends} friends, ${status.enemies} enemies, ${status.money} money, and ${status.food} food. Once lives reaches 0, game over.`)
prompt('\nReply with s to start.')

//Decide between leave work without telling bff or tell bff before leaves.

const tellBff = () => {
    const tellBffDecision = prompt(`\nYour best friend doesn't know the world is ending, but if you tell them, then there might not be enough seats on the rocket ship for both of you. Enter [T] to tell them before you leave, or [L] to leave without them.`)
    if (tellBffDecision === 'T') {
        console.log("\nYou best friend is now forever thankful and leaves with you. You now have kept a friend and gained more money and food as your reward.")
        status.money += 50;
        status.food += 5;
        console.log(status);
    } else if (tellBffDecision === 'L') {
        console.log("\nYou have now lost a friend, and gained an enemy.")
        status.friends -= 1;
        status.enemies += 1;
        console.log(status);
    }
}
tellBff();

//Choose flight
console.log("\nYou now rush to the nearest airport to get the soonest flight to Sydney, only to find out that there are no more available flights to Sydney. You now have to choose between which detour city would help you get there. But hurry! There is a tsunami warning for the entire east coast of the United States. You have to make a decision quick!")

//traveling away from cities continued
const travelAwayFromCities = () => {
    if (status.money === 30) {
    console.log(`Unfortunately, camels move very slowly. You are in the middle of the desert, with no more food, and there are extreme temperatures hitting.`)
    status.food = 0;
    status.lives = 0;
    console.log(status);
    console.log(`You now have ${status.lives} lives. You lost the game. \nGAME OVER`);
} else if (status.food === 0) {
    console.log(`The child's parents fly you and your best friend to Sydney for free. But when you arrive, there is only room for either you or your best friend. Your best friend loves you so they give you the seat and sacrifice themselves for you. `);
    console.log(status);
    console.log(`Congrats! You have won the game! \nGAME OVER`);
}
}

//Morocco decisions
const moroccoDecision = () => {
    const chooseMoroccoDecision = prompt(`Welcome to Morocco! You have to move fast because there is a severe dust tornado headed your way that will take out the entire country. You have two options: enter [C] to pay 20 dollars to take a camel across the continent or enter [B] to pay 50 dollars to take a boat. `);
    if (chooseMoroccoDecision === 'C') {
        status.money -= 20;
        console.log("\n You can now take your camel to travel across the continent. Here is what you have now: ");
        console.log(status);
        travelAwayFromCities();
    } else if (chooseMoroccoDecision === 'B') {
        status.money -= 50;
        console.log("Good luck on your journey with the boat! You'll need it!! Here is what you have now: ")
        console.log(status);
        console.log("\n \n It's been one week on the boat, you have had no radio connection, until all of a sudden, you hear MAYDAY MAYDAY from a nearby boat. You and the others start to get worried. You now get wind that there is a hurricane category five headed your way in about five minutes.")
        status.lives = 0;
        console.log(status);
        console.log(`You now have ${status.lives} lives. You have lost the game. \nGAME OVER`);
    }
} 

//India decisions
const indiaDecision = () => {
    const chooseIndiaDecision = prompt(`You come across a young lost child who can't find their parents and is starving. Enter [F] to help and give them some of your food, or enter [L] to leave them and save the food for yourself. `);
    if (chooseIndiaDecision === 'F') {
        status.food -= 15;
        console.log(status);
        console.log("The child is forever greatful. They remember where they parents are and tell you they can help you since their parents own a plane and can fly you to Sydney. ");
        travelAwayFromCities();
    } else if (chooseIndiaDecision === 'L') {
        status.food = 0;
        status.lives = 0;
        console.log("You leave the child. Now three weeks have passed, you have no money and have not been able to find a way to get to Sydney.")
        console.log(status);
        console.log(`You now have ${status.lives} lives. You lost the game. \nGAME OVER`);
    }
}

//arrive in cities
const arriveInCities = () => {
        if(status.money === 50) {
        prompt(`Welcome to Morocco! You are getting even closer to Sydney! You have to move fast because there is a severe dust tornado headed your way that will take out the entire country. You have two options: enter [C] to pay 20 dollars to take a camel across the continent or enter [B] to pay 50 dollars to take a boat. `);
        moroccoDecision();
    } else if (status.money === 0) {
        console.log(`Welcome to India! You are getting even closer to Sydney! You must hurry though because there is no water or food in India, so you only have a limited amount of time! Find a way to get to Sydney ASAP!`);
        indiaDecision();
    }
}


const chooseFlight = () => {
    const chooseFlightDecision = prompt("\n There are only two flights left leaving New York in the next hour. The first flight goes to Morocco, for 100 dollars, and the second flight brings you to India for 150 dollars. Enter [M] for Morocco, or [I] for India.");
    if (chooseFlightDecision === 'M' && status.friends === 1) {
        //update status
        status.money -= 100;
        console.log(`\nJust in time! You made it out of New York before the tsunami arrived. Here is what you have now: `);
        console.log(status);
        arriveInCities();
    } else if (chooseFlightDecision === 'I' && status.friends === 1) {
        //update status
        status.money -= 150;
        console.log(`\nJust in time! You made it out of New York before the tsunami arrived. Here is what you have now: `);
        console.log(status);
        arriveInCities();
    } else if (chooseFlightDecision === 'M' && status.friends ===0) {
        console.log("\nUh oh! There seems to be an error. It looks like someone bought that last ticket right before you, and it just so happened to be your ex-best friend! \n You are stuck in New York, and the tsunami has arrived!!!")
        status.lives = 0;
        console.log(status);
        console.log(`\nYou have ${status.lives}. You have lost the game. \n GAME OVER`);
    } else if (chooseFlightDecision === 'I' && status.friends === 0) {
        console.log("\nUh oh! There seems to be an error. It looks like someone bought that last ticket right before you, and it just so happened to be your ex-best friend! \n You are stuck in New York, and the tsunami has arrived!!!")
        status.lives = 0;
        console.log(status);
        console.log(`\nYou have ${status.lives}. You have lost the game. \n GAME OVER`);
    }
}
chooseFlight();


