let jokes = ["Why don't grasshoppers watch football? They prefer cricket!",

  "What is a ghosts favourite football position? Ghoulkeeper!",

  "Why did the manager bring pencils and sketchbooks into the dressing room before the, game? He was hoping for a draw!",

  "Have you heard about the new Arsenal Bra? It has a lot of support but no cups!",

  "Who scored the most goals in the Greek Mythology League? The centaur forward!",

  "What did the manager do when the pitch became flooded? He sent on his subs!",

  "My partner just split up with me because they think I'm obsessed with football. I'm a, bit gutted about it - wed been going out for three seasons.",

  "What did the referee say to the South American footballer in the World Cup who lied, about handling the ball? I don't Bolivia!",

  "three hours of football and the goalkeeper is still England's top scorer…",

  "Why do football players do well in school? They know how to use their heads",

  "During the World Cup in Brazil, the England team visited an orphanage. “It was, heart-breaking to see their sad little faces with no hope,” said João, age 6.",

  "As the team's struggles continued, a pound coin was thrown onto the pitch. Police are, trying to determine whether it was a missile or a takeover bid.",

  "What ship holds 20 football teams but only three leave it each season? The, Premier-ship!",

  "What's the difference between [insert team here] and a tea bag? The tea bag stays in, the cup!",

  "Why was the the best footballer in the world asked to tidy up their room? Because they, were Messi!",

  "What part of a football pitch smells nicest? The scenter spot!",

  "Why did the football quit the team? It was tired of being kicked around!",

  "What does a Arsenal fan do after watching their team win the Premier League?, Turn off the PlayStation!",

  "I was playing Football Manager on my PC when I was offered the [insert team here] job., I knew it was a poor squad with no future, so I declined the offer. I then put the, telephone down and returned to Football Manager.",

  "What tea do footballers drink? Penal-tea!",

  "Why aren't football stadiums built in outer space? Because there is no atmosphere!",

  "Why are footballers like babies? They both dribble!",

  "God and the devil were having an argument, and Satan proposed a football game between heaven and hell to resolve the dispute. God, in his eternal goodness, pointed out that, it wouldn't be a fair match because all the 'good' players go to heaven. The devil, smiled, replying, “Yes, but we've got all the refs",

  "Which soccer team has nailed their formation? The Hammers.",

  "Why did the footballer hold their boot to their ear? Because they liked sole music!",

  "What's the chilliest ground in the Premiership? Cold Trafford!",

  "Which team always start the match with a bang? The Gunners!",

  "What runs along the edge of the pitch but never moves? The sideline!",

  "Which team is the chewiest? The Toffees!",

  "What's the best position to play if you don't like football? Right back - right back in, the changing rooms…",

  "My computer's got the 'Bad-Goalie Virus'. It can't save anything.",

  "How did the football pitch end up as triangle? Somebody took a corner",

  "Why did the footballer take a piece of rope onto the pitch? They were the skipper",

  "How do football players stay cool during a game? They stand near the fans"]


  const myfunction = () =>{
    let output = document.getElementById("output")
    // this line generates random jokes out of 35 jokes array
    let rand_jokes = Math.ceil(Math.random() * 35)
    console.log(jokes[rand_jokes])
    output.innerHTML = jokes[rand_jokes]


  }