function nextPrompt() {
  prompt = prompts.pop();
  
  document.getElementById('nl').innerHTML = prompt[0];
  document.getElementById('en').innerHTML = prompt[1];
  
  if (prompts.length === 0) {
    shuffle();
  }
  
  used.push(prompt);
}

function shuffle() {
  prompts = used.sort( () => Math.random() - 0.5);
  used = [];
}

window.onload = (event) => {
  shuffle();
  nextPrompt();
};

let used = [
  ['Waarom heb je voor het Justus Lipsius College gekozen?', 'What made you choose the Justus Lipsius College?'],
  ['Wat studeer je en waarom heb je deze richting gekozen?', 'What are you studying and why did you choose that field of study?'],
  ['Welk dier zou je aan je persoonlijkheid linken?', 'What animal would you link to your personality?'],
  ['Wat is je favoriete kleding / kledingstijl?', 'What is you favourite clothing / clothingstyle?'],
  ['Welke superkracht zou je kiezen: Ontzichtbaar zijn of door de tijd kunnen reizen?', 'What superpower would you choose: Being invisible or traveling through time?'],
  ['Wat is tot zover je mening over het Alma eten?', 'What are you opinions on the alma food so far?'],
  ['Wat is je favoriete maand van het jaar en waarom?', 'What is your favourite month of the year and why?'],
  ['Wat is het laatste boek dat je hebt gelezen of aan het lezen bent? Wat vond/vind je ervan?', 'What is the last book you\'ve read or are currently reading? What do/did you think of it?'],
  ['Wat zijn je grootste ergernissen bij andere mensen?', 'What are your biggest pet peeves of other people?'],
  ['Wat drink je meestal tijdens het uitgaan?', 'What do you usually drink when going out?'],
  ['Wat zijn je (vreemdste) gewoontes tijdens het uitgaan?', 'What are you (weirdest) habits when going out?'],
  ['Waar zou je naartoe gaan als je alleen op reis zou gaan?', 'Where you go if you would go on a trip on your own?'],
  ['Wat zijn de top 3 dingen op je bucketlist?', 'What are the top 3 things on your bucketlist?'],
  ['Wat is je favoriete drankspelletje?', 'What is your favourite drinking game?'],
  ['Wat zou je zeker willen dat ik weet over je?', 'What would you definitely want me to know about you?'],
  ['Waar ben je het meest trots op?', 'What are you most proud of?'],
  ['Welke job zou je doodgraag willen doen ongeacht wat je nu studeert?', 'What job would you really love to do regardless of what you\'re studying right now?'],
  ['Als je een glas ziet dat maar tot de helft gevuld is, is deze dan halfvol of halfleeg?', 'If you see a glas thats only filled half way, is it half full or half empty?'],
  ['Waar kunnen we jou vinden tijdens het feesten?', 'Where would we be able to find you when you\'re at a party?'],
  ['Zon, zee of ski-vakantie?', 'Sun, beach or ski holiday?'],
  ['Ben je op alle lessen aanwezig geweest tot nu toe?', 'Have you been to all your classes so far?'],
  ['Single, ingewikkeld of in love?', 'Single, complicated or in love?'],
  ['In welk restaurant zou je voor de rest van je leven willen eten?', 'In what restaurant would you want to eat for the rest of your live?'],
  ['Wie is je favoriete superheld? (Reëel en/of fictie)', 'Who is your favourite superhero? (Real and/or fiction)'],
  ['Wat is je favoriete non-alcoholische drank?', 'What is your favorite non-alcoholic drink?'],
  ['Waar zou je heel graag beter in willen worden?', 'What would you like to get better at?'],
  ['Wat is het leukste dat je vandaag of gisteren gedaan hebt?', 'What is the most fun thing you did today or yesterday?'],
  ['Wat wou je later worden toen je nog een kind was? Is dit veranderd of nog altijd hetzelfde?', 'What did you want to become when you were a kid? Did this change or remain the same?'],
  ['Voldoet de residentie aan de verwachtingen die je had voor je naar hier kwam?', 'Does the residence meet the expectations you had before coming here?'],
  ['Wat is voor jouw een "must see" die jij nog wilt/moet zien?', 'What do you think is a "must see" which you still have to go see yourself?'],
  ['Tofste moment van je leven tot nu toe?', 'Best moment of your life up until now?'],
  ['Vertel een genant moment uit je leven', 'Tell an akward moment out of your life'],
  ['Vertel over je ergste first date ervaring (tell us everything)', 'Tell us your worst first date experience (tell us everything)'],
  ['Welke artiest (dood of levende) zou jij heel graag live zien?', 'Which artist (alive or dead) would you like to see live?'],
  ['Show jouw meest nutteloos talent en vertel hoe jij deze talent tegenkwam?', 'Show us your most useless talent and tell how you find this talent?'],
  ['Ga je liever naar een festival/concert of kijk je liever online een concert/optreden van je favorieten artiest?', 'Would you prefer to go to a festival/concert of your favorite band or to watch a concert online?'],
  ['Wat is jouw meest onpopulaire opinie?', 'What is your most unpopular opinion?'],
  ['Wat is iets dat jij heel graag zou willen doen maar nog niet hebt kunnen doen? (wegens schaamte, tijd, geen partner in crime te hebben, etc)', 'What would you like to do but couldn\'t do yet ? (because of shame, time, no partner in crime, etc)'],
  ['Wat zijn jouw doelen op korte termijn,middellange termijn en lange termijn?', 'What are your short term, middle-long term and long term goals?'],
  ['Welke talen spreek jij?', 'Which languages do you speak?']
];

let prompts = []